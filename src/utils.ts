import { MoodQuizAnswers, MovieRecommendation } from './types';
import { mockRecommendations } from './mockData';

export const getMoodColor = (mood: string): string => {
  const moodColors: Record<string, string> = {
    'Happy': 'from-yellow-400 to-orange-400',
    'Stressed': 'from-red-400 to-pink-400',
    'Tired': 'from-blue-400 to-indigo-400',
    'Anxious': 'from-purple-400 to-blue-400',
    'Lonely': 'from-green-400 to-teal-400',
    'Bored': 'from-gray-400 to-slate-400'
  };
  return moodColors[mood] || 'from-blue-400 to-indigo-400';
};

export const getRecommendations = (answers: MoodQuizAnswers): MovieRecommendation[] => {
  // Enhanced recommendation algorithm
  let filteredRecommendations = mockRecommendations.filter(rec => {
    // Filter by language preference
    if (answers.language !== 'Any' && rec.language !== answers.language) {
      return false;
    }
    
    // Filter by duration preference
    if (answers.duration === '<30 min' && rec.type === 'movie') {
      return false;
    }
    
    if (answers.duration === '~1 hr' && rec.type === 'movie' && parseInt(rec.duration) > 90) {
      return false;
    }
    
    return true;
  });

  // Mood-based scoring enhancement
  filteredRecommendations = filteredRecommendations.map(rec => {
    let bonusScore = 0;
    
    // Mood matching bonuses
    if (answers.currentMood === 'Happy' && rec.genre.includes('Comedy')) bonusScore += 10;
    if (answers.currentMood === 'Stressed' && (rec.genre.includes('Comedy') || rec.genre.includes('Adventure'))) bonusScore += 15;
    if (answers.currentMood === 'Tired' && (rec.genre.includes('Drama') || rec.genre.includes('Romance'))) bonusScore += 10;
    if (answers.currentMood === 'Anxious' && rec.genre.includes('Comedy')) bonusScore += 20;
    if (answers.currentMood === 'Lonely' && (rec.genre.includes('Romance') || rec.genre.includes('Drama'))) bonusScore += 15;
    if (answers.currentMood === 'Bored' && (rec.genre.includes('Action') || rec.genre.includes('Thriller'))) bonusScore += 15;
    
    // Desired feeling bonuses
    if (answers.desiredFeeling === 'Uplifted' && (rec.genre.includes('Comedy') || rec.genre.includes('Adventure'))) bonusScore += 10;
    if (answers.desiredFeeling === 'Entertained' && (rec.genre.includes('Action') || rec.genre.includes('Comedy'))) bonusScore += 10;
    if (answers.desiredFeeling === 'Relaxed' && (rec.genre.includes('Drama') || rec.genre.includes('Romance'))) bonusScore += 10;
    if (answers.desiredFeeling === 'Inspired' && rec.genre.includes('Drama')) bonusScore += 15;
    if (answers.desiredFeeling === 'Mind-blown' && (rec.genre.includes('Thriller') || rec.genre.includes('Action'))) bonusScore += 15;
    
    return {
      ...rec,
      moodScore: Math.min(100, rec.moodScore + bonusScore)
    };
  });
  
  // Sort by enhanced mood score and return top 4
  return filteredRecommendations
    .sort((a, b) => b.moodScore - a.moodScore)
    .slice(0, 4);
};

export const generateSessionCode = (): string => {
  return Math.random().toString(36).substr(2, 8).toUpperCase();
};

export const formatDuration = (duration: string): string => {
  return duration.replace('min', ' min').replace('hr', ' hr');
};

export const getPlatformIcon = (platform: string): string => {
  const icons: Record<string, string> = {
    'Netflix': '🎬',
    'Prime Video': '📺',
    'Hotstar': '⭐',
    'YouTube': '▶️',
    'Disney+': '🏰',
    'Apple TV': '🍎'
  };
  return icons[platform] || '📱';
};

export const getLanguageFlag = (language: string): string => {
  const flags: Record<string, string> = {
    'Hindi': '🇮🇳',
    'Tamil': '🇮🇳',
    'Telugu': '🇮🇳',
    'Kannada': '🇮🇳',
    'Malayalam': '🇮🇳',
    'English': '🇬🇧',
    'Korean': '🇰🇷',
    'Spanish': '🇪🇸',
    'French': '🇫🇷',
    'Any': '🌍'
  };
  return flags[language] || '🌐';
};