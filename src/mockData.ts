import { MovieRecommendation } from './types';

export const mockRecommendations: MovieRecommendation[] = [
  // Happy Mood Recommendations
  {
    id: '1',
    title: 'Kantara',
    type: 'movie',
    platforms: ['Prime Video', 'Hotstar'],
    imdbRating: 8.2,
    moodScore: 96,
    summary: 'A mystical Kannada thriller that blends folklore with stunning visuals, perfect for an inspiring and mind-blowing experience.',
    trailerUrl: 'https://www.youtube.com/watch?v=8mrVmf239GU',
    language: 'Kannada',
    subtitles: ['English', 'Hindi', 'Tamil', 'Telugu'],
    dubbing: ['Hindi', 'Tamil', 'Telugu'],
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2022,
    genre: ['Action', 'Drama', 'Thriller'],
    duration: '148 min',
    whyRecommended: 'You want to feel inspired and mind-blown — this Kannada masterpiece combines stunning cinematography with deep cultural storytelling that will leave you amazed.'
  },
  {
    id: '2',
    title: 'RRR',
    type: 'movie',
    platforms: ['Netflix', 'Prime Video'],
    imdbRating: 7.9,
    moodScore: 94,
    summary: 'An epic Telugu action drama about friendship and revolution, featuring spectacular action sequences and emotional depth.',
    trailerUrl: 'https://www.youtube.com/watch?v=f_vbAtFSEc0',
    language: 'Telugu',
    subtitles: ['English', 'Hindi', 'Tamil', 'Kannada'],
    dubbing: ['Hindi', 'Tamil', 'Malayalam'],
    poster: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2022,
    genre: ['Action', 'Drama', 'History'],
    duration: '187 min',
    whyRecommended: 'You\'re feeling happy and want entertainment — this Telugu blockbuster delivers incredible action, emotion, and visual spectacle perfect for an uplifting experience.'
  },
  {
    id: '3',
    title: 'The Good Place',
    type: 'series',
    platforms: ['Netflix', 'Prime Video'],
    imdbRating: 8.2,
    moodScore: 92,
    summary: 'A comedy about the afterlife that\'s both hilarious and deeply philosophical, perfect for lifting spirits.',
    trailerUrl: 'https://www.youtube.com/watch?v=RfBgT5djaQw',
    language: 'English',
    subtitles: ['Hindi', 'Tamil', 'Telugu', 'Spanish', 'French'],
    dubbing: ['Hindi', 'Spanish'],
    poster: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2016,
    genre: ['Comedy', 'Fantasy', 'Drama'],
    duration: '22 min episodes',
    whyRecommended: 'You\'re feeling happy and want to stay uplifted — this series combines humor with heartwarming moments that will keep your spirits high.'
  },

  // Stressed Mood Recommendations
  {
    id: '4',
    title: 'Zindagi Na Milegi Dobara',
    type: 'movie',
    platforms: ['Netflix', 'Prime Video'],
    imdbRating: 8.2,
    moodScore: 95,
    summary: 'Three friends on a Spanish adventure discover themselves and the meaning of friendship.',
    trailerUrl: 'https://www.youtube.com/watch?v=tlMPtbK6uDM',
    language: 'Hindi',
    subtitles: ['English', 'Tamil', 'Telugu', 'Kannada'],
    dubbing: ['English', 'Tamil'],
    poster: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2011,
    genre: ['Adventure', 'Comedy', 'Drama'],
    duration: '155 min',
    whyRecommended: 'You\'re feeling stressed and need an escape — this adventure comedy will transport you to beautiful Spain and remind you to live life to the fullest.'
  },
  {
    id: '5',
    title: 'The Pursuit of Happyness',
    type: 'movie',
    platforms: ['Netflix', 'Prime Video'],
    imdbRating: 8.0,
    moodScore: 93,
    summary: 'An inspiring true story about a father\'s struggle to build a better life for his son against all odds.',
    trailerUrl: 'https://www.youtube.com/watch?v=89Kq8SDyvfg',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German'],
    dubbing: ['Hindi', 'Spanish'],
    poster: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2006,
    genre: ['Drama', 'Biography'],
    duration: '117 min',
    whyRecommended: 'You\'re feeling stressed and need inspiration — this powerful story of perseverance will remind you that challenges can be overcome with determination.'
  },
  {
    id: '6',
    title: 'Headspace Guide to Meditation',
    type: 'series',
    platforms: ['Netflix'],
    imdbRating: 7.8,
    moodScore: 91,
    summary: 'A calming animated series that teaches meditation techniques to reduce stress and anxiety.',
    trailerUrl: 'https://www.youtube.com/watch?v=example',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German'],
    dubbing: ['Hindi', 'Spanish'],
    poster: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2021,
    genre: ['Documentary', 'Animation', 'Wellness'],
    duration: '20 min episodes',
    whyRecommended: 'You\'re feeling stressed and need to relax — this mindfulness series will teach you practical techniques to manage stress and find inner peace.'
  },

  // Tired Mood Recommendations
  {
    id: '7',
    title: 'Midnight Diner: Tokyo Stories',
    type: 'series',
    platforms: ['Netflix'],
    imdbRating: 8.5,
    moodScore: 94,
    summary: 'A gentle Japanese series about a late-night diner where customers share their stories over comfort food.',
    trailerUrl: 'https://www.youtube.com/watch?v=example',
    language: 'Japanese',
    subtitles: ['English', 'Hindi', 'Spanish', 'French'],
    dubbing: ['English'],
    poster: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2016,
    genre: ['Drama', 'Slice of Life'],
    duration: '30 min episodes',
    whyRecommended: 'You\'re feeling tired and need something soothing — this gentle series offers comfort food for the soul with its warm, slow-paced storytelling.'
  },
  {
    id: '8',
    title: 'Our Planet',
    type: 'series',
    platforms: ['Netflix'],
    imdbRating: 9.3,
    moodScore: 92,
    summary: 'Breathtaking nature documentary showcasing Earth\'s most spectacular wildlife and landscapes.',
    trailerUrl: 'https://www.youtube.com/watch?v=example',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German', 'Italian'],
    dubbing: ['Hindi', 'Spanish', 'French'],
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2019,
    genre: ['Documentary', 'Nature'],
    duration: '50 min episodes',
    whyRecommended: 'You\'re feeling tired and want to unwind — these stunning nature visuals and David Attenborough\'s soothing narration will help you relax completely.'
  },
  {
    id: '9',
    title: 'Chef\'s Table',
    type: 'series',
    platforms: ['Netflix'],
    imdbRating: 8.5,
    moodScore: 90,
    summary: 'Visually stunning documentary series featuring world-renowned chefs and their culinary artistry.',
    trailerUrl: 'https://www.youtube.com/watch?v=example',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German', 'Italian'],
    dubbing: ['Spanish', 'French'],
    poster: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2015,
    genre: ['Documentary', 'Food'],
    duration: '50 min episodes',
    whyRecommended: 'You\'re feeling tired and want something visually relaxing — this beautifully shot food documentary will soothe your senses with gorgeous culinary artistry.'
  },

  // Anxious Mood Recommendations
  {
    id: '10',
    title: 'The Office',
    type: 'series',
    platforms: ['Netflix', 'Prime Video'],
    imdbRating: 8.5,
    moodScore: 96,
    summary: 'A mockumentary sitcom about office life that\'s both hilarious and surprisingly heartwarming.',
    trailerUrl: 'https://www.youtube.com/watch?v=LHOtME2DL4g',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German'],
    dubbing: ['Hindi', 'Spanish'],
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2005,
    genre: ['Comedy', 'Romance', 'Drama'],
    duration: '22 min episodes',
    whyRecommended: 'You\'re feeling anxious and need comfort — this beloved comedy series offers familiar characters and gentle humor that will ease your worries.'
  },
  {
    id: '11',
    title: 'Breathe: Into the Shadows',
    type: 'series',
    platforms: ['Prime Video'],
    imdbRating: 7.3,
    moodScore: 88,
    summary: 'A psychological thriller that explores the depths of human psychology and family bonds.',
    trailerUrl: 'https://www.youtube.com/watch?v=example',
    language: 'Hindi',
    subtitles: ['English', 'Tamil', 'Telugu', 'Kannada'],
    dubbing: ['English', 'Tamil'],
    poster: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2020,
    genre: ['Thriller', 'Drama', 'Crime'],
    duration: '45 min episodes',
    whyRecommended: 'You\'re feeling anxious but want engagement — this gripping thriller will redirect your nervous energy into compelling storytelling.'
  },
  {
    id: '12',
    title: 'Inside Out',
    type: 'movie',
    platforms: ['Disney+', 'Prime Video'],
    imdbRating: 8.1,
    moodScore: 94,
    summary: 'A Pixar masterpiece that explores emotions inside a young girl\'s mind with humor and heart.',
    trailerUrl: 'https://www.youtube.com/watch?v=example',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German', 'Italian'],
    dubbing: ['Hindi', 'Spanish', 'French'],
    poster: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2015,
    genre: ['Animation', 'Family', 'Comedy'],
    duration: '95 min',
    whyRecommended: 'You\'re feeling anxious and need emotional understanding — this beautiful film helps you process feelings and reminds you that all emotions are valid.'
  },

  // Lonely Mood Recommendations
  {
    id: '13',
    title: 'Her',
    type: 'movie',
    platforms: ['Netflix', 'Prime Video'],
    imdbRating: 8.0,
    moodScore: 93,
    summary: 'A thoughtful sci-fi romance about connection and loneliness in the digital age.',
    trailerUrl: 'https://www.youtube.com/watch?v=example',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German'],
    dubbing: ['Hindi', 'Spanish'],
    poster: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2013,
    genre: ['Romance', 'Drama', 'Sci-Fi'],
    duration: '126 min',
    whyRecommended: 'You\'re feeling lonely and need connection — this beautiful film explores human relationships and reminds you that meaningful connections are possible.'
  },
  {
    id: '14',
    title: 'Little Women',
    type: 'movie',
    platforms: ['Netflix', 'Prime Video'],
    imdbRating: 7.8,
    moodScore: 91,
    summary: 'A heartwarming adaptation of the classic novel about sisterhood, dreams, and growing up.',
    trailerUrl: 'https://www.youtube.com/watch?v=example',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German'],
    dubbing: ['Hindi', 'Spanish'],
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2019,
    genre: ['Drama', 'Romance', 'Family'],
    duration: '135 min',
    whyRecommended: 'You\'re feeling lonely and crave warmth — this beautiful story of sisterhood will surround you with love and remind you of the importance of family bonds.'
  },
  {
    id: '15',
    title: 'The Lunchbox',
    type: 'movie',
    platforms: ['Netflix', 'Prime Video'],
    imdbRating: 7.8,
    moodScore: 89,
    summary: 'A gentle Indian film about an unlikely friendship that develops through exchanged lunch boxes.',
    trailerUrl: 'https://www.youtube.com/watch?v=example',
    language: 'Hindi',
    subtitles: ['English', 'Tamil', 'Telugu', 'Kannada'],
    dubbing: ['English', 'Tamil'],
    poster: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2013,
    genre: ['Drama', 'Romance'],
    duration: '104 min',
    whyRecommended: 'You\'re feeling lonely and need human connection — this tender story shows how unexpected friendships can bloom and bring joy to everyday life.'
  },

  // Bored Mood Recommendations
  {
    id: '16',
    title: 'The Boys',
    type: 'series',
    platforms: ['Prime Video'],
    imdbRating: 8.7,
    moodScore: 95,
    summary: 'A dark, satirical take on superheroes that subverts the genre with shocking twists and social commentary.',
    trailerUrl: 'https://www.youtube.com/watch?v=example',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German', 'Italian'],
    dubbing: ['Hindi', 'Spanish', 'French'],
    poster: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2019,
    genre: ['Action', 'Comedy', 'Crime'],
    duration: '60 min episodes',
    whyRecommended: 'You\'re feeling bored and want something shocking — this twisted superhero series will keep you on the edge of your seat with its unpredictable storylines.'
  },
  {
    id: '17',
    title: 'Money Heist (La Casa de Papel)',
    type: 'series',
    platforms: ['Netflix'],
    imdbRating: 8.2,
    moodScore: 93,
    summary: 'A Spanish heist thriller that combines intricate plotting with emotional depth and unforgettable characters.',
    trailerUrl: 'https://www.youtube.com/watch?v=_InQhuuI6dk',
    language: 'Spanish',
    subtitles: ['English', 'Hindi', 'Tamil', 'Telugu', 'French', 'Portuguese'],
    dubbing: ['English', 'Hindi', 'French'],
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2017,
    genre: ['Crime', 'Drama', 'Thriller'],
    duration: '70 min episodes',
    whyRecommended: 'You\'re feeling bored and want something mind-blowing — this Spanish series offers complex storytelling and emotional depth that will keep you completely engaged.'
  },
  {
    id: '18',
    title: 'Squid Game',
    type: 'series',
    platforms: ['Netflix'],
    imdbRating: 8.0,
    moodScore: 91,
    summary: 'A gripping Korean survival thriller that keeps you on the edge of your seat with social commentary.',
    trailerUrl: 'https://www.youtube.com/watch?v=oqxAJKy0ii4',
    language: 'Korean',
    subtitles: ['English', 'Hindi', 'Tamil', 'Telugu', 'Spanish', 'French'],
    dubbing: ['English', 'Hindi', 'Spanish'],
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2021,
    genre: ['Thriller', 'Drama', 'Action'],
    duration: '60 min episodes',
    whyRecommended: 'You\'re feeling bored and want to be mind-blown — this Korean series offers intense storytelling that will completely captivate your attention.'
  },

  // Additional Hollywood and International Content
  {
    id: '19',
    title: 'Inception',
    type: 'movie',
    platforms: ['Netflix', 'Prime Video'],
    imdbRating: 8.8,
    moodScore: 95,
    summary: 'A mind-bending sci-fi thriller about dreams within dreams, featuring stunning visuals and complex storytelling.',
    trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German', 'Italian'],
    dubbing: ['Hindi', 'Spanish', 'French'],
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2010,
    genre: ['Sci-Fi', 'Action', 'Thriller'],
    duration: '148 min',
    whyRecommended: 'You want to be mind-blown — this Christopher Nolan masterpiece will challenge your perception of reality with its intricate plot and stunning execution.'
  },
  {
    id: '20',
    title: 'Interstellar',
    type: 'movie',
    platforms: ['Prime Video', 'Apple TV'],
    imdbRating: 8.6,
    moodScore: 93,
    summary: 'A space epic about love, sacrifice, and humanity\'s survival, featuring breathtaking visuals and emotional depth.',
    trailerUrl: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German', 'Italian'],
    dubbing: ['Hindi', 'Spanish', 'French'],
    poster: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2014,
    genre: ['Sci-Fi', 'Drama', 'Adventure'],
    duration: '169 min',
    whyRecommended: 'You want to feel inspired and mind-blown — this Christopher Nolan epic combines stunning space visuals with a deeply emotional story about love transcending time and space.'
  },
  {
    id: '21',
    title: 'Minnal Murali',
    type: 'movie',
    platforms: ['Netflix'],
    imdbRating: 7.8,
    moodScore: 88,
    summary: 'A Malayalam superhero film that combines humor, heart, and spectacular action in a small-town setting.',
    trailerUrl: 'https://www.youtube.com/watch?v=Ey73oTO7SuY',
    language: 'Malayalam',
    subtitles: ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada'],
    dubbing: ['Hindi', 'Tamil', 'Telugu'],
    poster: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2021,
    genre: ['Action', 'Comedy', 'Superhero'],
    duration: '158 min',
    whyRecommended: 'You want to feel entertained and uplifted — this Malayalam superhero film offers the perfect blend of humor, heart, and spectacular action.'
  },
  {
    id: '22',
    title: 'Amélie',
    type: 'movie',
    platforms: ['Prime Video', 'Apple TV'],
    imdbRating: 8.3,
    moodScore: 93,
    summary: 'A whimsical French romantic comedy about a shy waitress who decides to help others find happiness.',
    trailerUrl: 'https://www.youtube.com/watch?v=MhodoG26EVs',
    language: 'French',
    subtitles: ['English', 'Spanish', 'German', 'Italian'],
    dubbing: ['English', 'Spanish'],
    poster: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2001,
    genre: ['Romance', 'Comedy', 'Drama'],
    duration: '122 min',
    whyRecommended: 'You want to feel uplifted and relaxed — this charming French film offers a whimsical escape into a world of kindness and magical realism.'
  },
  {
    id: '23',
    title: 'Stranger Things',
    type: 'series',
    platforms: ['Netflix'],
    imdbRating: 8.7,
    moodScore: 89,
    summary: 'A supernatural thriller set in the 1980s about kids facing otherworldly dangers in their small town.',
    trailerUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German', 'Italian'],
    dubbing: ['Hindi', 'Spanish', 'French'],
    poster: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2016,
    genre: ['Sci-Fi', 'Horror', 'Drama'],
    duration: '50 min episodes',
    whyRecommended: 'You\'re feeling bored and want entertainment — this nostalgic sci-fi series combines 80s charm with supernatural thrills that will keep you binge-watching.'
  },
  {
    id: '24',
    title: 'La La Land',
    type: 'movie',
    platforms: ['Netflix', 'Prime Video'],
    imdbRating: 8.0,
    moodScore: 92,
    summary: 'A modern musical about love and dreams in Los Angeles, featuring stunning cinematography and memorable songs.',
    trailerUrl: 'https://www.youtube.com/watch?v=0pdqf4P9MB8',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German', 'Italian'],
    dubbing: ['Hindi', 'Spanish'],
    poster: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2016,
    genre: ['Musical', 'Romance', 'Drama'],
    duration: '128 min',
    whyRecommended: 'You want to feel uplifted and inspired — this beautiful musical celebrates following your dreams with gorgeous visuals and an unforgettable soundtrack.'
  },
  {
    id: '25',
    title: 'Breaking Bad',
    type: 'series',
    platforms: ['Netflix', 'Prime Video'],
    imdbRating: 9.5,
    moodScore: 88,
    summary: 'A high school chemistry teacher turned methamphetamine manufacturer in this gripping crime drama.',
    trailerUrl: 'https://www.youtube.com/watch?v=HhesaQXLuRY',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German', 'Italian'],
    dubbing: ['Hindi', 'Spanish'],
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2008,
    genre: ['Crime', 'Drama', 'Thriller'],
    duration: '47 min episodes',
    whyRecommended: 'You\'re ready to binge and want to be mind-blown — this critically acclaimed series offers intense storytelling and character development that will keep you hooked.'
  },
  {
    id: '26',
    title: 'The Dark Knight',
    type: 'movie',
    platforms: ['Netflix', 'Prime Video'],
    imdbRating: 9.0,
    moodScore: 90,
    summary: 'Batman faces his greatest challenge yet in the Joker, in this dark and gripping superhero masterpiece.',
    trailerUrl: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German', 'Italian'],
    dubbing: ['Hindi', 'Spanish', 'French'],
    poster: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2008,
    genre: ['Action', 'Crime', 'Drama'],
    duration: '152 min',
    whyRecommended: 'You want to be entertained and mind-blown — this superhero epic redefined the genre with its dark themes, incredible performances, and stunning action sequences.'
  },
  {
    id: '27',
    title: 'Friends',
    type: 'series',
    platforms: ['Netflix', 'Prime Video'],
    imdbRating: 8.9,
    moodScore: 94,
    summary: 'Six friends navigate life and love in New York City in this beloved sitcom that defined a generation.',
    trailerUrl: 'https://www.youtube.com/watch?v=hDNNmeeJs1Q',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German', 'Italian'],
    dubbing: ['Hindi', 'Spanish'],
    poster: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 1994,
    genre: ['Comedy', 'Romance'],
    duration: '22 min episodes',
    whyRecommended: 'You\'re feeling lonely and want to be uplifted — this timeless sitcom about friendship will make you laugh and feel like you\'re part of the group.'
  },
  {
    id: '28',
    title: 'Avengers: Endgame',
    type: 'movie',
    platforms: ['Disney+', 'Prime Video'],
    imdbRating: 8.4,
    moodScore: 87,
    summary: 'The epic conclusion to the Marvel Cinematic Universe\'s Infinity Saga, featuring spectacular action and emotional payoffs.',
    trailerUrl: 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
    language: 'English',
    subtitles: ['Hindi', 'Spanish', 'French', 'German', 'Italian'],
    dubbing: ['Hindi', 'Spanish', 'French'],
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 2019,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    duration: '181 min',
    whyRecommended: 'You want to feel entertained and inspired — this superhero epic delivers incredible action, emotional moments, and the satisfying conclusion to a decade-long story.'
  }
];

// Mood-based content mapping
export const moodBasedContent = {
  'Happy': [
    mockRecommendations[0], // Kantara
    mockRecommendations[1], // RRR
    mockRecommendations[2], // The Good Place
    mockRecommendations[26], // Friends
  ],
  'Stressed': [
    mockRecommendations[3], // ZNMD
    mockRecommendations[4], // The Pursuit of Happyness
    mockRecommendations[5], // Headspace Guide
    mockRecommendations[21], // Amélie
  ],
  'Tired': [
    mockRecommendations[6], // Midnight Diner
    mockRecommendations[7], // Our Planet
    mockRecommendations[8], // Chef's Table
    mockRecommendations[23], // La La Land
  ],
  'Anxious': [
    mockRecommendations[9], // The Office
    mockRecommendations[10], // Breathe: Into the Shadows
    mockRecommendations[11], // Inside Out
    mockRecommendations[26], // Friends
  ],
  'Lonely': [
    mockRecommendations[12], // Her
    mockRecommendations[13], // Little Women
    mockRecommendations[14], // The Lunchbox
    mockRecommendations[26], // Friends
  ],
  'Bored': [
    mockRecommendations[15], // The Boys
    mockRecommendations[16], // Money Heist
    mockRecommendations[17], // Squid Game
    mockRecommendations[22], // Stranger Things
  ]
};

// Desired feeling based content
export const desiredFeelingContent = {
  'Uplifted': [
    mockRecommendations[0], // Kantara
    mockRecommendations[3], // ZNMD
    mockRecommendations[20], // Minnal Murali
    mockRecommendations[23], // La La Land
  ],
  'Entertained': [
    mockRecommendations[1], // RRR
    mockRecommendations[15], // The Boys
    mockRecommendations[22], // Stranger Things
    mockRecommendations[27], // Avengers: Endgame
  ],
  'Relaxed': [
    mockRecommendations[6], // Midnight Diner
    mockRecommendations[7], // Our Planet
    mockRecommendations[21], // Amélie
    mockRecommendations[14], // The Lunchbox
  ],
  'Inspired': [
    mockRecommendations[4], // The Pursuit of Happyness
    mockRecommendations[19], // Interstellar
    mockRecommendations[0], // Kantara
    mockRecommendations[23], // La La Land
  ],
  'Mind-blown': [
    mockRecommendations[18], // Inception
    mockRecommendations[24], // Breaking Bad
    mockRecommendations[16], // Money Heist
    mockRecommendations[25], // The Dark Knight
  ]
};

// Duration-based content
export const durationBasedContent = {
  '<30 min': [
    mockRecommendations[2], // The Good Place (22 min episodes)
    mockRecommendations[9], // The Office (22 min episodes)
    mockRecommendations[5], // Headspace Guide (20 min episodes)
    mockRecommendations[26], // Friends (22 min episodes)
  ],
  '~1 hr': [
    mockRecommendations[6], // Midnight Diner (30 min episodes)
    mockRecommendations[8], // Chef's Table (50 min episodes)
    mockRecommendations[7], // Our Planet (50 min episodes)
    mockRecommendations[22], // Stranger Things (50 min episodes)
  ],
  '2+ hrs': [
    mockRecommendations[0], // Kantara (148 min)
    mockRecommendations[1], // RRR (187 min)
    mockRecommendations[19], // Interstellar (169 min)
    mockRecommendations[25], // The Dark Knight (152 min)
  ],
  'Binge-ready': [
    mockRecommendations[24], // Breaking Bad
    mockRecommendations[16], // Money Heist
    mockRecommendations[15], // The Boys
    mockRecommendations[22], // Stranger Things
  ]
};

