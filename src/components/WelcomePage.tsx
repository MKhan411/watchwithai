import React from 'react';
import { Play, Sparkles, Moon, Sun, LogOut } from 'lucide-react';
import { ThemeMode } from '../types';

interface WelcomePageProps {
  userName: string;
  onStartMoodCheck: () => void;
  onSurpriseMe: () => void;
  onLogout: () => void;
  themeMode: ThemeMode;
  onToggleTheme: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({
  userName,
  onStartMoodCheck,
  onSurpriseMe,
  onLogout,
  themeMode,
  onToggleTheme
}) => {
  return (
    <div className={`min-h-screen transition-all duration-300 ${
      themeMode === 'dark' 
        ? 'bg-black text-white' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Header with Theme Toggle and Logout */}
      <div className="absolute top-8 right-8 z-10 flex items-center gap-4">
        <button
          onClick={onToggleTheme}
          className={`p-3 rounded-full transition-all duration-200 hover:scale-105 ${
            themeMode === 'dark'
              ? 'bg-gray-900 hover:bg-gray-800 border border-gray-800'
              : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
          }`}
          aria-label="Toggle theme"
        >
          {themeMode === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>

        <button
          onClick={onLogout}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 ${
            themeMode === 'dark'
              ? 'bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300'
              : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700'
          }`}
          aria-label="Logout"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8">
        {/* Logo and Title */}
        <div className="text-center mb-20 space-y-8">
          <div className="text-6xl mb-8">🎬</div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight">
              WatchWithAI
            </h1>
            
            <div className="space-y-6">
              <p className={`text-2xl md:text-3xl font-light ${
                themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Hi, {userName}! 👋
              </p>
              
              <p className={`text-lg md:text-xl font-light italic ${
                themeMode === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`}>
                Feel it, feed it — watch what matches your mood
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <button
            onClick={onStartMoodCheck}
            className="group flex items-center justify-center gap-4 px-8 py-6 bg-red-600 hover:bg-red-700 text-white font-medium text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Play className="w-5 h-5" />
            Start MoodCheck
          </button>
          
          <button
            onClick={onSurpriseMe}
            className={`group flex items-center justify-center gap-4 px-8 py-6 font-medium text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border ${
              themeMode === 'dark'
                ? 'border-gray-800 hover:bg-gray-900 text-white'
                : 'border-gray-200 hover:bg-gray-50 text-gray-900'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            Surprise Me
          </button>
        </div>

        {/* Minimal Feature Grid */}
        <div className="mt-32 grid grid-cols-3 gap-16 max-w-2xl w-full">
          <div className="text-center space-y-3">
            <div className="text-2xl">🧠</div>
            <h3 className="font-medium text-sm tracking-wide uppercase">AI-Powered</h3>
          </div>
          
          <div className="text-center space-y-3">
            <div className="text-2xl">🌍</div>
            <h3 className="font-medium text-sm tracking-wide uppercase">Multi-Language</h3>
          </div>
          
          <div className="text-center space-y-3">
            <div className="text-2xl">👥</div>
            <h3 className="font-medium text-sm tracking-wide uppercase">Watch Together</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;