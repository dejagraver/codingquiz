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
var score = 0;
var timer;
var timeRemaining = 0;
var highScore = [];

//Selecting the Quiz divs for information to be input with in 
var codingQuizDiv = document.querySelector(".quiz");
var scoreBoardDiv = document.querySelector(".time-score")

///create elements
var startQuizPage = document.createElement("div");
var questionDisplayed = document.createElement("div");
var answerButton = document.createElement("div");
var showHighScore = document.createElement("label");
var enterHighScore = document.createElement("input");
var submitButton = document.createElement ("button")


//Timer for when you start the game 
function startQuiz() {
  
    }, 
    //clear timer

    //function that will
function createSkeleton {

}
//have a function solely for displaying the questions that have been stored in the object above 
//grab current question and update the different portions of that div as questions are answered 
//
function displayQuestions() {
    var currentQuestion 
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
