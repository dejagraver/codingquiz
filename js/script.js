//Start Quiz Button

//create your (array full of quetions )objects 
var questions = [
    {
        q: "Commonly used data types do not include ___.", 
        a: "Strings",
        options: ["1. Strings",  "2. Booleans", "3. Alerts", "4. Numbers"]
    },

    {
        q: "The condition of an if / else statement is enclosed with ___.", 
        a: "Curly Brackets",
        options: ["1.Quotes", "2. Curly brackets", "3. Parenthesis", "4. Square brackets"]
    },
    {
        q:"Arrays in javaScript can be used to store ___.", 
        a: "All of the Above",
        options: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"]
    },
    {
        q: "String values must be enclosed within ___ when being assigned to variables.", 
        a: "Quotes",
        options: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"]
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        a: "Console.log",
        options: ["1. Javascript",  "2. Terminal/bash", "3. For loops", "4. Console.log"]
    }
]

var currentIndex = 0
var score = [];

//Click Start Quiz button
//countdown function timer for the questions to be answered with in 
//when countdown stops so does the quiz
function startTimer(duration, display) {
    console.log(startTimer)
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        timer -= 1;
        if (timer <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}
window.onclick  = function () {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};


// Click start button
// startQuiz () {
//     this.mainElement = document.querySelector('.quiz');
//     this.startButton = document.querySelector('#start');
//     this.quiz = { };
//     this.startButton.addEventListener('click', this.startQuiz.bind(this));
// }
//when answer is clicked , validate when its click, checking it it right or wrong, incresing index to that next on to the next one  
//javascript index, how you access items with in an array 
//function that creates DOM elements for each questions asked 
//create container to hold Question and Answer elements


var createQuestions = function (questionId) {
    //create question by calling on object declared .q
    var questionsDiv = document.createElement ("div");
    console.log(div)
        questionsDiv.textContent = questions[currentIndex].q;
        questionsDiv.className = "questionEL"
        answerOneEl.setAttribute("question-id", questionId);
        actionContainerEl.appendChild(questionsDiv);

//access the object 
//for each of these things create a button and append it to the options 
//create answer options button 
    var optionsButton = document.createElement ("button");
        optionsButton.textContent = options[currentI]
        optionsButton.className = "optionsEL";
        options.setAttribute("question-id", questionId);
        actionContainerEl.appendChild(optionsButton);

//onlclick the current q is being set , it will increment an index/number, then the new increment goes t
options.onclick  = function () {
  currentIndex++ 
};
}


// get mycurrent question is question at index 
// for loop to create all the choices 
// and append that to the final answer 
//currentQuestions.options.foreach answer true or false and increment on to the next index 
//when the answer is selected create a function that will cause the function to move onto the next one 
//inside the function call on the choices function that increments points 
// function check answer and create a for loop that willl call on the choices functions in the var choices
//input and
//function choices = the points earned for right answers

function choices() {
    var score = 0; 
    for (i = 0; i < arr.length; i++) {
        var answer = confirm(arr[i].q)
    }
    if (answer === questions.a){
        score++;
        alert ('You are Correct!')
    } else {
        alert ('You are Wrong!')
    }
    return score.join("")
}
saveScore();





var saveScore = function() {
    localStorage.setItem("score", JSON.stringify(score));
  };

//Show ScoreBoard with initials and score logged populated 
var loadScore = function() {
    var savedTasks = localStorage.getItem("score");
    // if there are no tasks, set tasks to an empty array and return out of the function
    if (!savedTasks) {
      return false;
    }
}
// saveScore = JSON.parse(score)