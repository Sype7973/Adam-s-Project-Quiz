// Declare quiz questions array globally - call variables and loop, don't try to index by number
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
var time = quizQuestions.length * 20;
var timerCount;

// declare element ids that will need to be selected throughout functions to create content
var quizTimerElement = document.getElementById("time");
var quizScoresElement = document.getElementById("quiz-scores");
var questionChoicesElement = document.getElementById("question-choices");
var quizSubmitButton = document.getElementById("submit");
var playerInitialsElement = document.getElementById("initials");
var startGameElement = document.getElementById("start-quiz");
var quizCommentsElement = document.getElementById("quiz-comments");
var questionIndex = document.getElementById("questions");




// start quiz function
function startQuiz(){
    var quizBegin = document.getElementById('game-start');
    quizBegin.setAttribute("class", "hide");
    questionChoicesElement.removeAttribute("class")
    questionIndex.removeAttribute('class')
    timerCount = setInterval(timeCount, 1000);
    quizTimerElement.textContent = time
// call a question function
    startQuestion();
}

// Questions function and go to next question
function startQuestion(){
  var currentQuestion = quizQuestions[currentQuestionNumber];
  var quizQuestionsElement = document.getElementById("questions-heading");

  quizQuestionsElement.textContent = currentQuestion.title;
  questionChoicesElement.textContent = '';
// add new choice and selection logic for creating options and adds a button for all choices
  for (var i = 0; i < currentQuestion.choices.length; i++){
    var questionChoice = currentQuestion.choices[i];
    var choiceElement = document.createElement('button');
// setAttribute target classification and set the value of the button
    choiceElement.setAttribute('class', 'choice');
    choiceElement.setAttribute('value', questionChoice);

    choiceElement.textContent = i + 1 + '.' + questionChoice;

    questionChoicesElement.appendChild(choiceElement);
  }
}


// Incorrect and correct functions - move to next question; need timer reset function - also creates return for none choice click
function quizClickEvent(event) {
  var questionChoiceBtn = event.target;
  if (!questionChoiceBtn.matches('.choice')) {
    return;
    }
  if (questionChoiceBtn.value !== quizQuestions[currentQuestionNumber].answer){
     // penalty timer
    time -= 10;
    if (time < 0) {
      time = 0;
    }
   
    quizTimerElement.textContent = time;

    quizCommentsElement.textContent = "Sorry! incorrect"; 

  } else { 
    quizCommentsElement.textContent = "Thats right!";
  }
  quizCommentsElement.setAttribute('class','quiz-comments');
  // Set Timeout method calls a function after a number of milliseconds 1 second = 1000 milliseconds.
  setTimeout(function () { 
    quizCommentsElement.setAttribute('class', 'quiz-comments hide');
  }, 1000);

    currentQuestionNumber++;

    if (time <= 0 || currentQuestionNumber === quizQuestions.length){
    quizComplete();
  } else {
  // need to make to get the next question after click event
    startQuestion();
    
  }
  }

// timer function
function timeCount() {
  time--;
  quizTimerElement.textContent = time;
  if (time <= 0) {
    quizComplete();
  }
}

// end of quiz function show completed screen
function quizComplete() {
    clearInterval(timerCount);
    var quizEnd = document.getElementById('end-screen');
    quizEnd.removeAttribute('class');
    var quizScoreComplete = document.getElementById('end-score');
    quizScoreComplete.textContent = time;

    questionIndex.setAttribute('class', 'hide');

}

// scores to local storage as string function

function scoreStorage(){
  var playerInitials =  playerInitialsElement.value.trim();
  // checks to see initials input
  // if (playerInitials) {
    var quizHighScores = 
    JSON.parse(window.localStorage.getItem('highscores')) || [];
    // create new score
    var playerScoreNew =  
    {
    score: time,
    initials: playerInitials,
    };
    console.log(quizHighScores);
    console.log(playerScoreNew);
    quizHighScores.push(playerScoreNew);
    // move to highscores page
    window.localStorage.setItem('highscores', JSON.stringify(playerScoreNew));
  
    window.location.href = 'highscores.html';
} 
// }
// incase enter is used instead of mouse click
function initialsKeyUpEvent(event){
    if (event.key === 'Enter'){
    event.preventDefault();
    scoreStorage();
  }
}

// Run functions

quizSubmitButton.onclick = scoreStorage;

startGameElement.addEventListener('click', startQuiz);

questionChoicesElement.addEventListener('click', quizClickEvent);

playerInitialsElement.addEventListener('keyup', initialsKeyUpEvent);