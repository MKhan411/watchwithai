import React, { useState } from 'react';
import { Play, Star, Users, Info, ExternalLink } from 'lucide-react';
import { MovieRecommendation, ThemeMode } from '../types';
import { getPlatformIcon } from '../utils';

interface MovieCardProps {
  movie: MovieRecommendation;
  themeMode: ThemeMode;
  onWhyThis: (movie: MovieRecommendation) => void;
  onWatchWithFriends: (movie: MovieRecommendation) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  themeMode,
  onWhyThis,
  onWatchWithFriends
}) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className={`overflow-hidden transition-all duration-300 ${
      themeMode === 'dark' 
        ? 'bg-gray-900 border border-gray-800' 
        : 'bg-white border border-gray-200 shadow-xl'
    }`}>
      {/* Movie Poster */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Mood Score Badge */}
        <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 text-sm font-medium">
          {movie.moodScore}% Match
        </div>
        
        {/* Play Button */}
        <button
          onClick={() => setShowTrailer(true)}
          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300"
          aria-label="Play trailer"
        >
          <div className="bg-white/20 backdrop-blur-sm p-6 hover:bg-white/30 transition-all">
            <Play className="w-8 h-8 text-white" />
          </div>
        </button>
      </div>

      {/* Movie Details */}
      <div className="p-8 space-y-6">
        {/* Title and Rating */}
        <div className="flex justify-between items-start gap-6">
          <h3 className={`text-2xl font-light tracking-tight ${
            themeMode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {movie.title}
          </h3>
          <div className="flex items-center gap-2 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-medium">{movie.imdbRating}</span>
          </div>
        </div>

        {/* Platforms */}
        <div className="flex flex-wrap gap-3">
          {movie.platforms.map((platform) => (
            <span
              key={platform}
              className={`flex items-center gap-2 px-3 py-1 text-xs font-medium ${
                themeMode === 'dark' 
                  ? 'bg-gray-800 text-gray-300 border border-gray-700' 
                  : 'bg-gray-50 text-gray-700 border border-gray-200'
              }`}
            >
              <span>{getPlatformIcon(platform)}</span>
              {platform}
            </span>
          ))}
        </div>

        {/* Summary */}
        <p className={`text-base leading-relaxed ${
          themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {movie.summary}
        </p>

        {/* Language and Duration */}
        <div className="flex justify-between items-center text-sm">
          <span className={`${themeMode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            {movie.language} • {movie.duration}
          </span>
          <span className={`${themeMode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            {movie.year}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            onClick={() => onWhyThis(movie)}
            className={`flex items-center gap-3 px-6 py-3 font-medium transition-all hover:scale-[1.02] ${
              themeMode === 'dark'
                ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                : 'bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200'
            }`}
          >
            <Info className="w-4 h-4" />
            Why This?
          </button>
          
          <button
            onClick={() => onWatchWithFriends(movie)}
            className="flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium transition-all hover:scale-[1.02]"
          >
            <Users className="w-4 h-4" />
            Watch Together
          </button>
        </div>
      </div>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-white overflow-hidden max-w-4xl w-full max-h-[80vh]">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h4 className="text-xl font-medium text-gray-900">{movie.title} - Trailer</h4>
              <button
                onClick={() => setShowTrailer(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={getYouTubeEmbedUrl(movie.trailerUrl)}
                title={`${movie.title} Trailer`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;