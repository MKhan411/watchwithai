import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';
import { ThemeMode } from '../types';

interface LoadingScreenProps {
  themeMode: ThemeMode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ themeMode }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 10;
      });
    }, 150);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
      themeMode === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <div className="text-center space-y-12 max-w-md mx-auto px-8">
        {/* Loading Icon */}
        <div className="relative">
          <Brain className={`w-16 h-16 mx-auto ${
            themeMode === 'dark' ? 'text-red-600' : 'text-red-600'
          }`} />
        </div>
        
        {/* Loading Text */}
        <div className="space-y-6">
          <h2 className={`text-3xl font-light tracking-tight ${
            themeMode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Analyzing Your Mood
          </h2>
          <p className={`text-lg font-light ${
            themeMode === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Finding perfect matches
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full max-w-xs mx-auto space-y-4">
          <div className={`h-1 ${
            themeMode === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
          }`}>
            <div 
              className="h-1 bg-red-600 transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className={`text-sm text-center font-medium ${
            themeMode === 'dark' ? 'text-gray-500' : 'text-gray-500'
          }`}>
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;