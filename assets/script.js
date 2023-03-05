// declare global variables needed for entire game and questions array
var currentQuestionNumber = 0;
var time = questions.length * 25;
var timerId;

// declare element ids that will need to be selected throughout functions to create content
var quizTimerElement = document.getElementById("time");
var quizScoresElement = document.getElementById("quiz-scores");
var questioChoicesElement = document.getElementById("question-choices");
var quizSubmitButton = document.getElementById("submit");
var playerInitialsElement = document.getElementById("initials");
var startGameElement = document.getElementById("gamestart");
var quizCommentsElement = document.getElementById("quiz-comments")

// Quiz questions array
var questions = [
    {
      title: 'What does CSS stand for?:',
      choices: ['Casing Style Sheet', 'Cascading Style Sheet', 'Cascade Style Sheet', 'Collated Style Sheet'],
      answer: 'Cascading Style Sheet',
    },
    {
      title: 'If you type the following code in the console window, what result will you get?: 3 > 2 > 1 === false;',
      choices: ['False', 'True', 'Boolean', 'Code error'],
      answer: 'True',
    },
    {
      title: 'When was Javascript created?',
      choices: ['1984', '1985', '1999', '1995'],
      answer: '1995',
    },
    {
      title:
        'Which built-in method returns the length of a string?',
      choices: ['Length()', 'size()', 'index()', 'None of the above'],
      answer: 'Length()',
    },
    {
      title:
        'What is a for loop used for?:',
      choices: ['Adding information to your browsers local storage', 
      'Selects an element from the HTML sheet', 
      'checks for certain conditions, then executes a block of code as long as conditions are met',
        'loops a block of code as long as there in 4 values in the array',
        ],
      answer: 'checks for certain conditions, then executes a block of code as long as conditions are met',
    },
  ];
  

// start quiz function




// timer function




// Questions function and go to next question




// Incorrect and correct functions - move to next question; need timer reset function