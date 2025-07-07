import React, { useState } from 'react';
import { User, Moon, Sun, Film } from 'lucide-react';
import { ThemeMode } from '../types';

interface LoginPageProps {
  onLogin: (name: string) => void;
  themeMode: ThemeMode;
  onToggleTheme: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  onLogin,
  themeMode,
  onToggleTheme
}) => {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setIsLoading(true);
      // Simulate a brief loading time for better UX
      setTimeout(() => {
        onLogin(name.trim());
        setIsLoading(false);
      }, 800);
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      themeMode === 'dark' 
        ? 'bg-black text-white' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Theme Toggle */}
      <div className="absolute top-8 right-8 z-10">
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
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8">
        {/* Logo and Title */}
        <div className="text-center mb-16 space-y-8">
          <div className="relative">
            <Film className={`w-20 h-20 mx-auto mb-8 ${
              themeMode === 'dark' ? 'text-red-600' : 'text-red-600'
            }`} />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight">
              WatchWithAI
            </h1>
            
            <p className={`text-lg md:text-xl font-light italic ${
              themeMode === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Feel it, feed it — watch what matches your mood
            </p>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <h2 className={`text-2xl font-light tracking-tight ${
              themeMode === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Welcome! What's your name?
            </h2>
            <p className={`text-base ${
              themeMode === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Let's personalize your movie experience
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                themeMode === 'dark' ? 'text-gray-500' : 'text-gray-400'
              }`} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className={`w-full pl-12 pr-4 py-4 text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 ${
                  themeMode === 'dark'
                    ? 'bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:bg-gray-800'
                    : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:bg-white'
                }`}
                required
                autoFocus
              />
            </div>

            <button
              type="submit"
              disabled={!name.trim() || isLoading}
              className={`w-full py-4 text-lg font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                !name.trim() || isLoading
                  ? themeMode === 'dark'
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Getting Ready...
                </div>
              ) : (
                'Continue'
              )}
            </button>
          </form>

          {/* Quick Login Options */}
          <div className="text-center space-y-4">
            <p className={`text-sm ${
              themeMode === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Or try with:
            </p>
            <div className="flex gap-3 justify-center">
              {['Alex', 'Sam', 'Jordan', 'Casey'].map((quickName) => (
                <button
                  key={quickName}
                  onClick={() => setName(quickName)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    themeMode === 'dark'
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
                  }`}
                >
                  {quickName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-20 grid grid-cols-3 gap-12 max-w-lg w-full">
          <div className="text-center space-y-3">
            <div className="text-2xl">🧠</div>
            <h3 className={`font-medium text-xs tracking-wide uppercase ${
              themeMode === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              AI-Powered
            </h3>
          </div>
          
          <div className="text-center space-y-3">
            <div className="text-2xl">🌍</div>
            <h3 className={`font-medium text-xs tracking-wide uppercase ${
              themeMode === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Multi-Language
            </h3>
          </div>
          
          <div className="text-center space-y-3">
            <div className="text-2xl">👥</div>
            <h3 className={`font-medium text-xs tracking-wide uppercase ${
              themeMode === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Watch Together
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;