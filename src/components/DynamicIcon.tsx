import React from 'react';
import { 
  Crown, TrendingUp, Zap, Layers, Target, 
  BarChart3, Mail, Share2, DownloadCloud, Users, 
  Rocket, Briefcase, Repeat, DollarSign, Layout, 
  Cpu, Brain, ShieldCheck, UserCheck, CheckCircle2,
  Sparkles, ChevronRight, Star, ArrowRight, Check,
  HelpCircle, Shield, Award, Clock, ArrowLeft, Menu, X
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case 'Crown': return <Crown className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Target': return <Target className={className} />;
    case 'BarChart3': return <BarChart3 className={className} />;
    case 'Mail': return <Mail className={className} />;
    case 'Share2': return <Share2 className={className} />;
    case 'DownloadCloud': return <DownloadCloud className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Rocket': return <Rocket className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Repeat': return <Repeat className={className} />;
    case 'DollarSign': return <DollarSign className={className} />;
    case 'Layout': return <Layout className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'UserCheck': return <UserCheck className={className} />;
    case 'CheckCircle2': return <CheckCircle2 className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    default: return <Sparkles className={className} />;
  }
};