// Company-based content
export const companyBasedContent = {
  'Solo': [
    mockRecommendations[6], // Midnight Diner
    mockRecommendations[12], // Her
    mockRecommendations[18], // Inception
    mockRecommendations[7], // Our Planet
  ],
  'Partner': [
    mockRecommendations[13], // Little Women
    mockRecommendations[21], // Amélie
    mockRecommendations[23], // La La Land
    mockRecommendations[14], // The Lunchbox
  ],
  'Friends': [
    mockRecommendations[15], // The Boys
    mockRecommendations[26], // Friends
    mockRecommendations[22], // Stranger Things
    mockRecommendations[16], // Money Heist
  ],
  'Family': [
    mockRecommendations[11], // Inside Out
    mockRecommendations[27], // Avengers: Endgame
    mockRecommendations[2], // The Good Place
    mockRecommendations[20], // Minnal Murali
  ]
};

// Language-based content
export const languageBasedContent = {
  'Hindi': [
    mockRecommendations[3], // ZNMD
    mockRecommendations[14], // The Lunchbox
    mockRecommendations[10], // Breathe: Into the Shadows
  ],
  'Tamil': [
    // Add Tamil content here when available
  ],
  'Telugu': [
    mockRecommendations[1], // RRR
  ],
  'Kannada': [
    mockRecommendations[0], // Kantara
  ],
  'Malayalam': [
    mockRecommendations[20], // Minnal Murali
  ],
  'English': [
    mockRecommendations[18], // Inception
    mockRecommendations[19], // Interstellar
    mockRecommendations[9], // The Office
    mockRecommendations[26], // Friends
    mockRecommendations[24], // Breaking Bad
    mockRecommendations[25], // The Dark Knight
  ],
  'Korean': [
    mockRecommendations[17], // Squid Game
  ],
  'Spanish': [
    mockRecommendations[16], // Money Heist
  ],
  'French': [
    mockRecommendations[21], // Amélie
  ],
  'Any': mockRecommendations.slice(0, 8) // Mix of different languages
};

export const trendingContent: MovieRecommendation[] = [
  mockRecommendations[0], // Kantara
  mockRecommendations[1], // RRR
  mockRecommendations[18], // Inception
  mockRecommendations[19], // Interstellar
  mockRecommendations[3], // ZNMD
  mockRecommendations[20]  // Minnal Murali
];