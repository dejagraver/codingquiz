//create your (array full of quetions )objects 
var questions = [
    {
        q: "Commonly used data types do not include ___.", 
        a: 1,
        options: ["1. Strings",  "2. Booleans", "3. Alerts", "4. Numbers"]
    },

    {
        q: "The condition of an if / else statement is enclosed with ___.", 
        a: 2,
        options: ["1.Quotes", "2. Curly brackets", "3. Parenthesis", "4. Square brackets"]
    },
    {
        q:"Arrays in javaScript can be used to store ___.", 
        a: 4,
        options: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"]
    },
    {
        q: "String values must be enclosed within ___ when being assigned to variables.", 
        a: 3,
        options: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"]
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        a: 4,
        options: ["1. Javascript",  "2. Terminal/bash", "3. For loops", "4. Console.log"]
    }
]

// Set values for the functions 

var currentQuestion = 0;

var time = 100
var timer;

var highScore = [];

//Selecting the Quiz divs for information to be input with in 
var codingQuizDiv = document.querySelector(".quiz");
var scoreBoardDiv = document.querySelector(".time-score")
var answerButton = document.querySelector("#answer");


///create elements
var startQuizPage = document.createElement("div");
var questionDisplayed = document.createElement("div");



//Timer for when you start the game 
function startQuizTimer() {
  timer = setInterval(function(){
      time--;
      document.querySelector(".time").textContent = "Time Remaining: " + time;

      if (time < 0){
          document.querySelector(".quiz").remove();
          alert("You lost");
          restartQuiz();
      }
  },1000);
    }

function endQuizTimer(){
    clearInterval(timer)
}
    //clear timer

//have a function solely for displaying the questions that have been stored in the object above 
//grab current question and update the different portions of that div as questions are answered 

function displayQuestions() {
    //create container to display the question
    document.getElementById("click").style.display = "none"
    // var codingQuizDiv = document.querySelector(".quiz");

    var questionContainer = document.createElement("div");
    questionContainer.className = "quiz-container";

    var questionsDiv = document.querySelector(".questions");
    questionsDiv.innerHTML = "";

    //create DOM element for the question
    var questionAsked = document.createElement("h1");
    //.textContent to displayy the question (q) from questions array
    questionAsked.textContent = questions[currentQuestion].q;
    questionAsked.className = "quiz-question";

    //attach question to the container
    questionContainer.appendChild(questionAsked);
    questionsDiv.appendChild(questionContainer);
    //attach option buttons to the quiz section(codingQuizDiv)from HTML
    // codingQuizDiv.appendChild(questionAsked);


    for (i = 0; i < questions[currentQuestion].options.length; i++){
        var answerArray = document.getElementsByClassName("answer");
        answerArray[i].textContent = questions[currentQuestion].options[i];
        answerArray[i].addEventListener('click', checkAnswer);
    }
}
document.getElementById("click").addEventListener('click', startQuizTimer);

//hide start button after its clicked
//change the way the div is appended, so the question is above the options 
//see why the event listener is not responding for options when they are clicked, could be something with the check answer

function checkAnswer(event) {
    if (event.target.textContent === questions[currentQuestion].a){
        alert("correct")
        setScore();
    } else if (currentQuestion === questions.length-1) {
        scoreBoard();
    } else {
        currentQuestion++;
        displayQuestions();
        setScore();
        time-= 10;
    };
    
}


// function setScore(){
//     localStorage.setItem("scores", JSON.stringify(highScore));
// }
// function getScore(){
//     var setScore = localStorage.getItem("scores");

//     if(!setScore){ highScore = [];}
   
//     highScore = JSON.parse(setScore);
// }


//clear out any of the previous questions option
//once thats done you need to loop over to the

//create a div for the questions to display 
//once questions are displayed
//you clear the function 

// function scoreBoard() {
//     var enterName = document.createElement("input");

//     var showHighScore = document.createElement("label");
// }

//clear out any of the previous questions option
//once thats done you need to loop over to the

//create a div for the questions to display 
//once questions are displayed
//you clear the function 

//Timer for when you end the game 

function scoreBoard() {
    document.querySelector(".quiz").remove();
    document.querySelector(".questions").remove();

    var boardContainer = document.createElement("div");
    boardContainer.className = "board-container";

    var highScore = document.createElement("label");
    highScore.textContent = "Enter high score: ";

    var enterHighScore = document.createElement("input");
    enterHighScore.className = "enter-name";
    enterHighScore.setAttribute("type", "text");
    enterHighScore.setAttribute("placeholder", "Enter Initials");

    var saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.className = ".score-button";

    boardContainer.appendChild(highScore);
    enterHighScore.appendChild(boardContainer);

    clearInterval(timer)
// overview of the quiz results where youll input the name tag
// followed by a onclick the button html tag
}

//getting the object of questions and asnwers into my page 
//document.getelemnt by id/queryselctor etc... pop in the object value 

//store high score using set item in localstorage 

//Score board display