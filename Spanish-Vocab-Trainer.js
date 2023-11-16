//Gregory Ecklund
//August 2022

//Variable Declarations
const timerList = [document.getElementById("minutesLabel"), document.getElementById("minutes"), document.getElementById("seconds"), document.getElementById("secondsLabel")];
var score = 0;
var WORDS = {
    "la vista": {
        "definitions": [
            "the view",
            "the sight"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            1
        ]
    },
    "el oído": {
        "definitions": [
            "the ear"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "el tacto": {
        "definitions": [
            "the touch"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "el olfato": {
        "definitions": [
            "the smell"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "el gusto": {
        "definitions": [
            "the taste"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "el brillo": {
        "definitions": [
            "the shine",
            "the brightness"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "la sombra": {
        "definitions": [
            "the shadow",
            "the shade"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            1
        ]
    },
    "arrugado": {
        "definitions": [
            "wrinkled"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "pálido": {
        "definitions": [
            "pale"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "acechar": {
        "definitions": [
            "to stalk"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "presenciar": {
        "definitions": [
            "to witness"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "la carcajada": {
        "definitions": [
            "the loud laugh"
        ],
        "partOfSpeech": "adjective",
        "gender": "feminine",
        "vocabSets": [
            1
        ]
    },
    "murmullar": {
        "definitions": [
            "to mumble"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "susurrar": {
        "definitions": [
            "to whisper"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "balbucear": {
        "definitions": [
            "to babble"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "la caricia": {
        "definitions": [
            "the caress"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            1
        ]
    },
    "el masaje": {
        "definitions": [
            "the massage"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "rozar": {
        "definitions": [
            "to brush against"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "tartamudear": {
        "definitions": [
            "to stutter"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "ladrar": {
        "definitions": [
            "to bark"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "el codazo": {
        "definitions": [
            "the nudge"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "peludo": {
        "definitions": [
            "hairy"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "mojado": {
        "definitions": [
            "wet"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "pegajoso": {
        "definitions": [
            "sticky"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "seco": {
        "definitions": [
            "dry"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "liso": {
        "definitions": [
            "smooth"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "golpear": {
        "definitions": [
            "to hit",
            "to strike"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "teclear": {
        "definitions": [
            "to type"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "palpar": {
        "definitions": [
            "to feel",
            "to grope"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "pegar": {
        "definitions": [
            "to stick"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "el moho": {
        "definitions": [
            "the mold"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "hediondo": {
        "definitions": [
            "stinky"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "podrido": {
        "definitions": [
            "rotten"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "quemado": {
        "definitions": [
            "burnt"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "apestar": {
        "definitions": [
            "to smell bad"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "el sabor": {
        "definitions": [
            "the flavor",
            "the taste"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "agridulce": {
        "definitions": [
            "bittersweet"
        ],
        "partOfSpeech": "adjective",
        "vocabSets": [
            1
        ]
    },
    "amargo": {
        "definitions": [
            "bitter"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "picante": {
        "definitions": [
            "spicy",
            "hot"
        ],
        "partOfSpeech": "adjective",
        "vocabSets": [
            1
        ]
    },
    "salado": {
        "definitions": [
            "salty"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            1
        ]
    },
    "aderezar": {
        "definitions": [
            "to season"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "probar": {
        "definitions": [
            "to try",
            "to test"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "saber": {
        "definitions": [
            "to know",
            "to taste"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            1
        ]
    },
    "cuadrado": {
        "definitions": [
            "square"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            2
        ]
    },
    "grueso": {
        "definitions": [
            "thick"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            2
        ]
    },
    "redondo": {
        "definitions": [
            "round",
            "circular"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            2
        ]
    },
    "de cuadros": {
        "definitions": [
            "checkered"
        ],
        "partOfSpeech": "adjective",
        "vocabSets": [
            2
        ]
    },
    "de rayas": {
        "definitions": [
            "striped"
        ],
        "partOfSpeech": "adjective",
        "vocabSets": [
            2
        ]
    },
    "blando": {
        "definitions": [
            "soft"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            2
        ]
    },
    "duro": {
        "definitions": [
            "hard"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            2
        ]
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
        "vocabSets": [
            2
        ]
    },
    "a partir de": {
        "definitions": [
            "starting with"
        ],
        "vocabSets": [
            2
        ]
    },
    "encima de": {
        "definitions": [
            "on top of",
            "ontop of",
            "on top",
            "ontop"
        ],
        "vocabSets": [
            2
        ]
    },
    "detrás de": {
        "definitions": [
            "behind",
            "behind of"
        ],
        "vocabSets": [
            2
        ]
    },
    "callado": {
        "definitions": [
            "silent",
            "quiet"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            2
        ]
    },
    "extrovertido": {
        "definitions": [
            "outgoing",
            "extroverted"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            2
        ]
    },
    "el recordimiento": {
        "definitions": [
            "the remorse"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            2
        ]
    },
    "fijarse": {
        "definitions": [
            "to pay attention",
            "to notice"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            2
        ]
    },
    "guardar": {
        "definitions": [
            "to put away",
            "to save",
            "to keep"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            2
        ]
    },
    "la presa": {
        "definitions": [
            "the prey"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            2
        ]
    },
    "quedarse": {
        "definitions": [
            "to stay",
            "to stay willingly"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            2
        ]
    },
    "quedar": {
        "definitions": [
            "to be left",
            "to remain",
            "to stay",
            "to stay unwillingly"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            2
        ]
    },
    "el fracaso": {
        "definitions": [
            "the failure"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            2
        ]
    },
    "elegir": {
        "definitions": [
            "to choose"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            2
        ]
    },
    "evitar": {
        "definitions": [
            "to avoid",
            "to prevent"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            2
        ]
    },
    "el riesgo": {
        "definitions": [
            "the risk"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            2
        ]
    },
    "parecer": {
        "definitions": [
            "to seem"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            2
        ]
    },
    "parecerse a": {
        "definitions": [
            "to look like",
            "to seem like"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            2
        ]
    },
    "óxido": {
        "definitions": [
            "rusty"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            3
        ]
    },
    "polvoriento": {
        "definitions": [
            "dusty"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            3
        ]
    },
    "el luto": {
        "definitions": [
            "the mourning"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            3
        ]
    },
    "el regazo": {
        "definitions": [
            "the lap"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            3
        ]
    },
    "abastecerse": {
        "definitions": [
            "to stock up"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            3
        ]
    },
    "atravesar": {
        "definitions": [
            "to cross",
            "to go across",
            "to traverse"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            3
        ]
    },
    "el sudor": {
        "definitions": [
            "the sweat",
            "the perspiration"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            3
        ]
    },
    "el estrépito": {
        "definitions": [
            "the loud noise",
            "the abnoxious noise"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            3
        ]
    },
    "mirar fijamente": {
        "definitions": [
            "to stare"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            3
        ]
    },
    "la acera": {
        "definitions": [
            "the sidewalk"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            3
        ]
    },
    "la baldosa": {
        "definitions": [
            "the tile",
            "the floor tile"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            3
        ]
    },
    "agobiado": {
        "definitions": [
            "worn out",
            "overwhelmed"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            3
        ]
    },
    "el cura": {
        "definitions": [
            "the priest"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            3
        ]
    },
    "el sacerdote": {
        "definitions": [
            "the priest"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            3
        ]
    },
    "descalzo": {
        "definitions": [
            "barefoot",
            "barefooted"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            3
        ]
    },
    "a tientas": {
        "definitions": [
            "by feel",
            "blindly"
        ],
        "partOfSpeech": "phrase",
        "vocabSets": [
            3
        ]
    },
    "la cualidad": {
        "definitions": [
            "the quality",
            "the quality (attribute, characteristic, virtue)"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            4
        ]
    },
    "la calidad": {
        "definitions": [
            "the quality",
            "the quality (good or bad)"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            4
        ]
    },
    "darse cuenta de": {
        "definitions": [
            "to realize",
            "to become aware of"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "realizar": {
        "definitions": [
            "to realize",
            "to make real"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "surgir": {
        "definitions": [
            "to surge",
            "to come up",
            "to arise"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "suceder": {
        "definitions": [
            "to happen"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "tener éxito": {
        "definitions": [
            "to succeed",
            "to have success"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "asistir a": {
        "definitions": [
            "to attend"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "atender": {
        "definitions": [
            "to assist",
            "to attend to",
            "to wait on"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "aún": {
        "definitions": [
            "still"
        ],
        "partOfSpeech": "adverb",
        "vocabSets": [
            4
        ]
    },
    "quieto": {
        "definitions": [
            "still"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            4
        ]
    },
    "ya": {
        "definitions": [
            "already"
        ],
        "partOfSpeech": "adverb",
        "vocabSets": [
            4
        ]
    },
    "el cuento": {
        "definitions": [
            "the story"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            4
        ]
    },
    "la cuenta": {
        "definitions": [
            "the check"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            4
        ]
    },
    "asumir": {
        "definitions": [
            "to take on"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "suponer": {
        "definitions": [
            "to assume",
            "to suppose"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "actualmente": {
        "definitions": [
            "currently"
        ],
        "partOfSpeech": "adverb",
        "vocabSets": [
            4
        ]
    },
    "en realidad": {
        "definitions": [
            "actually",
            "in reality"
        ],
        "partOfSpeech": "phrase",
        "vocabSets": [
            4
        ]
    },
    "pedir": {
        "definitions": [
            "to ask for"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "preguntar": {
        "definitions": [
            "to ask"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "preguntar por": {
        "definitions": [
            "to ask about"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "pensar en": {
        "definitions": [
            "to think about"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "pensar de": {
        "definitions": [
            "to think of"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "pensar + INF": {
        "definitions": [
            "to plan on doing something"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            4
        ]
    },
    "extraer": {
        "definitions": [
            "to extract",
            "to pull out",
            "to take out"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            5
        ]
    },
    "aterrizar": {
        "definitions": [
            "to land",
            "to touch down"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            5
        ]
    },
    "hacer cola": {
        "definitions": [
            "to get in line",
            "to line up"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            5
        ]
    },
    "los escombros": {
        "definitions": [
            "the debris",
            "the rubble"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            5
        ]
    },
    "quejarse": {
        "definitions": [
            "to complain",
            "to whine"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            5
        ]
    },
    "la vivienda": {
        "definitions": [
            "the house",
            "the home",
            "the housing"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            5
        ]
    },
    "agotarse": {
        "definitions": [
            "to tire oneself out",
            "to get exhausted",
            "to wear oneself out"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            5
        ]
    },
    "deambular": {
        "definitions": [
            "to wander",
            "to roam"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            5
        ]
    },
    "la bocina": {
        "definitions": [
            "the horn",
            "the siren",
            "the car horn"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            5
        ]
    },
    "el toque de queda": {
        "definitions": [
            "the curfew"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            5
        ]
    },
    "el maleante": {
        "definitions": [
            "the criminal",
            "the crook"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            5
        ]
    },
    "la mezquindad": {
        "definitions": [
            "the meanness",
            "the stinginess"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            5
        ]
    },
    "asombroso": {
        "definitions": [
            "amazing",
            "astonishing"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            5
        ]
    },
    "el empresario": {
        "definitions": [
            "the businessman"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            5
        ]
    },
    "la empresaria": {
        "definitions": [
            "the businesswoman"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            5
        ]
    },
    "la sequía": {
        "definitions": [
            "the drought"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            5
        ]
    },
    "el augurio": {
        "definitions": [
            "the omen",
            "the sign",
            "the prediction"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            5
        ]
    },
    "el alumno": {
        "definitions": [
            "the student"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            6
        ]
    },
    "charlar": {
        "definitions": [
            "to chat",
            "to talk"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            6
        ]
    },
    "aislado": {
        "definitions": [
            "isolated"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            6
        ]
    },
    "el recreo": {
        "definitions": [
            "the recess",
            "the playtime",
            "the break"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            6
        ]
    },
    "la pertenencia": {
        "definitions": [
            "the ownership",
            "the belonging",
            "the membership"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            6
        ]
    },
    "el acoso": {
        "definitions": [
            "the harassment",
            "the bullying"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            6
        ]
    },
    "la aula": {
        "definitions": [
            "the classroom"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            6
        ]
    },
    "la pauta": {
        "definitions": [
            "the norm",
            "the standard",
            "the guidelines"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            6
        ]
    },
    "advertir": {
        "definitions": [
            "to warn",
            "to advise",
            "to forewarn"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            6
        ]
    },
    "datos": {
        "definitions": [
            "data"
        ],
        "partOfSpeech": "noun",
        "gender": "N/A",
        "vocabSets": [
            6
        ]
    },
    "el rendimiento": {
        "definitions": [
            "the performance",
            "the yield"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            6
        ]
    },
    "medir": {
        "definitions": [
            "to measure"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            6
        ]
    },
    "la herramienta": {
        "definitions": [
            "the tool"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            6
        ]
    },
    "ajeno": {
        "definitions": [
            "foreign",
            "unaffiliated",
            "other people's"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            6
        ]
    },
    "el taller": {
        "definitions": [
            "the workshop"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            6
        ]
    },
    "primero": {
        "definitions": [
            "first"
        ],
        "partOfSpeech": "ordinal number",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "segundo": {
        "definitions": [
            "second"
        ],
        "partOfSpeech": "ordinal number",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "tercero": {
        "definitions": [
            "third"
        ],
        "partOfSpeech": "ordinal number",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "cuarto": {
        "definitions": [
            "fourth"
        ],
        "partOfSpeech": "ordinal number",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "quinto": {
        "definitions": [
            "fifth"
        ],
        "partOfSpeech": "ordinal number",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "sexto": {
        "definitions": [
            "sixth"
        ],
        "partOfSpeech": "ordinal number",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "séptimo": {
        "definitions": [
            "seventh"
        ],
        "partOfSpeech": "ordinal number",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "octavo": {
        "definitions": [
            "eighth"
        ],
        "partOfSpeech": "ordinal number",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "noveno": {
        "definitions": [
            "ninth"
        ],
        "partOfSpeech": "ordinal number",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "décimo": {
        "definitions": [
            "tenth"
        ],
        "partOfSpeech": "ordinal number",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "peinar": {
        "definitions": [
            "to style",
            "to comb"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            7
        ]
    },
    "el peinado": {
        "definitions": [
            "the hairstyle",
            "the hairdo"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "fregar": {
        "definitions": [
            "to wash",
            "to scrub",
            "to mop"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            7
        ]
    },
    "el fregadero": {
        "definitions": [
            "the sink"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "fresco": {
        "definitions": [
            "fresh"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "la frescura": {
        "definitions": [
            "the freshness"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            7
        ]
    },
    "la redoundez": {
        "definitions": [
            "the roundness"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "exquisito": {
        "definitions": [
            "exquisite",
            "delicious",
            "tasty",
            "exquisite"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "la exquisitez": {
        "definitions": [
            "the exquisiteness",
            "the delicacy"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            7
        ]
    },
    "el refrán": {
        "definitions": [
            "the saying",
            "the proverb"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "la avispa": {
        "definitions": [
            "the wasp"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            7
        ]
    },
    "la venda": {
        "definitions": [
            "the bandage",
            "the blindfold"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            7
        ]
    },
    "eludir": {
        "definitions": [
            "to elude",
            "to avoid",
            "to evade",
            "to escape"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            7
        ]
    },
    "por una parte": {
        "definitions": [
            "on the one hand"
        ],
        "partOfSpeech": "phrase",
        "vocabSets": [
            7
        ]
    },
    "por otra parte": {
        "definitions": [
            "on the other hand",
            "moreover"
        ],
        "partOfSpeech": "phrase",
        "vocabSets": [
            7
        ]
    },
    "la venta": {
        "definitions": [
            "the sale"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            7
        ]
    },
    "el ganado": {
        "definitions": [
            "the livestock",
            "the herd"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "el ganadero": {
        "definitions": [
            "the rancher"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "lento": {
        "definitions": [
            "slow"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "la lentitud": {
        "definitions": [
            "the slowness"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            7
        ]
    },
    "el anochecer": {
        "definitions": [
            "the dusk",
            "the nightfall"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "el atardecer": {
        "definitions": [
            "the evening",
            "the sunset"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "el amanecer": {
        "definitions": [
            "the dawn",
            "the daybreak",
            "the sunrise"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            7
        ]
    },
    "el ámbito": {
        "definitions": [
            "the field",
            "the sphere",
            "the area",
            "the realm"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            8
        ]
    },
    "abarcar": {
        "definitions": [
            "to cover",
            "to extend over",
            "to encompass"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            8
        ]
    },
    "la médula": {
        "definitions": [
            "the marrow",
            "the bone marrow"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            8
        ]
    },
    "el miasma": {
        "definitions": [
            "the miasma",
            "the bad smell"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            8
        ]
    },
    "la frontera": {
        "definitions": [
            "the frontier",
            "the border"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            8
        ]
    },
    "arrastrar": {
        "definitions": [
            "to drag"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            8
        ]
    },
    "atraverse": {
        "definitions": [
            "to dare"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            8
        ]
    },
    "frenar": {
        "definitions": [
            "to brake"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            8
        ]
    },
    "el disparate": {
        "definitions": [
            "the silly thing",
            "the folly",
            "the nonsense",
            "the goofy thing"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            8
        ]
    },
    "la calumnia": {
        "definitions": [
            "the slander",
            "the libel"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            8
        ]
    },
    "amparar": {
        "definitions": [
            "to help",
            "to protect"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            8
        ]
    },
    "osar": {
        "definitions": [
            "to dare"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            8
        ]
    },
    "la osadía": {
        "definitions": [
            "the daring thing",
            "the boldness",
            "the audacity"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            8
        ]
    },
    "derrotar": {
        "definitions": [
            "to defeat"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            8
        ]
    },
    "promover": {
        "definitions": [
            "to promote"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            8
        ]
    },
    "reemplazar": {
        "definitions": [
            "to replace"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            8
        ]
    },
    "la hazaña": {
        "definitions": [
            "the feat",
            "the accomplishment"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            8
        ]
    },
    "soler": {
        "definitions": [
            "to usually do",
            "to be accustomed to",
            "to be in the habit of"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            8
        ]
    },
    "la grosería": {
        "definitions": [
            "the swearword",
            "the swear"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            9
        ]
    },
    "la tienda": {
        "definitions": [
            "the store",
            "the shop"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            9
        ]
    },
    "la bodega": {
        "definitions": [
            "the winery",
            "the wine cellar"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            9
        ]
    },
    "el abogado": {
        "definitions": [
            "the lawyer",
            "the attorney"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "el aguacate": {
        "definitions": [
            "the avocado"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "la lectura": {
        "definitions": [
            "the reading"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            9
        ]
    },
    "la charla": {
        "definitions": [
            "the chat"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            9
        ]
    },
    "la ponencia": {
        "definitions": [
            "the paper",
            "the presentation"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            9
        ]
    },
    "fastidioso": {
        "definitions": [
            "annoying",
            "tiresome",
            "tedious"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "escrupuloso": {
        "definitions": [
            "scrupulous",
            "fussy",
            "particular"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "gratuito": {
        "definitions": [
            "gratuitous",
            "free",
            "unjustified"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "la propina": {
        "definitions": [
            "the tip",
            "the gratuity"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            9
        ]
    },
    "sensible": {
        "definitions": [
            "sensitive (emotional)",
            "sensitive (perceptive)",
            "sensitive"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "sensato": {
        "definitions": [
            "sensitive (prudent",
            "sensitive"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "simpático": {
        "definitions": [
            "nice",
            "likeable",
            "kind",
            "friendly"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "compasivo": {
        "definitions": [
            "compassionate",
            "sympathetic"
        ],
        "partOfSpeech": "adjective",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "contestar": {
        "definitions": [
            "to answer",
            "to reply to"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            9
        ]
    },
    "disputar": {
        "definitions": [
            "to dispute",
            "to discuss",
            "to contest"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            9
        ]
    },
    "molestar": {
        "definitions": [
            "to bother",
            "to annoy"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            9
        ]
    },
    "agredir": {
        "definitions": [
            "to attack",
            "to insult",
            "to assault"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            9
        ]
    },
    "abusar": {
        "definitions": [
            "to abuse",
            "to take advantage of"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            9
        ]
    },
    "quitar": {
        "definitions": [
            "to remove",
            "to take away",
            "to take off"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            9
        ]
    },
    "renunciar": {
        "definitions": [
            "to quit",
            "to resign"
        ],
        "partOfSpeech": "verb",
        "vocabSets": [
            9
        ]
    },
    "de hecho": {
        "definitions": [
            "actually",
            "in fact",
            "as a matter of fact"
        ],
        "partOfSpeech": "phrase",
        "vocabSets": [
            9
        ]
    },
    "últimamente": {
        "definitions": [
            "lately",
            "recently"
        ],
        "partOfSpeech": "adverb",
        "vocabSets": [
            9
        ]
    },
    "finalmente": {
        "definitions": [
            "finally",
            "in the end"
        ],
        "partOfSpeech": "adverb",
        "vocabSets": [
            9
        ]
    },
    "el champiñón": {
        "definitions": [
            "the mushroom"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "el campeón": {
        "definitions": [
            "the champion"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "la fábrica": {
        "definitions": [
            "the factory",
            "the mill"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            9
        ]
    },
    "la tela": {
        "definitions": [
            "the fabric",
            "the cloth",
            "the material"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            9
        ]
    },
    "la librería": {
        "definitions": [
            "the bookstore",
            "the bookshop"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            9
        ]
    },
    "la biblioteca": {
        "definitions": [
            "the library"
        ],
        "partOfSpeech": "noun",
        "gender": "feminine",
        "vocabSets": [
            9
        ]
    },
    "el pariente": {
        "definitions": [
            "the relative"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "el padre": {
        "definitions": [
            "the father",
            "the parent"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "el resto": {
        "definitions": [
            "the remainder",
            "the rest"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "el descanso": {
        "definitions": [
            "the rest",
            "the break",
            "the relief"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "el suceso": {
        "definitions": [
            "the event",
            "the incident",
            "the crime"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    },
    "el éxito": {
        "definitions": [
            "the success"
        ],
        "partOfSpeech": "noun",
        "gender": "masculine",
        "vocabSets": [
            9
        ]
    }
};
var currentWordObject;
var currentWord;
var wordCount = 0;
var wordList = [];
var vocabSetCount = 9; //Manually needs to be changed
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
