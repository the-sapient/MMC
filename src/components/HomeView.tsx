import React from 'react';
import { Sparkles, ArrowRight, Shield, Crown, Users, Zap, CheckCircle2, Trophy, ArrowDown, HelpCircle, BookOpen, Target, Brain, Compass, Award } from 'lucide-react';
import { FAQSection } from './FAQSection';
import { ViewId, Product } from '../types';

import mmcExactFlyer from '../assets/images/mmc_exact_flyer_1782831979883.jpg';

interface HomeViewProps {
  onSwitchView: (view: ViewId) => void;
  onOpenJoinModal: () => void;
  onOpenCheckout: (product: Product) => void;
}

const MMC_FAQS = [
  {
    question: "What exactly is MMC?",
    answer: "MMC is a long-term mentorship ecosystem built around the mastery of human psychology, influence, marketing, copywriting, persuasion, and business growth. It is home to four distinct communities, each focused on a specific dimension of that mastery. Members have lifetime access to community learning, daily mentorship, and a continuously growing resource library."
  },
  {
    question: "Is MMC a course?",
    answer: "No. MMC is not a course you complete and move on from. It is a living, ongoing community. Learning inside MMC is continuous, practical, and built around real engagement with a mentor and a community of serious practitioners."
  },
  {
    question: "Who is MMC for?",
    answer: "MMC is for anyone who wants to develop genuine mastery over human behaviour and its applications in marketing, communication, business, and growth. Members include entrepreneurs, copywriters, marketers, freelancers, sales professionals, coaches, and anyone who wants to understand people more deeply and apply that understanding effectively."
  },
  {
    question: "Do I need experience to join?",
    answer: "No. MMC welcomes both beginners who are building their foundation and experienced practitioners who want to go deeper. The community is structured to support both."
  },
  {
    question: "What does lifetime membership mean?",
    answer: "You pay once and remain a member for as long as MMC exists. There is no renewal fee, no expiry date, and no ongoing subscription. The access, mentorship, and learning continue to grow alongside you."
  },
  {
    question: "Can I join more than one community?",
    answer: "Yes. The four communities are distinct paths within the same ecosystem. Many members participate in more than one as their interests and goals evolve."
  },
  {
    question: "How is this different from other online communities?",
    answer: "Most online communities offer access to content and a group chat. MMC offers daily personal mentorship, a philosophy-driven curriculum rooted in psychology and principle, and a community of people who are genuinely invested in long-term growth. The depth and consistency of the mentorship is what makes the difference."
  }
];

export const HomeView: React.FC<HomeViewProps> = ({ onSwitchView, onOpenJoinModal }) => {

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20 animate-in fade-in duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-obsidian pt-24 pb-28 md:pt-36 md:pb-40 border-b border-slate-900/80">
        {/* Ambient Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-embergold/15 to-amber-500/5 blur-[160px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-embergold/5 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Mystery Mastery Community Tag */}
          <span className="inline-block text-embergold font-mono text-xs md:text-sm font-bold uppercase tracking-widest mb-6 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/60 shadow-inner">
            Mystery Mastery Community
          </span>

          {/* Core Master Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight font-display max-w-5xl mx-auto leading-[1.1] mb-8">
            Africa's Leading Community for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-embergold via-yellow-100 to-amber-400">
              Mastering Human Influence,
            </span> <br className="hidden sm:inline" />
            Psychology, Marketing, Persuasion & Business Growth
          </h1>

          {/* Subtitle Copy */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-sans font-light">
            Most platforms teach information. MMC develops mastery. <br className="hidden md:inline" />
            <span className="text-white font-semibold">The difference is everything.</span>
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => scrollToSection('what-is-mmc')}
              className="w-full sm:w-auto py-4 px-10 rounded-2xl font-bold text-base bg-embergold hover:bg-embergold/90 text-obsidian shadow-xl shadow-embergold/20 transition-all active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer font-display"
            >
              Explore MMC
              <ArrowDown className="w-5 h-5 text-obsidian animate-bounce" />
            </button>
            <button
              onClick={onOpenJoinModal}
              className="w-full sm:w-auto py-4 px-10 rounded-2xl font-bold text-base bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 hover:border-slate-700 transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer font-display"
            >
              Begin Your Journey
              <ArrowRight className="w-4 h-4 text-embergold" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-20 pt-10 border-t border-slate-900/60 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-xs font-mono uppercase tracking-widest text-slate-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-embergold" />
              <span>Direct Mentorship Hub</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-embergold" />
              <span>Lifetime Member Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-embergold" />
              <span>100% Verified Outcomes</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHAT IS MMC SECTION */}
      <section id="what-is-mmc" className="py-24 bg-slate-950/40 border-b border-slate-900/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="flex items-center gap-2 text-embergold font-bold text-xs uppercase tracking-widest mb-6 font-mono">
              <Compass className="w-4 h-4" />
              What Is MMC
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display mb-8">
              MMC is not a course. It is not an online school. <span className="text-embergold">It is not another group chat with a PDF attached.</span>
            </h2>

            <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                It is a <strong className="text-white font-bold">long-term mentorship ecosystem</strong> built around one conviction: the people who develop genuine mastery over human psychology, communication, and business principles will always outperform the people who only collect information.
              </p>
              <p className="text-slate-400">
                Every community, every programme, and every piece of teaching inside MMC flows from that single idea.
              </p>
              <p className="text-slate-400 border-l-2 border-embergold/40 pl-6 italic">
                We exist for people who are serious about growth. Not quick wins. Not shortcuts. Real, compounding, principled development that changes how you think, how you communicate, and how you build.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY MMC EXISTS SECTION */}
      <section id="why-exists" className="py-24 bg-obsidian border-b border-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <span className="text-embergold font-mono text-xs uppercase tracking-widest font-bold block mb-4">
              Why MMC Exists
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display mb-10">
              The world has more information than it has ever had. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                Yet most people are still stuck.
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300 text-sm md:text-base leading-relaxed mb-12">
              <div className="space-y-4">
                <p>
                  Thousands of new courses launch every month. Webinars get recorded and forgotten. PDFs get downloaded and never opened. YouTube videos get saved into playlists that nobody ever finishes.
                </p>
                <p>
                  People are learning more than any generation before them. But something is not translating. Clients are still hard to find. Messages are still being ignored. Businesses are still struggling to grow.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-semibold text-white">
                  The problem is not lack of information. The problem is lack of understanding.
                </p>
                <p>
                  There is a significant difference between knowing what to do and understanding why people respond to things the way they do. Most marketing education teaches the what. Rarely does it go deep enough to teach the why.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 border-t border-slate-900/80 pt-8 max-w-3xl">
              <p className="text-base md:text-lg">
                The <strong className="text-white">why</strong> is human psychology. And psychology sits underneath everything.
              </p>
              <p className="text-slate-400 text-sm md:text-base">
                It sits underneath every sale. Every piece of copy. Every client conversation. Every brand that earns loyalty. Every message that gets shared. Every business that outlasts its competitors.
              </p>
              <p className="text-slate-400 text-sm md:text-base">
                MMC was built to close that gap.
              </p>
            </div>

            {/* Quote Callout */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 text-center">
              <p className="text-xl sm:text-2xl font-black font-display text-embergold leading-snug">
                "People don't need more information. They need better understanding."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHAT MAKES MMC DIFFERENT SECTION */}
      <section id="what-makes-different" className="py-24 bg-slate-950/40 border-b border-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            
            <span className="text-embergold font-mono text-xs uppercase tracking-widest font-bold block mb-4">
              What Makes MMC Different
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display mb-8">
              Most platforms give you access. <br />
              <span className="text-embergold">MMC gives you development.</span>
            </h2>

            <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                The distinction matters more than it sounds.
              </p>
              <p className="text-slate-400">
                Access means you can watch videos at 2x speed and check a box.
              </p>
              <p className="font-semibold text-white">
                Development means you are growing a capability that serves you for years. One is a transaction. The other is a transformation.
              </p>
              <p className="text-slate-400">
                Inside MMC, learning is daily, personal, and ongoing. There is no cohort that ends. There is no certificate and goodbye. There is a community that grows with you, a mentor who engages with you consistently, and a philosophy that treats your long-term development as the actual goal.
              </p>
            </div>

          </div>

          {/* Subsections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            
            <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800/80 shadow-lg hover:border-slate-700 transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-embergold/10 text-embergold mb-6 border border-embergold/20">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-display">Daily mentorship, not just content</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Members have daily access to their mentor. Not a ticketing system. Not a weekly live session that gets uploaded to a drive. Real, responsive, ongoing mentorship that meets you where you are.
              </p>
            </div>

            <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800/80 shadow-lg hover:border-slate-700 transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-embergold/10 text-embergold mb-6 border border-embergold/20">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-display">Mastery over tactics</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tactics change with every algorithm update. Principles do not. Inside MMC, we spend far more time on the principles behind influence, psychology, and communication than on any specific platform or trend. That is what makes the learning durable.
              </p>
            </div>

            <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800/80 shadow-lg hover:border-slate-700 transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-embergold/10 text-embergold mb-6 border border-embergold/20">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-display">A community that takes the long view</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Most communities are full of people chasing the next shortcut. MMC attracts people who have decided to do the deeper work. That shapes every conversation, every interaction, and every piece of value shared inside.
              </p>
            </div>

            <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800/80 shadow-lg hover:border-slate-700 transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-embergold/10 text-embergold mb-6 border border-embergold/20">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-display">Lifetime membership</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pay once. Stay forever. Your investment does not expire because your growth does not expire.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. THE PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-24 bg-obsidian border-b border-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <span className="text-embergold font-mono text-xs uppercase tracking-widest font-bold block mb-4">
              The Philosophy
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display mb-8">
              Mastery is not a destination. <br />
              <span className="text-embergold">It is a practice.</span>
            </h2>

            <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed mb-12">
              <p>
                MMC is built on a belief that most educational platforms quietly abandon: that becoming genuinely skilled at something takes time, consistent effort, feedback, and a community that holds you to a higher standard.
              </p>
              <p className="text-slate-400">
                The shortcut culture has been very effective at selling the idea that transformation is fast and easy. MMC does not sell that. We respect you too much.
              </p>
              <p className="text-white font-bold font-display pt-4">
                What we believe is this:
              </p>
            </div>

            {/* Core Convictions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                <h4 className="text-base font-bold text-white mb-2 font-display">Influence is not manipulation.</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  It is clarity. It is the ability to communicate so well that the right people understand exactly what you offer and why it matters to them.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                <h4 className="text-base font-bold text-white mb-2 font-display">Marketing is not noise.</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  It is psychology in practice. When you understand how people make decisions, how they form trust, and what makes them feel understood, marketing stops being a struggle and becomes a natural extension of who you are.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                <h4 className="text-base font-bold text-white mb-2 font-display">Community is not optional.</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Growth that happens in isolation is fragile. Growth that happens inside a committed community compounds.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                <h4 className="text-base font-bold text-white mb-2 font-display">Mentorship is irreplaceable.</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  No amount of content can replicate having someone in your corner who knows your work, challenges your thinking, and points you in the right direction when you are lost.
                </p>
              </div>

            </div>

            {/* Quote Callout */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-yellow-950/20 via-slate-900 to-yellow-950/20 border border-embergold/20 text-center">
              <p className="text-lg sm:text-xl font-bold font-display text-white italic">
                "Mastery takes time. The goal is not to learn more. The goal is to become better."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. EXPLORE THE COMMUNITIES / THREE MASTERY PATHS */}
      <section id="explore-paths" className="py-24 bg-slate-950/40 border-b border-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-embergold font-mono text-xs uppercase tracking-widest font-black block mb-4">
              Explore the Communities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display mb-6">
              One ecosystem. Three mastery paths.
            </h2>
            <p className="text-slate-300 text-base md:text-lg">
              MMC is home to Three distinct communities, each focused on a specific dimension of mastery. You can begin in one and grow into others over time. Each community stands on its own while contributing to the larger ecosystem.
            </p>
          </div>

          {/* Three Paths Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Path 1: Mysterious Psychology */}
            <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-8 flex flex-col justify-between hover:border-embergold/40 transition-all shadow-xl relative overflow-hidden group">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-embergold tracking-widest block mb-4">PATH ONE</span>
                <h3 className="text-2xl font-extrabold text-white font-display mb-2">Mysterious Psychology</h3>
                <p className="text-xs font-mono text-embergold/80 mb-6 font-semibold">Understand people. Understand yourself.</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  This community is dedicated to the deepest layer of everything MMC teaches. Human behaviour, influence, persuasion, emotional intelligence, decision-making, and the psychological principles that shape every interaction. Whether you are a professional who wants to communicate more effectively or someone who simply wants to understand why people do what they do, this community will reshape the way you see the world.
                </p>
              </div>
              <button
                onClick={() => onSwitchView('mysterious-psychology')}
                className="w-full mt-6 py-3 px-5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-800 hover:border-embergold/40 transition-all flex items-center justify-between group-hover:text-embergold cursor-pointer"
              >
                <span>Explore Mysterious Psychology</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Path 2: Mysterious Marketers and Copywriters */}
            <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-8 flex flex-col justify-between hover:border-embergold/40 transition-all shadow-xl relative overflow-hidden group">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-embergold tracking-widest block mb-4">PATH TWO</span>
                <h3 className="text-2xl font-extrabold text-white font-display mb-2">Mysterious Marketers & Copywriters</h3>
                <p className="text-xs font-mono text-embergold/80 mb-6 font-semibold">Write with intention. Market with depth.</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  For those who want to master the craft of persuasive writing and psychology-driven marketing. This community covers copywriting, positioning, brand storytelling, emotional response writing, and the kind of marketing that works not because of tricks but because it genuinely connects with people. Members learn to write copy that converts, build brands that are remembered, and develop a marketing voice that is distinctly their own.
                </p>
              </div>
              <button
                onClick={() => onSwitchView('mystery-mastery')}
                className="w-full mt-6 py-3 px-5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-800 hover:border-embergold/40 transition-all flex items-center justify-between group-hover:text-embergold cursor-pointer"
              >
                <span>Explore Mysterious Marketers & Copywriters</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Path 3: Honest To God Client Acquisition */}
            <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-8 flex flex-col justify-between hover:border-embergold/40 transition-all shadow-xl relative overflow-hidden group">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-embergold tracking-widest block mb-4">PATH THREE</span>
                <h3 className="text-2xl font-extrabold text-white font-display mb-2">Honest To God Client Acquisition</h3>
                <p className="text-xs font-mono text-embergold/80 mb-6 font-semibold">Build authority. Attract the right clients.</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Client acquisition that does not rely on desperation, cold pitching, or race-to-the-bottom pricing. This community teaches how to position yourself so that the right clients find you, trust you, and want to work with you. It covers authority building, visibility systems, referral architecture, and the long-term strategy behind a sustainable business. Ethical, effective, and built to last.
                </p>
              </div>
              <button
                onClick={() => onSwitchView('profit-playbook')}
                className="w-full mt-6 py-3 px-5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-800 hover:border-embergold/40 transition-all flex items-center justify-between group-hover:text-embergold cursor-pointer"
              >
                <span>Explore Honest To God Client Acquisition</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Optional Learning-Earning Method Callout */}
          <div className="mt-12 bg-gradient-to-r from-slate-900 via-yellow-950/20 to-slate-900 border border-slate-800 hover:border-embergold/30 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-embergold text-obsidian rounded mb-2 inline-block">
                LEARNING-EARNING PORTAL
              </span>
              <h3 className="text-lg font-bold text-white font-display mb-1">
                Looking for the 500k Affiliate Structure?
              </h3>
              <p className="text-slate-400 text-xs">
                Resell elite digital systems and keep 100% of your earnings above product base costs. Apply advanced marketing in real-time.
              </p>
            </div>
            <button
              onClick={() => onSwitchView('affiliate-structure')}
              className="py-3 px-6 rounded-xl font-bold text-xs bg-embergold hover:bg-embergold/90 text-obsidian shadow-lg shadow-embergold/10 transition-all cursor-pointer inline-flex items-center gap-2 group shrink-0"
            >
              <span>Explore 500k Affiliate Structure</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* 7. WHY MEMBERS STAY SECTION */}
      <section id="why-members-stay" className="py-24 bg-obsidian border-b border-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            
            <span className="text-embergold font-mono text-xs uppercase tracking-widest font-bold block mb-4">
              Why Members Stay
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display mb-8">
              People join MMC for information. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
                They stay because of transformation.
              </span>
            </h2>

            <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed">
              <p>
                Many members arrive after trying courses that left them more confused than when they started. They arrive having spent money, watched videos, and still felt like something essential was missing.
              </p>
              <p className="text-slate-400">
                What they find inside MMC is different. Not because the content is louder or the promises are bigger. But because the environment is built differently.
              </p>
              <p className="text-slate-400">
                When your mentor is accessible every day, you stop accumulating unanswered questions. When your community is full of people who are genuinely doing the work, you stop feeling like growth is supposed to be a lonely experience. When the teaching goes deep into psychology and principle rather than surface-level tactics, you start to understand things at a level that changes how you approach everything.
              </p>
              <p className="font-semibold text-white">
                Members stay because the learning compounds. Every month inside MMC adds to a foundation that keeps paying back.
              </p>
            </div>

          </div>

          {/* Members Testimonials (Direct PDF Copy) */}
          <div className="max-w-4xl mx-auto space-y-8 mt-12">
            <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-slate-500">
              Here is what members have said.
            </h4>

            {/* Testimonial 1 */}
            <div className="border-l-4 border-embergold pl-6 py-2">
              <p className="text-slate-200 text-base md:text-lg italic leading-relaxed mb-3">
                “Being a member of MMC is one of the best things I have ever done this year. I can proudly beat my chest and say that I have not seen a lifetime training as good as MMC.”
              </p>
              <span className="text-embergold font-bold font-display text-sm">— Uzoma Reg</span>
            </div>

            {/* Testimonial 2 */}
            <div className="border-l-4 border-embergold pl-6 py-2">
              <p className="text-slate-200 text-base md:text-lg italic leading-relaxed mb-3">
                “MMC is beyond a copywriting community. It is a copy family. The best part is that Sagacious is so supportive that if you need his attention in a specific area, he will give it to you until you are satisfied. I have also gotten mind-blowing opportunities just by being part of this community.”
              </p>
              <span className="text-embergold font-bold font-display text-sm">— David Chibueze</span>
            </div>

            {/* Testimonial 3 */}
            <div className="border-l-4 border-embergold pl-6 py-2">
              <p className="text-slate-200 text-base md:text-lg italic leading-relaxed mb-3">
                “Majority of what is in MMC is not your regular copywriting teaching. It is super powerful. I implemented some of the strategies for my own use and I have seen my audience come to respect me. I will recommend anybody to join MMC because it is more than just copywriting.”
              </p>
              <span className="text-embergold font-bold font-display text-sm">— Emake Johnson</span>
            </div>

            {/* Testimonial 4 */}
            <div className="border-l-4 border-embergold pl-6 py-2">
              <p className="text-slate-200 text-base md:text-lg italic leading-relaxed mb-3">
                “This school is not for the lazy, impatient, or those who want shortcuts. It is for those who are ready to learn, research, implement, and relearn. The teachings carry deep insights that you have to read slowly to get the full value.”
              </p>
              <span className="text-embergold font-bold font-display text-sm">— Florence</span>
            </div>

          </div>

        </div>
      </section>

      {/* 8. MEET THE FOUNDERS SECTION */}
      <section id="meet-founder" className="py-24 bg-slate-950/40 border-b border-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-embergold font-mono text-xs uppercase tracking-widest font-bold block mb-4">
              Meet the Founders
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display mb-4">
              The Minds Behind MMC
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Meet the strategists and copywriters dedicated to your long-term psychological and commercial growth.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Sagacious Tehilla */}
            <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed p-8 rounded-3xl bg-slate-900/40 border border-slate-800/60 shadow-lg hover:border-slate-700/60 transition-all">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-1">
                  Sagacious Tehilla
                </h3>
                <p className="text-embergold font-mono text-xs uppercase tracking-wider font-bold">
                  Founder and Mystery Curator, MMC
                </p>
              </div>

              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                Sagacious Tehilla is a psychology-oriented copywriter, direct response strategist, and the founder of Mystery Mastery Community.
              </p>
              <p className="text-slate-400">
                He built MMC from a deep frustration with how marketing and copywriting education were being delivered. Not because good teachers did not exist, but because the system was wrong. Short programmes. No follow-up. Tactics without principles. Information without mentorship.
              </p>
              <p className="text-slate-400">
                His work is grounded in the belief that marketing, copywriting, communication, and business growth are all expressions of one underlying discipline: understanding human behaviour. That conviction shapes everything inside MMC.
              </p>
              <p className="text-slate-400">
                He has worked across copywriting, brand strategy, client acquisition, and digital psychology, and brings that breadth into the community through daily teaching, frameworks, and direct engagement with members.
              </p>
              <p className="border-l-2 border-embergold/30 pl-4 py-1 italic text-slate-400 text-sm">
                "His approach is not about claiming to have all the answers. It is about building a space where the right questions get asked, the right principles get studied, and serious people find the support they need to grow."
              </p>
            </div>

            {/* David Chijioke */}
            <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed p-8 rounded-3xl bg-slate-900/40 border border-slate-800/60 shadow-lg hover:border-slate-700/60 transition-all">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-1">
                  David Chijioke
                </h3>
                <p className="text-embergold font-mono text-xs uppercase tracking-wider font-bold">
                  Business Growth Strategist & Founder, The Sapient
                </p>
              </div>

              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                David Chijioke is a business growth strategist, direct response marketer, and the founder of The Sapient.
              </p>
              <p className="text-slate-400">
                He built The Sapient from a simple observation: most businesses do not struggle because they lack products or ambition. They struggle because they fail to attract attention, build trust, and convert that trust into predictable revenue. Marketing has become increasingly tactical, while business growth requires systems.
              </p>
              <p className="text-slate-400">
                His work is built on the belief that sustainable growth happens when marketing, sales, positioning, customer psychology, and business strategy work as one integrated system. Every campaign, message, and growth strategy begins with understanding people before persuading them.
              </p>
              <p className="text-slate-400">
                Over the years, he has worked across direct response copywriting, marketing strategy, content positioning, SEO, digital brand building, lead generation, and business consulting, helping businesses transform ideas into measurable commercial results.
              </p>
              <p className="border-l-2 border-embergold/30 pl-4 py-1 italic text-slate-400 text-sm">
                "His approach is not centred on marketing for its own sake. It is about helping ambitious founders and organisations build businesses that attract the right customers, create lasting authority, and generate consistent growth through clear strategy and effective execution."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS SECTION */}
      <FAQSection 
        title="Common questions about MMC"
        subtitle="Everything you need to know about the Mystery Mastery Community ecosystem, access, and structure."
        faqs={MMC_FAQS} 
      />

      {/* 10. BEGIN YOUR JOURNEY (FINAL CTA) */}
      <section className="py-28 bg-gradient-to-b from-obsidian via-slate-900 to-obsidian relative overflow-hidden text-center border-t border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#C49A3C_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="w-16 h-16 bg-embergold/10 border border-embergold/30 text-embergold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
            <Trophy className="w-8 h-8 animate-pulse" />
          </div>

          <span className="text-embergold font-mono text-xs uppercase tracking-widest font-bold block mb-4">
            Begin Your Journey
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 font-display">
            You have found something <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-embergold to-amber-200">built differently.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
            Most people will keep collecting information they never apply. A few will decide to build something deeper. This community exists for the second group.
          </p>

          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
            MMC does not promise overnight results. It promises a better version of you, compounding over time, inside a community that takes your growth as seriously as you do.
          </p>

          <p className="text-lg md:text-xl font-bold font-display text-embergold mb-10 max-w-xl mx-auto">
            If you are ready to stop collecting and start mastering, your path begins here.
          </p>

          <button
            onClick={onOpenJoinModal}
            className="py-5 px-12 rounded-2xl font-extrabold text-lg bg-embergold hover:bg-embergold/90 text-obsidian shadow-2xl shadow-embergold/30 transition-all active:scale-[0.99] cursor-pointer inline-flex items-center gap-3 font-display"
          >
            <Sparkles className="w-6 h-6 fill-obsidian" />
            Begin Your Journey
          </button>

          <p className="text-xs text-slate-500 font-mono mt-6">
            🔒 Secured Enrollment • Lifetime Access Granted Immediately
          </p>
        </div>
      </section>

      {/* 11. PDF PAGE 9 FOOTER COPY */}
      <footer className="py-16 bg-slate-950 border-t border-slate-900/80 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          
          <p className="text-slate-400 text-sm italic font-sans">
            Or explore the three communities and find your mastery path.
          </p>

          <div className="border-t border-slate-900/60 pt-6">
            <h5 className="text-embergold font-mono text-sm uppercase tracking-widest font-black mb-3">
              MYSTERY MASTERY COMMUNITY
            </h5>
            <p className="text-white text-base font-display font-medium mb-6">
              Master people. Master communication. Master business. Master yourself.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-500 font-mono mb-6">
              <span className="hover:text-embergold transition-colors cursor-pointer" onClick={() => onSwitchView('mysterious-psychology')}>Mysterious Psychology</span>
              <span>|</span>
              <span className="hover:text-embergold transition-colors cursor-pointer" onClick={() => onSwitchView('mystery-mastery')}>Mysterious Marketers and Copywriters</span>
              <span>|</span>
              <span className="hover:text-embergold transition-colors cursor-pointer" onClick={() => onSwitchView('profit-playbook')}>Honest To God Client Acquisition</span>
            </div>

            <p className="text-[10px] text-slate-600 font-mono max-w-2xl mx-auto leading-relaxed">
              Founded by Sagacious Tehilla | Africa's Leading Community for Human Influence, Psychology, Marketing, Persuasion and Business Growth
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
};

