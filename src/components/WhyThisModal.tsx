import React from 'react';
import { X, Heart, Brain, Sparkles } from 'lucide-react';
import { MovieRecommendation, ThemeMode } from '../types';

interface WhyThisModalProps {
  movie: MovieRecommendation;
  isOpen: boolean;
  onClose: () => void;
  themeMode: ThemeMode;
}

const WhyThisModal: React.FC<WhyThisModalProps> = ({
  movie,
  isOpen,
  onClose,
  themeMode
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
        themeMode === 'dark' 
          ? 'bg-gray-900 border border-gray-800' 
          : 'bg-white border border-gray-200'
      }`}>
        {/* Header */}
        <div className="flex justify-between items-center p-8 border-b border-gray-200 dark:border-gray-800">
          <h3 className={`text-2xl font-light tracking-tight ${
            themeMode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Why {movie.title}?
          </h3>
          <button
            onClick={onClose}
            className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
              themeMode === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* AI Explanation */}
          <div className={`p-6 ${
            themeMode === 'dark' 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-gray-50 border border-gray-200'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-red-600" />
              <span className={`font-medium ${
                themeMode === 'dark' ? 'text-red-400' : 'text-red-600'
              }`}>
                AI Recommendation
              </span>
            </div>
            <p className={`text-lg leading-relaxed ${
              themeMode === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {movie.whyRecommended}
            </p>
          </div>

          {/* Mood Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 text-center ${
              themeMode === 'dark' 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-gray-50 border border-gray-200'
            }`}>
              <Heart className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-sm font-medium text-green-600 mb-2">Mood Match</div>
              <div className={`text-3xl font-light ${
                themeMode === 'dark' ? 'text-green-400' : 'text-green-700'
              }`}>
                {movie.moodScore}%
              </div>
            </div>

            <div className={`p-6 text-center ${
              themeMode === 'dark' 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-gray-50 border border-gray-200'
            }`}>
              <Sparkles className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
              <div className="text-sm font-medium text-yellow-600 mb-2">IMDB Rating</div>
              <div className={`text-3xl font-light ${
                themeMode === 'dark' ? 'text-yellow-400' : 'text-yellow-700'
              }`}>
                {movie.imdbRating}
              </div>
            </div>

            <div className={`p-6 text-center ${
              themeMode === 'dark' 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className="text-3xl mb-3">🎭</div>
              <div className="text-sm font-medium text-blue-600 mb-2">Genres</div>
              <div className={`text-sm font-medium ${
                themeMode === 'dark' ? 'text-blue-400' : 'text-blue-700'
              }`}>
                {movie.genre.join(', ')}
              </div>
            </div>
          </div>

          {/* Movie Details */}
          <div className="space-y-6">
            <h4 className={`text-lg font-medium ${
              themeMode === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Details
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <span className={`text-sm font-medium block mb-2 ${
                  themeMode === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Language & Subtitles
                </span>
                <p className={`${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                  {movie.language} • Subtitles: {movie.subtitles.join(', ')}
                </p>
              </div>
              
              <div>
                <span className={`text-sm font-medium block mb-2 ${
                  themeMode === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Duration
                </span>
                <p className={`${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                  {movie.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyThisModal;