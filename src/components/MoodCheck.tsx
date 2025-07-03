import React, { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { MoodQuizAnswers, ThemeMode } from '../types';

interface MoodCheckProps {
  onComplete: (answers: MoodQuizAnswers) => void;
  onBack: () => void;
  themeMode: ThemeMode;
}

const MoodCheck: React.FC<MoodCheckProps> = ({ onComplete, onBack, themeMode }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<MoodQuizAnswers>>({});

  const questions = [
    {
      question: "How are you feeling today?",
      options: [
        { value: "Happy", emoji: "😊" },
        { value: "Stressed", emoji: "😰" },
        { value: "Tired", emoji: "😴" },
        { value: "Anxious", emoji: "😟" },
        { value: "Lonely", emoji: "😞" },
        { value: "Bored", emoji: "😐" }
      ],
      key: "currentMood" as keyof MoodQuizAnswers
    },
    {
      question: "What would you like to feel after watching?",
      options: [
        { value: "Uplifted", emoji: "😄" },
        { value: "Entertained", emoji: "🎉" },
        { value: "Relaxed", emoji: "😌" },
        { value: "Inspired", emoji: "💡" },
        { value: "Mind-blown", emoji: "🤯" }
      ],
      key: "desiredFeeling" as keyof MoodQuizAnswers
    },
    {
      question: "How long do you want to watch?",
      options: [
        { value: "<30 min", emoji: "⏳" },
        { value: "~1 hr", emoji: "⏱️" },
        { value: "2+ hrs", emoji: "⏰" },
        { value: "Binge-ready", emoji: "🍿" }
      ],
      key: "duration" as keyof MoodQuizAnswers
    },
    {
      question: "Watching alone or with someone?",
      options: [
        { value: "Solo", emoji: "👤" },
        { value: "Partner", emoji: "💞" },
        { value: "Friends", emoji: "🧑‍🤝‍🧑" },
        { value: "Family", emoji: "👨‍👩‍👧‍👦" }
      ],
      key: "company" as keyof MoodQuizAnswers
    },
    {
      question: "Preferred Language",
      options: [
        { value: "Hindi", emoji: "🇮🇳" },
        { value: "Tamil", emoji: "🇮🇳" },
        { value: "Telugu", emoji: "🇮🇳" },
        { value: "Kannada", emoji: "🇮🇳" },
        { value: "Malayalam", emoji: "🇮🇳" },
        { value: "English", emoji: "🇬🇧" },
        { value: "Korean", emoji: "🇰🇷" },
        { value: "Spanish", emoji: "🇪🇸" },
        { value: "French", emoji: "🇫🇷" },
        { value: "Any", emoji: "🌍" }
      ],
      key: "language" as keyof MoodQuizAnswers
    }
  ];

  const currentQuestion = questions[currentStep];
  const selectedAnswer = answers[currentQuestion.key];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleOptionSelect = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.key]: value };
    setAnswers(newAnswers);
    
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        onComplete(newAnswers as MoodQuizAnswers);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      themeMode === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-8">
        <button
          onClick={handleBack}
          className={`flex items-center gap-3 px-6 py-3 font-medium transition-all duration-200 hover:scale-105 ${
            themeMode === 'dark'
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        
        <div className="text-center">
          <div className={`text-sm font-medium tracking-wide uppercase ${
            themeMode === 'dark' ? 'text-gray-500' : 'text-gray-500'
          }`}>
            {currentStep + 1} of {questions.length}
          </div>
        </div>
        
        <div className="w-20"></div>
      </div>

      {/* Progress Bar */}
      <div className="px-8 mb-16">
        <div className={`w-full h-1 ${
          themeMode === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
        }`}>
          <div 
            className="h-1 bg-red-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex flex-col items-center justify-center px-8 space-y-16">
        <div className="text-center space-y-8 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionSelect(option.value)}
              className={`group relative flex flex-col items-center justify-center gap-4 p-8 font-medium text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                selectedAnswer === option.value
                  ? themeMode === 'dark'
                    ? 'bg-red-600 text-white'
                    : 'bg-red-600 text-white'
                  : themeMode === 'dark'
                  ? 'bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 border border-gray-200'
              }`}
              aria-label={`Select ${option.value}`}
            >
              <span className="text-3xl">{option.emoji}</span>
              <span className="font-medium">{option.value}</span>
              {selectedAnswer === option.value && (
                <CheckCircle className="absolute top-3 right-3 w-5 h-5" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodCheck;