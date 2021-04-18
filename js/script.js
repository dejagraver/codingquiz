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
var screenChange = 1;

var currentQuestion = 0;

var timer;
var timeRemaining = 0;

var highScore = [];
var score = 0;

//Selecting the Quiz divs for information to be input with in 
var codingQuizDiv = document.querySelector(".quiz");
var scoreBoardDiv = document.querySelector(".time-score")
var answerButton = document.querySelector("#answer");


///create elements
var startQuizPage = document.createElement("div");
var questionDisplayed = document.createElement("div");
var showHighScore = document.createElement("label");
var enterHighScore = document.createElement("input");
var submitButton = document.createElement ("button")

//Create Home Page 
function homePage(){
    var displayTime = document.createElement("div");
    var displayHighScore = document.createElement("button");
    var displayStartButton = document.createElement("button");
    var displayDescription = document.createElement("div");
}

//Timer for when you start the game 
function startQuizTimer() {
  timer = setInterval(fucntion(){
      time--;
      document.querySelector(".time-score").textContent = "Time Remaining;";

      if (timeRemaining < 0){
          document.querySelector(".quiz").remove();
          alert("You lost");
          restartQuiz();
      }
  },1000);
    }
function endQuizTimer(){
    clearInterval(timer)
},

    //clear timer

//When a button is clicked, next page and next question 
function clickListener() {
    if (answerButton).onclick() {

    } 
}
var startQuizPage = document.createElement("div");


//have a function solely for displaying the questions that have been stored in the object above 
//grab current question and update the different portions of that div as questions are answered 
//
function displayQuestions() {
    var questionContainer = document.createElement("div");
    questionContainer.className = "quiz-questions";

    var questionAsked = document.createElement("h1");
    questionAsked.textContent = questions[currentQuestion].q;

    questionContainer.appendChild(questionAsked);
    questionConatiner.appendChild(answerButton(questions[currentQuestion.options]));
    codingQuizDiv.appendChild(questionContainer);

    answerButton[0].textContent = questions[currentQuestion].options[0];
    answerButton[1].textContent = questions[currentQuestion].options[1];
    answerButton[2].textContent = questions[currentQuestion].options[2];
    answerButton[3].textContent = questions[currentQuestion].options[3];

    for (i = 0; i < answerButton.length; i++) {
        answerButton[i].addEventListener('click', checkAnswer);
    }
}
displayQuestions.addEventListener('click', startQuizTimer);

function checkAnswer(event) {
    if (event.target.textContent === questions[currentQuestion].a)
        alert("correct")
        currentQuestion++;
        score++;
}

//clear out any of the previous questions option
//once thats done you need to loop over to the

//create a div for the questions to display 
//once questions are displayed
//you clear the function 

function checkAnswers() {

}

//Timer for when you end the game 
function endQuiz() {
    clearInterval(timer);
// overview of the quiz results where youll input the name tag
// followed by a onclick the button html tag
}


//getting the object of questions and asnwers into my page 
//document.getelemnt by id/queryselctor etc... pop in the object value 

//store high score using set item in localstorage 

//Score board display
