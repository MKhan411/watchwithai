import React, { useState, useEffect } from 'react';
import { MoodQuizAnswers, MovieRecommendation, ThemeMode, CurrentScreen, User } from './types';
import { getRecommendations } from './utils';
import { trendingContent } from './mockData';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
import MoodCheck from './components/MoodCheck';
import RecommendationsPage from './components/RecommendationsPage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState<CurrentScreen>('login');
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [recommendations, setRecommendations] = useState<MovieRecommendation[]>([]);
  const [user, setUser] = useState<User>({ name: '', isLoggedIn: false });

  // Load user data from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('watchWithAI_user');
    const savedTheme = localStorage.getItem('watchWithAI_theme');
    
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      if (userData.isLoggedIn) {
        setCurrentScreen('welcome');
      }
    }
    
    if (savedTheme) {
      setThemeMode(savedTheme as ThemeMode);
    }
  }, []);

  // Save user data to localStorage whenever user state changes
  useEffect(() => {
    if (user.name) {
      localStorage.setItem('watchWithAI_user', JSON.stringify(user));
    }
  }, [user]);

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('watchWithAI_theme', themeMode);
  }, [themeMode]);

  const handleLogin = (name: string) => {
    const userData: User = { name, isLoggedIn: true };
    setUser(userData);
    setCurrentScreen('welcome');
  };

  const handleLogout = () => {
    setUser({ name: '', isLoggedIn: false });
    setCurrentScreen('login');
    localStorage.removeItem('watchWithAI_user');
  };

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
      {currentScreen === 'login' && (
        <LoginPage
          onLogin={handleLogin}
          themeMode={themeMode}
          onToggleTheme={toggleTheme}
        />
      )}

      {currentScreen === 'welcome' && (
        <WelcomePage
          userName={user.name}
          onStartMoodCheck={handleStartMoodCheck}
          onSurpriseMe={handleSurpriseMe}
          onLogout={handleLogout}
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