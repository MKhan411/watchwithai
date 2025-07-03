import React, { useState } from 'react';
import { MoodQuizAnswers, MovieRecommendation, ThemeMode, CurrentScreen } from './types';
import { getRecommendations } from './utils';
import { trendingContent } from './mockData';
import WelcomePage from './components/WelcomePage';
import MoodCheck from './components/MoodCheck';
import RecommendationsPage from './components/RecommendationsPage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState<CurrentScreen>('welcome');
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [recommendations, setRecommendations] = useState<MovieRecommendation[]>([]);
  const [userName] = useState('Anya'); // This could be dynamic in a real app

  const handleStartMoodCheck = () => {
    setCurrentScreen('moodcheck');
  };

  const handleSurpriseMe = () => {
    setCurrentScreen('loading');
    // Simulate loading time
    setTimeout(() => {
      setRecommendations(trendingContent);
      setCurrentScreen('recommendations');
    }, 2000);
  };

  const handleMoodCheckComplete = (answers: MoodQuizAnswers) => {
    setCurrentScreen('loading');
    // Simulate AI processing time
    setTimeout(() => {
      const newRecommendations = getRecommendations(answers);
      setRecommendations(newRecommendations);
      setCurrentScreen('recommendations');
    }, 3000);
  };

  const handleBackToWelcome = () => {
    setCurrentScreen('welcome');
  };

  const handleBackToMoodCheck = () => {
    setCurrentScreen('moodcheck');
  };

  const toggleTheme = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      themeMode === 'dark' ? 'dark' : ''
    }`}>
      {currentScreen === 'welcome' && (
        <WelcomePage
          userName={userName}
          onStartMoodCheck={handleStartMoodCheck}
          onSurpriseMe={handleSurpriseMe}
          themeMode={themeMode}
          onToggleTheme={toggleTheme}
        />
      )}
      
      {currentScreen === 'moodcheck' && (
        <MoodCheck
          onComplete={handleMoodCheckComplete}
          onBack={handleBackToWelcome}
          themeMode={themeMode}
        />
      )}
      
      {currentScreen === 'loading' && (
        <LoadingScreen themeMode={themeMode} />
      )}
      
      {currentScreen === 'recommendations' && (
        <RecommendationsPage
          recommendations={recommendations}
          onBack={handleBackToWelcome}
          themeMode={themeMode}
        />
      )}
    </div>
  );
}

export default App;