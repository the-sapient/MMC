import { useState } from 'react';
import { ViewId, Product } from './types';
import { PRODUCTS_DATA } from './data/products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ProductView } from './components/ProductView';
import { JoinModal } from './components/JoinModal';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewId>('home');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState<Product | null>(null);

  const handleSwitchView = (view: ViewId) => {
    setCurrentView(view);
  };

  const currentProductData = currentView !== 'home' ? PRODUCTS_DATA[currentView] : null;

  return (
    <div className="min-h-screen bg-obsidian text-bonewhite selection:bg-embergold selection:text-obsidian font-sans">
      
      {/* Fixed Top Navbar */}
      <Navbar
        currentView={currentView}
        onSwitchView={handleSwitchView}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />

      {/* Main SPA View Rendering */}
      <main className="transition-opacity duration-300">
        {currentView === 'home' ? (
          <HomeView
            onSwitchView={handleSwitchView}
            onOpenJoinModal={() => setIsJoinModalOpen(true)}
            onOpenCheckout={(prod) => setCheckoutProduct(prod)}
          />
        ) : currentProductData ? (
          <ProductView
            product={currentProductData}
            onSwitchView={handleSwitchView}
            onOpenCheckout={(prod) => setCheckoutProduct(prod)}
          />
        ) : (
          <div className="pt-40 pb-20 text-center">
            <h2 className="text-2xl font-bold">Product View Not Found</h2>
            <button onClick={() => setCurrentView('home')} className="mt-4 px-4 py-2 bg-emerald-500 text-slate-950 rounded-xl font-bold cursor-pointer">
              Return Home
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onSwitchView={handleSwitchView}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />

      {/* Join Collective Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      {/* Realistic Fake Checkout Modal */}
      <CheckoutModal
        product={checkoutProduct}
        isOpen={!!checkoutProduct}
        onClose={() => setCheckoutProduct(null)}
      />

    </div>
  );
}
