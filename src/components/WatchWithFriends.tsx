import React, { useState } from 'react';
import { X, Copy, Users, Share2, Check } from 'lucide-react';
import { MovieRecommendation, ThemeMode } from '../types';
import { generateSessionCode } from '../utils';

interface WatchWithFriendsProps {
  movie: MovieRecommendation;
  isOpen: boolean;
  onClose: () => void;
  themeMode: ThemeMode;
}

const WatchWithFriends: React.FC<WatchWithFriendsProps> = ({
  movie,
  isOpen,
  onClose,
  themeMode
}) => {
  const [sessionCode, setSessionCode] = useState(() => generateSessionCode());
  const [copied, setCopied] = useState(false);
  const [participants] = useState(['You', 'Waiting for friends...']);

  if (!isOpen) return null;

  const shareUrl = `https://watchwith.ai/session/${sessionCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Watch ${movie.title} together!`,
        text: `Join me to watch ${movie.title} - it's a ${movie.moodScore}% mood match!`,
        url: shareUrl
      });
    } else {
      handleCopy();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className={`max-w-2xl w-full ${
        themeMode === 'dark' 
          ? 'bg-gray-900 border border-gray-800' 
          : 'bg-white border border-gray-200'
      }`}>
        {/* Header */}
        <div className="flex justify-between items-center p-8 border-b border-gray-200 dark:border-gray-800">
          <h3 className={`text-2xl font-light tracking-tight ${
            themeMode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Watch Together
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
          {/* Movie Info */}
          <div className={`p-6 ${
            themeMode === 'dark' 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-gray-50 border border-gray-200'
          }`}>
            <div className="flex items-center gap-6">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-20 h-20 object-cover"
              />
              <div>
                <h4 className={`text-xl font-medium mb-2 ${
                  themeMode === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {movie.title}
                </h4>
                <p className={`${
                  themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {movie.moodScore}% mood match • {movie.duration}
                </p>
              </div>
            </div>
          </div>

          {/* Session Code */}
          <div className="text-center space-y-6">
            <div className={`p-6 ${
              themeMode === 'dark' 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-6 h-6 text-red-600" />
                <span className={`font-medium ${
                  themeMode === 'dark' ? 'text-red-400' : 'text-red-600'
                }`}>
                  Session Code
                </span>
              </div>
              <div className={`text-4xl font-light tracking-widest ${
                themeMode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {sessionCode}
              </div>
            </div>

            {/* Share Options */}
            <div className="flex gap-4">
              <button
                onClick={handleCopy}
                className={`flex items-center gap-3 px-8 py-4 font-medium transition-all hover:scale-[1.02] ${
                  copied
                    ? 'bg-green-600 text-white'
                    : themeMode === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200'
                }`}
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
              
              <button
                onClick={handleShare}
                className="flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium transition-all hover:scale-[1.02]"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>

          {/* Participants */}
          <div className="space-y-4">
            <h4 className={`text-lg font-medium ${
              themeMode === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Who's Watching
            </h4>
            <div className="space-y-3">
              {participants.map((participant, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 ${
                    themeMode === 'dark' 
                      ? 'bg-gray-800 border border-gray-700' 
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center ${
                    index === 0 ? 'bg-red-600' : 'bg-gray-400'
                  }`}>
                    <span className="text-white font-medium">
                      {participant[0]}
                    </span>
                  </div>
                  <span className={`${
                    themeMode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {participant}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className={`p-6 ${
            themeMode === 'dark' 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-gray-50 border border-gray-200'
          }`}>
            <p className={`${
              themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Share this link with your friends. When they join, you'll see their mood alignment and get synchronized recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchWithFriends;