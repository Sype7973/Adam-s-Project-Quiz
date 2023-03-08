var scoresOlEl = document.getElementById('highscores'); 
var ClearResultsBtn = document.getElementById('clear')
// var playerHighScore = JSON.parse(localStorage.getItem('highscores'));



// Highscores function - needs to getItem from local storage; turn it back into an object with value and render onto page as list item

function renderHighScores(){
    // get highscores from local storage and give it back to a variable as an object
    var playerHighScore = JSON.parse(localStorage.getItem('highscores'));
  // create List item using Highscores <ol> element from highscores.html; create function for if there is no highscores available
  // need for loop to iterate through array:
  console.log(playerHighScore);
  for (i = 0; i < playerHighScore.length; i++){
    var li = document.createElement('li');
    li.textContent = playerHighScore[i].initials + playerHighScore[i].score;
    scoresOlEl.appendChild(li);
  }
  }

function ClearResults(event){
    ClearResultsBtn = event.target;
    localStorage.clear();
    scoresOlEl.textContent = '';
}

ClearResultsBtn.onclick = ClearResults;

renderHighScores();
  