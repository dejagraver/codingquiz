//Start Quiz Button

//create your array full of quetions objects 
var questionone = {
    q: "Commonly used data types do not include ___.", 
    a: "Strings"
    }

var questiontwo = {
    q: "The condition of an if / else statement is enclosed with ___.", a: "Curly Brackets"
    }

var questionthree = {
    q:"Arrays in javaScript can be used to store ___.", 
    a: "All of the Above"
    }

var questionfour = {
    q: "String values must be enclosed within ___ when being assigned to variables.", a: "Quotes"
    }

var questionfive = {
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: "Console.log"
    }
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

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onclick  = function (start) {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};

//function that saves score
var saveScore = function() {
    localStorage.setItem("Score", JSON.stringify(score));
  };

//function that creates DOM elements for each questions asked 
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


//choices
//answers in each objectscheck to see if answer is correct 
//incorrect deduct time 
//move on to the next one  