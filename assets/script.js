// Declare quiz questions array globally
var quizQuestions = [
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
    title:'Which built-in method returns the length of a string?',
    choices: ['Length()', 'size()', 'index()', 'None of the above'],
    answer: 'Length()',
  },
  {
    title:'What is a for loop used for?:',
    choices: ['Adding information to your browsers local storage', 
    'Selects an element from the HTML sheet', 
    'checks for certain conditions, then executes a block of code as long as conditions are met',
    'loops a block of code as long as there in 4 values in the array',
    ],
    answer: 'checks for certain conditions, then executes a block of code as long as conditions are met',
  },
];

// declare global variables needed for entire game and questions array
var currentQuestionNumber = 0;
var time = quizQuestions.length * 25;
var timerCount;

// declare element ids that will need to be selected throughout functions to create content
var quizTimerElement = document.getElementById("time");
var quizScoresElement = document.getElementById("quiz-scores");
var questionChoicesElement = document.getElementById("question-choices");
var quizQuestionsElement = document.getElementById("questions-heading")
var quizSubmitButton = document.getElementById("submit");
var playerInitialsElement = document.getElementById("initials");
var startGameElement = document.getElementById("start-quiz");
var quizCommentsElement = document.getElementById("quiz-comments")


// start quiz function
function startQuiz(){
    var quizBegin = document.getElementById('game-start');
    quizBegin.setAttribute("class", "hide");
    questionChoicesElement.removeAttribute("class")
    timerCount = setInterval(timeCount, 1000);
    quizTimerElement.textContent = time
// call a question function
    startQuestion();
}
// timer function
function timeCount() {
    time--;
    quizTimerElement.textContent = time;
    if (time <= 0) {
      quizComplete();
    }
}

function quizComplete() {
    clearInterval(timerCount);
    var quizEnd = document.getElementById('end-screen');
    quizEnd.removeAttribute('class');
    var quizScoreComplete = document.getElementById('end-score');
    quizScoreComplete.textContent = time;
    quizQuestionsElement.setAttribute('class', 'hide');
}


// Questions function and go to next question
function startQuestion(){
  var currentQuestion = quizQuestions[currentQuestionNumber];
  var quizQuestionsElement = document.getElementById("questions-heading");

  quizQuestionsElement.textContent = quizQuestions.title;
  questionChoicesElement.textContent = ' ';
// add new choice and selection logic for creating options and adds a button for all choices
  for (var i = 0; i < currentQuestion.choices.length; i++){
    var questionChoice = currentQuestion.choices[i];
    var choiceElement = document.createElement('button');
// setAttribute target classification and set the value of the button
    choiceElement.setAttribute('class', 'question-choices');
    choiceElement.setAttribute('value', questionChoice);

    choiceElement.textContent = i + 1 + '.' + questionChoice
    questionChoicesElement.appendChild(choiceElement);
  }
}


// Incorrect and correct functions - move to next question; need timer reset function - also creates return for none choice click
function quizClickEvent(event) {
  var quizSubmitButton = event.target;
  if (!quizSubmitButton.matches('.question-choices')) {
    return;
  }

  if (quizSubmitButton.value !== questions[currentQuestionNumber].answer){

    time -= 10;
    if (time < 0) {
    time = 0;
    }
    quizTimerElement.textContent = time;

    quizCommentsElement.textContent = "Sorry! incorrect"; 

  } else {  quizCommentsElement.textContent = "Thats right!";
  }
  quizCommentsElement.setAttribute('class','quiz-comments');

  timeRunout(function () { 
    quizCommentsElement.setAttribute('class', 'quiz-commentshide');
  }, 1000);

    currentQuestionNumber++;
    if (time <= 0 || currentQuestionNumber === questions.length){
    quizEnd();
  } else {
  // need to make to get the next question after click event
    getQuestion();
  }
  }



// scores to local storage as string function
// function scoreStorage(){
//   var playerInitialsElement
// }

// Highscores function



// move to highscores page


// Run functions;
questionChoicesElement.click = quizClickEvent;

startGameElement.onclick = startQuiz;