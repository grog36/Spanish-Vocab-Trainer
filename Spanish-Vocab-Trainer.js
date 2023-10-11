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
            "quiet"
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
    "el estrépito": {
        "definitions": [
            "the loud noise",
            "the abnoxious noise"
        ],
        "partOfSpeech": "noun",
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
    },
    "la cualidad": {
        "definitions": [
            "the quality",
            "the quality (attribute, characteristic, virtue)"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 4
    },
    "la calidad": {
        "definitions": [
            "the quality",
            "the quality (good or bad)"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 4
    },
    "darse cuenta de": {
        "definitions": [
            "to realize",
            "to become aware of"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "realizar": {
        "definitions": [
            "to realize",
            "to make real"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "surgir": {
        "definitions": [
            "to surge",
            "to come up",
            "to arise"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "suceder": {
        "definitions": [
            "to happen"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "tener éxito": {
        "definitions": [
            "to succeed",
            "to have success"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "asistir a": {
        "definitions": [
            "to attend"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "atender": {
        "definitions": [
            "to assist",
            "to attend to",
            "to wait on"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "aún": {
        "definitions": [
            "still"
        ],
        "partOfSpeech": "adverb",
        "vocabSet": 4
    },
    "quieto": {
        "definitions": [
            "still"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 4
    },
    "ya": {
        "definitions": [
            "already"
        ],
        "partOfSpeech": "adverb",
        "vocabSet": 4
    },
    "el cuento": {
        "definitions": [
            "the story"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 4
    },
    "la cuenta": {
        "definitions": [
            "the check"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 4
    },
    "asumir": {
        "definitions": [
            "to take on"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "suponer": {
        "definitions": [
            "to assume",
            "to suppose"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "actualmente": {
        "definitions": [
            "currently"
        ],
        "partOfSpeech": "adverb",
        "vocabSet": 4
    },
    "en realidad": {
        "definitions": [
            "actually",
            "in reality"
        ],
        "partOfSpeech": "phrase",
        "vocabSet": 4
    },
    "pedir": {
        "definitions": [
            "to ask for"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "preguntar": {
        "definitions": [
            "to ask"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "preguntar por": {
        "definitions": [
            "to ask about"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "pensar en": {
        "definitions": [
            "to think about"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "pensar de": {
        "definitions": [
            "to think of"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "pensar + INF": {
        "definitions": [
            "to plan on doing something"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 4
    },
    "extraer": {
        "definitions": [
            "to extract",
            "to pull out",
            "to take out"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 5
    },
    "aterrizar": {
        "definitions": [
            "to land",
            "to touch down"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 5
    },
    "hacer cola": {
        "definitions": [
            "to get in line",
            "to line up"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 5
    },
    "los escombros": {
        "definitions": [
            "the debris",
            "the rubble"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 5
    },
    "quejarse": {
        "definitions": [
            "to complain",
            "to whine"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 5
    },
    "la vivienda": {
        "definitions": [
            "the house",
            "the home",
            "the housing"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 5
    },
    "agotarse": {
        "definitions": [
            "to tire oneself out",
            "to get exhausted",
            "to wear oneself out"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 5
    },
    "deambular": {
        "definitions": [
            "to wander",
            "to roam"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 5
    },
    "la bocina": {
        "definitions": [
            "the horn",
            "the siren",
            "the car horn"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 5
    },
    "el toque de queda": {
        "definitions": [
            "the curfew"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 5
    },
    "el/la maleante": {
        "definitions": [
            "the criminal",
            "the crook"
        ],
        "partOfSpeech": "noun",
        "gender": "both",
        "vocabSet": 5
    },
    "la mezquindad": {
        "definitions": [
            "the meanness",
            "the stinginess"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 5
    },
    "asombroso": {
        "definitions": [
            "amazing",
            "astonishing"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 5
    },
    "el empresario": {
        "definitions": [
            "the businessman"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 5
    },
    "la empresaria": {
        "definitions": [
            "the businesswoman"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 5
    },
    "la sequía": {
        "definitions": [
            "the drought"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 5
    },
    "el augurio": {
        "definitions": [
            "the omen",
            "the sign",
            "the prediction"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 5
    },
    "el alumno": {
        "definitions": [
            "the student"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 6
    },
    "charlar": {
        "definitions": [
            "to chat",
            "to talk"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 6
    },
    "aislado": {
        "definitions": [
            "isolated"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 6
    },
    "el recreo": {
        "definitions": [
            "the recess",
            "the playtime",
            "the break"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 6
    },
    "la pertenencia": {
        "definitions": [
            "the ownership",
            "the belonging",
            "the membership"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 6
    },
    "el acoso": {
        "definitions": [
            "the harassment",
            "the bullying"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 6
    },
    "la aula": {
        "definitions": [
            "the classroom"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 6
    },
    "la pauta": {
        "definitions": [
            "the norm",
            "the standard",
            "the guidelines"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 6
    },
    "advertir": {
        "definitions": [
            "to warn",
            "to advise",
            "to forewarn"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 6
    },
    "datos": {
        "definitions": [
            "data"
        ],
        "partOfSpeech": "noun",
        "gender": "N/A",
        "vocabSet": 6
    },
    "el rendimiento": {
        "definitions": [
            "the performance",
            "the yield"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 6
    },
    "medir": {
        "definitions": [
            "to measure"
        ],
        "partOfSpeech": "verb",
        "vocabSet": 6
    },
    "la herramienta": {
        "definitions": [
            "the tool"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSet": 6
    },
    "ajeno": {
        "definitions": [
            "foreign",
            "unaffiliated",
            "other people's"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSet": 6
    },
    "el taller": {
        "definitions": [
            "the workshop"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSet": 6
    }
};
var currentWordObject;
var currentWord;
var wordCount = 0;
var wordList = [];
var vocabSetCount = 6; //Manually needs to be changed
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
        if (document.getElementById("gametypeSelect").value.split(" ")[1] === "Word") {
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
            if (currentWordObject[currentWord]["partOfSpeech"] === "adjective") {
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
