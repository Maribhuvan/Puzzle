const CATEGORY = [
  {
    label: 'Animals',
    path: 'animals',
  },
  {
    label: 'Countries',
    path: 'countries',
  },
  {
    label: 'Fruits',
    path: 'fruits',
  },
];

const QUESTIONS = {
  animals: [
    {
      question: 'What is the largest land animal?',
      answer: 'elephant',
      level: 'medium',
    },
    {
      question: 'Which bird is known for its ability to mimic human speech?',
      answer: 'parrot',
      level: 'medium',
    },
    {
      question: 'Which mammal can fly?',
      answer: 'bat',
      level: 'easy',
    },
    {
      question: 'Which big cat is known for its black mane?',
      answer: 'lion',
      level: 'medium',
    },
    {
      question: 'What is the national animal of Australia?',
      answer: 'kangaroo',
      level: 'hard',
    },
  ],
  countries: [
    {
      question: 'Which country is home to the Eiffel Tower?',
      answer: 'france',
      level: 'easy',
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      answer: 'japan',
      level: 'medium',
    },
    {
      question: 'Which country is famous for the Great Wall?',
      answer: 'china',
      level: 'easy',
    },
    {
      question: 'Which country has the largest population in the world?',
      answer: 'india',
      level: 'medium',
    },
    {
      question: 'Which country is known as the Emerald Isle?',
      answer: 'ireland',
      level: 'hard',
    },
  ],
  fruits: [
    {
      question: 'Which fruit is known for its prickly skin and sweet interior?',
      answer: 'pineapple',
      level: 'hard',
    },
    {
      question: 'Which fruit has varieties called Granny Smith and Gala?',
      answer: 'apple',
      level: 'easy',
    },
    {
      question:
        'Which fruit is known for its tropical flavor and creamy texture?',
      answer: 'banana',
      level: 'medium',
    },
    {
      question: "Which fruit is often referred to as the 'king of fruits'?",
      answer: 'mango',
      level: 'easy',
    },
    {
      question: 'Which fruit is used to make guacamole?',
      answer: 'avocado',
      level: 'hard',
    },
  ],
};

const USER_SCORE = [
  {
    userName: 'John',
    score: 180,
  },
  {
    userName: 'Wick',
    score: 70,
  },
  {
    userName: 'Steve',
    score: 100,
  },
  {
    userName: 'Mark Wood',
    score: 200,
  },
  {
    userName: 'Terry',
    score: 60,
  },
  {
    userName: 'Joel Bright',
    score: 120,
  },
  {
    userName: 'Jenny',
    score: 0,
  },
  {
    userName: 'Shreyas',
    score: 0,
  },
];

export {CATEGORY, QUESTIONS, USER_SCORE};
