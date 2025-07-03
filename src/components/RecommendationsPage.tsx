import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Shuffle, Film } from 'lucide-react';
import { MovieRecommendation, ThemeMode } from '../types';
import MovieCard from './MovieCard';
import WhyThisModal from './WhyThisModal';
import WatchWithFriends from './WatchWithFriends';

interface RecommendationsPageProps {
  recommendations: MovieRecommendation[];
  onBack: () => void;
  themeMode: ThemeMode;
}

const RecommendationsPage: React.FC<RecommendationsPageProps> = ({
  recommendations,
  onBack,
  themeMode
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState<MovieRecommendation | null>(null);
  const [showWhyModal, setShowWhyModal] = useState(false);
  const [showFriendsModal, setShowFriendsModal] = useState(false);

  const handleWhyThis = (movie: MovieRecommendation) => {
    setSelectedMovie(movie);
    setShowWhyModal(true);
  };

  const handleWatchWithFriends = (movie: MovieRecommendation) => {
    setSelectedMovie(movie);
    setShowFriendsModal(true);
  };

  const nextRecommendation = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };

  const prevRecommendation = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  const shuffleRecommendations = () => {
    const randomIndex = Math.floor(Math.random() * recommendations.length);
    setCurrentIndex(randomIndex);
  };

  // Check if recommendations array is empty or if current movie is undefined
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className={`min-h-screen transition-all duration-300 ${
        themeMode === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-8">
          <button
            onClick={onBack}
            className={`flex items-center gap-3 px-6 py-3 font-medium transition-all duration-200 hover:scale-105 ${
              themeMode === 'dark'
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          
          <h1 className={`text-2xl font-light tracking-tight ${
            themeMode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Perfect Matches
          </h1>
          
          <div className="w-24"></div>
        </div>

        {/* No Recommendations Message */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-8">
          <div className="text-center max-w-md mx-auto space-y-8">
            <Film className={`w-16 h-16 mx-auto ${
              themeMode === 'dark' ? 'text-gray-600' : 'text-gray-400'
            }`} />
            <div className="space-y-4">
              <h2 className={`text-3xl font-light tracking-tight ${
                themeMode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                No Recommendations Found
              </h2>
              <p className={`text-lg font-light ${
                themeMode === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Try adjusting your preferences and search again
              </p>
            </div>
            <button
              onClick={onBack}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium transition-all duration-200 hover:scale-[1.02]"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      themeMode === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-8">
        <button
          onClick={onBack}
          className={`flex items-center gap-3 px-6 py-3 font-medium transition-all duration-200 hover:scale-105 ${
            themeMode === 'dark'
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        
        <h1 className={`text-2xl font-light tracking-tight ${
          themeMode === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Perfect Matches
        </h1>
        
        <button
          onClick={shuffleRecommendations}
          className={`flex items-center gap-3 px-6 py-3 font-medium transition-all duration-200 hover:scale-105 ${
            themeMode === 'dark'
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Shuffle className="w-5 h-5" />
          Shuffle
        </button>
      </div>

      {/* Recommendations Carousel */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Current Recommendation */}
          <div className="relative">
            <MovieCard
              movie={recommendations[currentIndex]}
              themeMode={themeMode}
              onWhyThis={handleWhyThis}
              onWatchWithFriends={handleWatchWithFriends}
            />
            
            {/* Navigation Buttons */}
            {recommendations.length > 1 && (
              <>
                <button
                  onClick={prevRecommendation}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 p-4 transition-all hover:scale-110 ${
                    themeMode === 'dark'
                      ? 'bg-gray-900 hover:bg-gray-800 text-white border border-gray-800'
                      : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-lg'
                  }`}
                  aria-label="Previous recommendation"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextRecommendation}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 p-4 transition-all hover:scale-110 ${
                    themeMode === 'dark'
                      ? 'bg-gray-900 hover:bg-gray-800 text-white border border-gray-800'
                      : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-lg'
                  }`}
                  aria-label="Next recommendation"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
          
          {/* Pagination Dots */}
          {recommendations.length > 1 && (
            <div className="flex justify-center gap-3 mt-12">
              {recommendations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 transition-all ${
                    index === currentIndex
                      ? 'bg-red-600 scale-125'
                      : themeMode === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to recommendation ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {selectedMovie && (
        <>
          <WhyThisModal
            movie={selectedMovie}
            isOpen={showWhyModal}
            onClose={() => setShowWhyModal(false)}
            themeMode={themeMode}
          />
          
          <WatchWithFriends
            movie={selectedMovie}
            isOpen={showFriendsModal}
            onClose={() => setShowFriendsModal(false)}
            themeMode={themeMode}
          />
        </>
      )}
    </div>
  );
};

export default RecommendationsPage;