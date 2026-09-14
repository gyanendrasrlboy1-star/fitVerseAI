import React from 'react';
import { Activity, Dumbbell, Bot, LineChart, User } from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';
import { ActiveTab } from '../../types';

export const MobileNav: React.FC = () => {
  const { activeTab, setActiveTab } = useFitness();

  const mobileTabs: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Home', icon: <Activity className="w-5 h-5" /> },
    { id: 'workout', label: 'Workout', icon: <Dumbbell className="w-5 h-5" /> },
    { id: 'coach', label: 'AI Coach', icon: <Bot className="w-5 h-5" /> },
    { id: 'progress', label: 'Progress', icon: <LineChart className="w-5 h-5" /> },
    { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-2 py-2">
      <div className="flex items-center justify-around">
        {mobileTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-colors relative ${
                isActive
                  ? 'text-primary-600 dark:text-primary-400 font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {isActive && (
                <span className="absolute -top-2 w-8 h-1 bg-primary-500 rounded-full" />
              )}
              {tab.icon}
              <span className="text-[10px]">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
