import React from 'react';
import { Activity, ShieldCheck, Heart, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';

export const Footer: React.FC = () => {
  const { setActiveTab } = useFitness();

  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md pt-12 pb-20 md:pb-12 text-slate-600 dark:text-slate-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200 dark:border-slate-800">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-primary-500 to-teal-400 flex items-center justify-center text-white">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-slate-900 dark:text-white">
                FitVerse AI
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Empowering college students across India with computer-vision pose detection, hostel diet planning, campus fitness leagues, and 24/7 wellness guidance.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                All Systems & Pose Models Operational
              </span>
            </div>
          </div>

          {/* SIH Hackathon Box */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Smart India Hackathon
            </h4>
            <div className="p-3 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-1">
              <span className="text-[11px] font-bold text-primary-600 dark:text-primary-400 block">
                Problem Statement SIH26196
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                Student Innovation: Ideas that can boost fitness activities and assist students in keeping fit.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Platform Modules
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => setActiveTab('workout')} className="hover:text-primary-500 transition-colors">
                  AI Pose Workout Tracker
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('coach')} className="hover:text-primary-500 transition-colors">
                  Dorm & Exam AI Coach
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('leaderboard')} className="hover:text-primary-500 transition-colors">
                  Inter-College Leaderboards
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('diet')} className="hover:text-primary-500 transition-colors">
                  Hostel Mess Nutrition Planner
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('challenges')} className="hover:text-primary-500 transition-colors">
                  30-Day Student Fitness Challenge
                </button>
              </li>
            </ul>
          </div>

          {/* Social and Legal */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Connect & Legal
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <ul className="space-y-1 text-xs pt-1">
              <li><span className="hover:underline cursor-pointer">Student Privacy Protocol</span></li>
              <li><span className="hover:underline cursor-pointer">Campus Emergency Terms</span></li>
              <li><span className="hover:underline cursor-pointer">Open Source Gym Dataset</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} FitVerse AI. Developed for Smart India Hackathon (SIH).</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>for Indian Student Fitness</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
