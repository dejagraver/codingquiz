//Start Quiz Button

//create your (array full of quetions )objects 
var questions = [questionone.q, questiontwo.q, questiontwo.q, questionthree.q, questionfour.q, questionfive.q];

var questionone =  {q: "Commonly used data types do not include ___.", a: "Strings"}

var questiontwo = {q: "The condition of an if / else statement is enclosed with ___.", a: "Curly Brackets"}

var questionthree = {q:"Arrays in javaScript can be used to store ___.", a: "All of the Above"}

var questionfour = {q: "String values must be enclosed within ___ when being assigned to variables.", a: "Quotes"}

var questionfive = {q: "A very useful tool used during development and debugging for printing content to the debugger is:", a: "Console.log"} 
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
    return;
}

window.onclick  = function () {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);

};

//Click start button
startQuiz () {
    this.mainElement = document.querySelector('main');

}


// this.startButton = document.querySelector('Start Quiz');
// this.quiz = { };
// this.startButton.addEventListener('click', this.startQuiz.bind(this));

//function that creates DOM elements for each questions asked 
//create container to hold Question and Answer elements
var createQuestionOne = function (questionId) {
    //create question by calling on object declared .q
    var questionOneEl = document.createElement ("div");
    console.log(div)
    questionOneEl.textContent = questionone.q;
    questionOneEl.className = "question one"
    answerOneEl.setAttribute("question-id", questionId);
    actionContainerEl.appendChild(questionOneEl);

    //create answer options button 
    var answerOneEl = document.createElement ("button");
    answerOneEl.textContent = "1. Strings",  "2. Booleans", "3. Alerts", "4. Numbers";
    answerOneEl.className = "btn one";
    answerOneEl.setAttribute("question-id", questionId);
    actionContainerEl.appendChild(answerOneEl);
}

var createQuestionTwo = function (questionId) {
    //create question 
    var questionTwoEl = document.createElement ("div");
    questionTwoEl.textContent = questiontwo.q;
    questionTwoEl.className = "question two"
    answerTwoEl.setAttribute("question-id", questionId);
    actionContainerEl.appendChild(questionTwoEl);

    //create answer options button
    var answerTwoEl = document.createElement ("button");
    answerTwoEl.textContent = "1.Quotes", "2. Curly brackets", "3. Parenthesis", "4. Square brackets";
    answerTwoEl.className = "btn two";
    answerTwoEl.setAttribute("question-id", questionId);
    actionContainerEl.appendChild(answerTwoEl);
}

var createQuestionThree = function (questionId) {
    //create question 
    var questionThreeEl = document.createElement ("div");
    questionThreeEl.textContent = questionthree.q;
    //create answer options button
    var answerThreeEl = document.createElement ("button");
    answerThreeEl.textContent = "1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above";
    answerThreeEl.className = "btn three";
    answerThreeEl.setAttribute("question-id", questionId);
    answerContainerEl.appendChild(answerThreeEl); 
}

var createQuestionFour = function (questionId) {
    //create question 
    var questionFourEl = document.createElement ("div");
    questionFourEl = questionfour.q;

    //create answer options button
    var answerFourEl = document.createElement ("button");
    answerFourEl.textContent = "1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis";
    answerFourEl.className = "btn four";
    answerFourEl.setAttribute("question-id", questionId);
    answerContainerEl.appendChild(answerFourEl); 
}

var createQuestionFive = function (questionId) {
    //create question 
    var questionFiveEl = document.createElement ("div");
    questionFiveEl = questionfive.q;
    
    //create answer options button
    var answerFiveEl = document.createElement ("button");
    answerFiveEl.textContent = "1. Javascript",  "2. Terminal/bash", "3. For loops", "4. Console.log";
    answerFiveEl.className ="btn five";
    answerFiveEl.setAttribute("question-id", questionId);
    answerFiveEl.appendChild(answerFiveEl); 
}

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
    if (answer === questionone.a){
        score++;
        alert ('You are Correct!')
    } else {
        alert ('You are Wrong!')
    }
    if (answer === questiontwo.a){
        score++;
        alert ('You are Correct!')
    } else {
        alert ('You are Wrong!')
    }
    if (answer === questionthree.a){
        score++;
        alert ('You are Correct!')
    } else {
        alert ('You are Wrong!')
    }
    if (answer === questionfour.a){
        score++;
        alert ('You are Correct!')
    } else {
        alert ('You are Wrong!')
    }
    if (answer === questionfive.a){
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
    // saveScore = JSON.parse(score);