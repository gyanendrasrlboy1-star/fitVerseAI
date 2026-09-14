import React, { useState } from 'react';
import { 
  Activity, 
  Dumbbell, 
  LineChart, 
  Trophy, 
  Bot, 
  Award, 
  UtensilsCrossed, 
  User, 
  Bell, 
  Sun, 
  Moon, 
  AlertTriangle,
  Flame,
  Menu,
  X
} from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';
import { ActiveTab } from '../../types';
import { NotificationsDropdown } from '../common/NotificationsDropdown';

export const Navbar: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    profile, 
    dailyStats, 
    isDarkMode, 
    toggleDarkMode, 
    setIsSosOpen 
  } = useFitness();

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <Activity className="w-4 h-4" /> },
    { id: 'workout', label: 'AI Workout', icon: <Dumbbell className="w-4 h-4" /> },
    { id: 'coach', label: 'AI Coach', icon: <Bot className="w-4 h-4" /> },
    { id: 'progress', label: 'Progress', icon: <LineChart className="w-4 h-4" /> },
    { id: 'leaderboard', label: 'Leaderboard', icon: <Trophy className="w-4 h-4" /> },
    { id: 'challenges', label: 'Challenges', icon: <Award className="w-4 h-4" /> },
    { id: 'diet', label: 'Diet Planner', icon: <UtensilsCrossed className="w-4 h-4" /> },
    { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo and SIH Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-500 via-emerald-400 to-teal-400 p-0.5 shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary-500" />
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-emerald-600 to-teal-500 dark:from-primary-400 dark:via-emerald-400 dark:to-teal-300">
                  FitVerse
                </span>
                <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20">
                  AI
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide block -mt-0.5">
                SIH26196 • Campus Fit
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-primary-500/15 text-primary-700 dark:text-primary-300 font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Section: Streak, SOS, Notifs, Theme, Avatar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Streak Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{profile.streakDays} Day Streak</span>
          </div>

          {/* Emergency SOS Button */}
          <button
            onClick={() => setIsSosOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold shadow-sm shadow-rose-500/30 transition-all hover:scale-105 active:scale-95"
            title="Emergency Campus Medical & Safety SOS"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span className="hidden md:inline">SOS</span>
          </button>

          {/* Notifications Toggle */}
          <div className="relative">
            <button
              onClick={() => setIsNotifOpen(!isNotifOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white dark:ring-slate-900" />
            </button>
            <NotificationsDropdown isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* User Avatar */}
          <button
            onClick={() => setActiveTab('profile')}
            className="flex items-center gap-2 pl-1 group focus:outline-none"
          >
            <div className="relative">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-primary-500/50 group-hover:border-primary-500 transition-colors"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
            </div>
            <div className="hidden lg:block text-left">
              <span className="text-xs font-semibold text-slate-800 dark:text-white block leading-tight">
                {profile.name}
              </span>
              <span className="text-[10px] text-slate-400 block leading-tight">
                Lvl {profile.level} • {profile.college.split(' ')[0]}
              </span>
            </div>
          </button>

          {/* Mobile menu hamburger toggle for medium screens */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary-500/15 text-primary-600 dark:text-primary-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
