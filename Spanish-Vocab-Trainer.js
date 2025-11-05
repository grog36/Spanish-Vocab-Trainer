//Gregory Ecklund
//August 2022

//Variable Declarations
const timerList = [document.getElementById("minutesLabel"), document.getElementById("minutes"), document.getElementById("seconds"), document.getElementById("secondsLabel")];
var score = 0;
let WORDS = {};
setupDictionary();
var currentWordObject;
var currentWord;
var wordCount = 0;
var wordList = [];
var vocabSetCount = 16; //Manually needs to be changed
var gametype = "definition"; //What the user needs to answer with (definition or word)

//Allows the user to choose from which set of Vocab Words to use
function chooseSet(setNumber) {
    for (let word in WORDS) {
        if (WORDS[word]["vocabSets"].includes(setNumber)) {
            let thisWord = {};
            thisWord[word] = WORDS[word];
            wordList.push(thisWord);
        }
    }
}

//Startup function
function start() {

    //Sets up list depending on chosen sets
    for (let i = 1; i < vocabSetCount + 1; i++) {
        if (document.getElementById(`vocabList${i}Switch`).checked === true) {
            chooseSet(i);
        }
    }

    //Sets up the wordcount for the current variation of the word list
    wordCount = wordList.length;

    //If the list is not empty
    if (wordCount !== 0) {
        //Initializes the gametype
        if (document.getElementById("gametypeSelect").value.split(" ")[1] === "Word") {
            gametype = "word";
        }

        //Sets document Element Visibilities
        for (let i in timerList) {
            timerList[i].style.visibility = "visible";
        }
        document.getElementById("questions").style.visibility = "visible";
        document.getElementById("input").style.visibility = "visible";
        document.getElementById("input").focus();
        document.getElementById("tips").style.visibility = "visible";

        //Removes start button div
        document.getElementById("startButtonDiv").remove();

        //Sets up questions and timer
        timerContinue();
        nextQuestion();
        
    }
}

//Sets Up the Next Question
function nextQuestion() {
    if (wordList.length === 0) {
        gameOver();
    }
    else {
        let currentIndex = randomNumber(0, (wordList.length - 1));
        currentWordObject = wordList[currentIndex];
        currentWord = Object.keys(currentWordObject)[0];
        wordList.splice(currentIndex, 1);
        document.getElementById("input").value = "";
        if (gametype === "definition") {
            document.getElementById("questions").innerHTML = currentWord;
        }
        else if (gametype === "word") {
            let newQuestionText = "(" + currentWordObject[currentWord]["partOfSpeech"];
            if (currentWordObject[currentWord]["partOfSpeech"] === "adjective" ||
                currentWordObject[currentWord]["partOfSpeech"] === "noun") {
                if (currentWordObject[currentWord]["gender"] === "feminine" || currentWordObject[currentWord]["gender"] === "masculine") {
                    newQuestionText += ", " + currentWordObject[currentWord]["gender"];
                }
            }
            newQuestionText += ") ";
            for (let defNum in currentWordObject[currentWord]["definitions"]) {
                newQuestionText += currentWordObject[currentWord]["definitions"][defNum];
                if (defNum != currentWordObject[currentWord]["definitions"].length - 1) {
                    newQuestionText += ", "
                }
            }
            document.getElementById("questions").innerHTML = newQuestionText;
        }
    }
}

//Checks the Input for the Answer
function checkAnswer() {
    //Sets up variables for checking
    let input = document.getElementById("input").value
    let guess = input.toLowerCase().replace(/\s/g, '');

    //Checks if user wanted to quit
    if (input == "END") {
        gameOver();
    }

    //Checks for current gametype
    if (gametype === "word") {
        if (guess == currentWord.toLowerCase().replace(/\s/g, '')) {
            score++;
            nextQuestion();
        }
    }
    else if (gametype === "definition") {
        let possibleAnswers = currentWordObject[currentWord]["definitions"];

        //Checks if user was right
        for (let i = 0; i < possibleAnswers.length; i++) {
            if (guess == possibleAnswers[i].toLowerCase().replace(/\s/g, '')) {
                score++;
                nextQuestion();
            }
        }
    }
}

//Displays Win Screen
function gameOver() {
    //Visibility Options
    document.getElementById("input").style.visibility = "hidden";
    document.getElementById("retryButton").style.visibility = "visible";
    document.getElementById("tips").style.visibility = "hidden";

    //Stops Timer
    stopTimer();

    //Checks and displays whether the user won or lost
    if (score == wordCount) {
        document.getElementById("questions").innerHTML = `YOU WIN! (${score} / ${wordCount})`;
        document.body.style.background = "green";
        document.getElementById("retryButton").style.backgroundColor = "lightgreen";
    }
    else {
        let loseText = `YOU LOSE! `;
        if (gametype === "definition") {
            loseText += "One possible solution was: " + currentWordObject[currentWord]["definitions"][0] + ". ";
        }
        else if (gametype === "word") {
            loseText += "The right answer was: " + currentWord + ". ";
        }
        loseText += `(${score} / ${wordCount})`;
        document.body.style.background = "red";
        document.getElementById("retryButton").style.backgroundColor = "crimson";
        document.getElementById("questions").innerHTML = loseText;
    }
}

//Retry Function
function retry() {
    location.reload();
}

//TIMER SHENANIGANS
var t;
var seconds = 0;
var minutes = 0;
function timer() {
    seconds = seconds + 1;
    if(seconds >= 60) {
        minutes = minutes + 1;
        seconds = seconds - 60;
    }
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    timerContinue();
}
function timerContinue() {
   t = setTimeout(timer, 1000);
}
function stopTimer() {
    clearTimeout(t);
}

//Random Number Function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Pulls data from words.json
function setupDictionary() {
    fetch("./words.json")
        .then(response => response.json())
        .then(data => {
            WORDS = data;
        })
}
