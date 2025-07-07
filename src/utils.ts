import { MoodQuizAnswers, MovieRecommendation } from './types';
import { 
  mockRecommendations, 
  moodBasedContent, 
  desiredFeelingContent, 
  durationBasedContent, 
  companyBasedContent, 
  languageBasedContent 
} from './mockData';

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
  // Start with all recommendations
  let candidateRecommendations = [...mockRecommendations];
  let scoredRecommendations: (MovieRecommendation & { totalScore: number })[] = [];

  // Score each recommendation based on user answers
  candidateRecommendations.forEach(rec => {
    let score = rec.moodScore; // Base score

    // Mood matching (highest weight)
    const moodMatches = moodBasedContent[answers.currentMood as keyof typeof moodBasedContent] || [];
    if (moodMatches.some(m => m.id === rec.id)) {
      score += 25;
    }

    // Desired feeling matching
    const feelingMatches = desiredFeelingContent[answers.desiredFeeling as keyof typeof desiredFeelingContent] || [];
    if (feelingMatches.some(m => m.id === rec.id)) {
      score += 20;
    }

    // Duration matching
    const durationMatches = durationBasedContent[answers.duration as keyof typeof durationBasedContent] || [];
    if (durationMatches.some(m => m.id === rec.id)) {
      score += 15;
    }

    // Company matching
    const companyMatches = companyBasedContent[answers.company as keyof typeof companyBasedContent] || [];
    if (companyMatches.some(m => m.id === rec.id)) {
      score += 10;
    }

    // Language matching (strict filter)
    if (answers.language !== 'Any') {
      if (rec.language === answers.language) {
        score += 15;
      } else {
        // Check if it has subtitles in the preferred language
        if (rec.subtitles.includes(answers.language)) {
          score += 5;
        } else {
          score -= 20; // Penalize if no language support
        }
      }
    }

    // Genre-based bonuses for specific mood combinations
    if (answers.currentMood === 'Happy' && rec.genre.includes('Comedy')) score += 10;
    if (answers.currentMood === 'Stressed' && (rec.genre.includes('Comedy') || rec.genre.includes('Adventure'))) score += 15;
    if (answers.currentMood === 'Tired' && (rec.genre.includes('Drama') || rec.genre.includes('Documentary'))) score += 10;
    if (answers.currentMood === 'Anxious' && rec.genre.includes('Comedy')) score += 20;
    if (answers.currentMood === 'Lonely' && (rec.genre.includes('Romance') || rec.genre.includes('Drama'))) score += 15;
    if (answers.currentMood === 'Bored' && (rec.genre.includes('Action') || rec.genre.includes('Thriller'))) score += 15;

    // Duration-specific filtering
    if (answers.duration === '<30 min' && rec.type === 'movie') {
      score -= 30; // Movies are too long for <30 min preference
    }
    
    if (answers.duration === '~1 hr' && rec.type === 'movie') {
      const duration = parseInt(rec.duration);
      if (duration > 120) score -= 20; // Penalize very long movies
    }

    scoredRecommendations.push({
      ...rec,
      totalScore: Math.max(0, score), // Ensure score doesn't go negative
      moodScore: Math.min(100, Math.max(rec.moodScore, score - rec.moodScore + rec.moodScore)) // Update mood score
    });
  });

  // Sort by total score and return top recommendations
  const topRecommendations = scoredRecommendations
    .sort((a, b) => b.totalScore - a.totalScore)
    .slice(0, 6) // Get top 6 recommendations
    .map(({ totalScore, ...rec }) => rec); // Remove totalScore from final result

  return topRecommendations;
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

// Helper function to get sample content for each selection
export const getSampleContentForSelection = (category: string, selection: string): string[] => {
  const sampleMappings: Record<string, Record<string, string[]>> = {
    mood: {
      'Happy': ['RRR', 'The Good Place', 'Friends', 'Kantara'],
      'Stressed': ['ZNMD', 'The Pursuit of Happyness', 'Headspace Guide', 'Amélie'],
      'Tired': ['Midnight Diner', 'Our Planet', 'Chef\'s Table', 'La La Land'],
      'Anxious': ['The Office', 'Inside Out', 'Friends', 'Breathe'],
      'Lonely': ['Her', 'Little Women', 'The Lunchbox', 'Friends'],
      'Bored': ['The Boys', 'Money Heist', 'Squid Game', 'Stranger Things']
    },
    feeling: {
      'Uplifted': ['Kantara', 'ZNMD', 'Minnal Murali', 'La La Land'],
      'Entertained': ['RRR', 'The Boys', 'Stranger Things', 'Avengers'],
      'Relaxed': ['Midnight Diner', 'Our Planet', 'Amélie', 'The Lunchbox'],
      'Inspired': ['The Pursuit of Happyness', 'Interstellar', 'Kantara', 'La La Land'],
      'Mind-blown': ['Inception', 'Breaking Bad', 'Money Heist', 'The Dark Knight']
    },
    duration: {
      '<30 min': ['The Good Place', 'The Office', 'Headspace Guide', 'Friends'],
      '~1 hr': ['Midnight Diner', 'Chef\'s Table', 'Our Planet', 'Stranger Things'],
      '2+ hrs': ['Kantara', 'RRR', 'Interstellar', 'The Dark Knight'],
      'Binge-ready': ['Breaking Bad', 'Money Heist', 'The Boys', 'Stranger Things']
    },
    company: {
      'Solo': ['Midnight Diner', 'Her', 'Inception', 'Our Planet'],
      'Partner': ['Little Women', 'Amélie', 'La La Land', 'The Lunchbox'],
      'Friends': ['The Boys', 'Friends', 'Stranger Things', 'Money Heist'],
      'Family': ['Inside Out', 'Avengers', 'The Good Place', 'Minnal Murali']
    },
    language: {
      'Hindi': ['ZNMD', 'The Lunchbox', 'Breathe'],
      'Tamil': ['Coming Soon...'],
      'Telugu': ['RRR'],
      'Kannada': ['Kantara'],
      'Malayalam': ['Minnal Murali'],
      'English': ['Inception', 'The Office', 'Friends', 'Breaking Bad'],
      'Korean': ['Squid Game'],
      'Spanish': ['Money Heist'],
      'French': ['Amélie'],
      'Any': ['Global Mix']
    }
  };

  return sampleMappings[category]?.[selection] || [];
};