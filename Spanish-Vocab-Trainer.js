//Gregory Ecklund
//August 2022

//Variable Declarations
const timerList = [document.getElementById("minutesLabel"), document.getElementById("minutes"), document.getElementById("seconds"), document.getElementById("secondsLabel")];
var score = 0
var WORDS = {
    "la vista": {
        "definitions": [
            "the view",
            "the sight"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 1
    },
    "el oído": {
        "definitions": [
            "the ear"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 1
    },
    "el tacto": {
        "definitions": [
            "the touch"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 1
    },
    "el olfato": {
        "definitions": [
            "the smell"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 1
    },
    "el gusto": {
        "definitions": [
            "the taste"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 1
    },
    "el brillo": {
        "definitions": [
            "the shine",
            "the brightness"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 1
    },
    "la sombra": {
        "definitions": [
            "the shadow",
            "the shade"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 1
    },
    "arrugado": {
        "definitions": [
            "wrinkled"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 1
    },
    "pálido": {
        "definitions": [
            "pale"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 1
    },
    "acechar": {
        "definitions": [
            "to stalk"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "presenciar": {
        "definitions": [
            "to witness"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "la carcajada": {
        "definitions": [
            "the loud laugh"
        ],
        "partOfSpeech": "adjective",
        "gender": "feminine",
        "vocabSet": 1
    },
    "murmullar": {
        "definitions": [
            "to mumble"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "susurrar": {
        "definitions": [
            "to whisper"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "balbucear": {
        "definitions": [
            "to babble"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "la caricia": {
        "definitions": [
            "the caress"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 1
    },
    "el masaje": {
        "definitions": [
            "the massage"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 1
    },
    "rozar": {
        "definitions": [
            "to brush against"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "tartamudear": {
        "definitions": [
            "to stutter"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "ladrar": {
        "definitions": [
            "to bark"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "el codazo": {
        "definitions": [
            "the nudge"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 1
    },
    "peludo": {
        "definitions": [
            "hairy"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 1
    },
    "mojado": {
        "definitions": [
            "wet"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 1
    },
    "pegajoso": {
        "definitions": [
            "sticky"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 1
    },
    "seco": {
        "definitions": [
            "dry"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 1
    },
    "liso": {
        "definitions": [
            "smooth"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 1
    },
    "golpear": {
        "definitions": [
            "to hit",
            "to strike"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "teclear": {
        "definitions": [
            "to type"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "palpar": {
        "definitions": [
            "to feel",
            "to grope"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "pegar": {
        "definitions": [
            "to stick"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "el moho": {
        "definitions": [
            "the mold"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 1
    },
    "hediondo": {
        "definitions": [
            "stinky"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 1
    },
    "podrido": {
        "definitions": [
            "rotten"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 1
    },
    "quemado": {
        "definitions": [
            "burnt"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 1
    },
    "apestar": {
        "definitions": [
            "to smell bad"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "el sabor": {
        "definitions": [
            "the flavor",
            "the taste"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 1
    },
    "agridulce": {
        "definitions": [
            "bittersweet"
        ],
        "partOfSpeech": "adjective",
        "vocabSet": 1
    },
    "amargo": {
        "definitions": [
            "bitter"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 1
    },
    "picante": {
        "definitions": [
            "spicy",
            "hot"
        ],
        "partOfSpeech": "adjective",
        "vocabSet": 1
    },
    "salado": {
        "definitions": [
            "salty"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 1
    },
    "aderezar": {
        "definitions": [
            "to season"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "probar": {
        "definitions": [
            "to try",
            "to test"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "saber": {
        "definitions": [
            "to know",
            "to taste"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 1
    },
    "cuadrado": {
        "definitions": [
            "square"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 2
    },
    "grueso": {
        "definitions": [
            "thick"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 2
    },
    "redondo": {
        "definitions": [
            "round",
            "circular"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 2
    },
    "de cuadros": {
        "definitions": [
            "checkered"
        ],
        "partOfSpeech": "adjective",
        "vocabSet": 2
    },
    "de rayas": {
        "definitions": [
            "striped"
        ],
        "partOfSpeech": "adjective",
        "vocabSet": 2
    },
    "blando": {
        "definitions": [
            "soft"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 2
    },
    "duro": {
        "definitions": [
            "hard"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 2
    },
    "el porrazo": {
        "definitions": [
            "the blow",
            "the hit",
            "the strike",
            "the punch"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 2
    },
    "a partir de": {
        "definitions": [
            "starting with"
        ],
        "vocabSet": 2
    },
    "encima de": {
        "definitions": [
            "on top of",
            "ontop of",
            "on top",
            "ontop"
        ],
        "vocabSet": 2
    },
    "detrás de": {
        "definitions": [
            "behind",
            "behind of"
        ],
        "vocabSet": 2
    },
    "callado": {
        "definitions": [
            "silent",
            "queit"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 2
    },
    "extrovertido": {
        "definitions": [
            "outgoing",
            "extroverted"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 2
    },
    "el recordimiento": {
        "definitions": [
            "the remorse"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 2
    },
    "fijarse": {
        "definitions": [
            "to pay attention",
            "to notice"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 2
    },
    "guardar": {
        "definitions": [
            "to put away",
            "to save",
            "to keep"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 2
    },
    "la presa": {
        "definitions": [
            "the prey"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 2
    },
    "quedarse": {
        "definitions": [
            "to stay",
            "to stay willingly"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 2
    },
    "quedar": {
        "definitions": [
            "to be left",
            "to remain",
            "to stay",
            "to stay unwillingly"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 2
    },
    "el fracaso": {
        "definitions": [
            "the failure"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 2
    },
    "elegir": {
        "definitions": [
            "to choose"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 2
    },
    "evitar": {
        "definitions": [
            "to avoid",
            "to prevent"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 2
    },
    "el riesgo": {
        "definitions": [
            "the risk"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 2
    },
    "parecer": {
        "definitions": [
            "to seem"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 2
    },
    "parecerse a": {
        "definitions": [
            "to look like",
            "to seem like"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 2
    },
    "óxido": {
        "definitions": [
            "rusty"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 3
    },
    "polvoriento": {
        "definitions": [
            "dusty"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 3
    },
    "el luto": {
        "definitions": [
            "the mourning"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 3
    },
    "el regazo": {
        "definitions": [
            "the lap"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 3
    },
    "abastecerse": {
        "definitions": [
            "to stock up"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 3
    },
    "atravesar": {
        "definitions": [
            "to cross",
            "to go across",
            "to traverse"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 3
    },
    "el sudor": {
        "definitions": [
            "the sweat",
            "the perspiration"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 3
    },
    "estrépito": {
        "definitions": [
            "loud noise",
            "abnoxious noise"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 3
    },
    "mirar fijamente": {
        "definitions": [
            "to stare"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 3
    },
    "la acera": {
        "definitions": [
            "the sidewalk"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 3
    },
    "la baldosa": {
        "definitions": [
            "the tile",
            "the floor tile"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 3
    },
    "agobiado": {
        "definitions": [
            "worn out",
            "overwhelmed"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 3
    },
    "el cura": {
        "definitions": [
            "the priest"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 3
    },
    "el sacerdote": {
        "definitions": [
            "the priest"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 3
    },
    "descalzo": {
        "definitions": [
            "barefoot",
            "barefooted"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 3
    },
    "a tientas": {
        "definitions": [
            "by feel",
            "blindly"
        ],
        "partOfSpeech": "phrase",
        "vocabSet": 3
    }
};
var currentWordObject;
var currentWord;
var wordCount = 0;
var wordList = [];
var vocabSetCount = 3; //Manually needs to be changed
var gametype = "definition"; //What the user needs to answer with (definition or word)

//Allows the user to choose from which set of Vocab Words to use
function chooseSet(setNumber) {
    for (let word in WORDS) {
        if (WORDS[word]["vocabSet"] == setNumber) {
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
        if (document.getElementById("gametypeSelect").value.split("")[1] === "Word") {
            gametype = "word";
        }

        //Sets document Element Visibilities
        document.getElementById("startButton").style.visibility = "hidden";
        for (let i in timerList) {
            timerList[i].style.visibility = "visible";
        }
        document.getElementById("gametypeLabel").style.visibility = "hidden";
        document.getElementById("gametypeSelect").style.visibility = "hidden";
        document.getElementById("questions").style.visibility = "visible";
        document.getElementById("input").style.visibility = "visible";
        document.getElementById("input").focus();
        document.getElementById("tips").style.visibility = "visible";
        for (let i = 1; i < vocabSetCount + 1; i++) {
            document.getElementById(`vocabList${i}Switch`).style.visibility = "hidden";
            document.getElementById(`vocabList${i}Label`).style.visibility = "hidden";
        }

        //Sets up questions and timer
        timerContinue();
        nextQuestion();
        
    }
}

//Sets Up the Next Question
function nextQuestion() {
    if (wordList.length === 0) {
        youWin();
    }
    else {
        if (gametype === "definition") {
            let currentIndex = randomNumber(0, (wordList.length - 1));
            currentWordObject = wordList[currentIndex];
            currentWord = Object.keys(currentWordObject)[0];
            wordList.splice(currentIndex, 1);
            document.getElementById("questions").innerHTML = currentWord;
            document.getElementById("input").value = "";
        }
        else if (gametype === "word") {
            //TODO: DO THIS
        }
    }
}

//Checks the Input for the Answer
function checkAnswer() {
    //Sets up variables for checking
    let input = document.getElementById("input").value

    //Checks if user wanted to quit
    if (input == "END") {
        currentWordObject = null;
        currentWord = null;
        wordList = [];
        nextQuestion();
    }

    //Checks for current gametype
    if (gametype === "word") {
        //TODO: DO THIS
    }
    else if (gametype === "definition") {
        let possibleAnswers = currentWordObject[currentWord]["definitions"];

        //Checks if user was right
        for (let i = 0; i < possibleAnswers.length; i++) {
            if (input.toLowerCase() == possibleAnswers[i].toLowerCase()) {
                score++;
                nextQuestion();
            }
        }
    }
}

//Displays Win Screen
function youWin() {
    //Visibility Options
    document.getElementById("input").style.visibility = "hidden";
    document.getElementById("retryButton").style.visibility = "visible";
    document.getElementById("tips").style.visibility = "hidden";

    //Stops Timer
    stopTimer()

    //Checks  and displays whether the user won or lost
    if (score == wordCount) {
        document.getElementById("questions").innerHTML = `YOU WIN! (${score} / ${wordCount})`;
        document.body.style.background = "green";
        document.getElementById("retryButton").style.backgroundColor = "lightgreen";
    }
    else {
        document.getElementById("questions").innerHTML = `YOU LOSE! (${score} / ${wordCount})`;
        document.body.style.background = "red";
        document.getElementById("retryButton").style.backgroundColor = "crimson";
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