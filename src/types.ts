export interface MoodQuizAnswers {
  currentMood: string;
  desiredFeeling: string;
  duration: string;
  company: string;
  language: string;
}

export interface MovieRecommendation {
  id: string;
  title: string;
  type: 'movie' | 'series';
  platforms: string[];
  imdbRating: number;
  moodScore: number;
  summary: string;
  trailerUrl: string;
  language: string;
  subtitles: string[];
  dubbing: string[];
  poster: string;
  year: number;
  genre: string[];
  duration: string;
  whyRecommended: string;
}

export interface SessionData {
  id: string;
  hostName: string;
  participants: string[];
  sharedMoods: string[];
  recommendation: MovieRecommendation;
}

export interface User {
  name: string;
  isLoggedIn: boolean;
}

export type ThemeMode = 'light' | 'dark';
export type CurrentScreen = 'login' | 'welcome' | 'moodcheck' | 'recommendations' | 'loading';