let keys = document.querySelectorAll(".key");

let back_btn = document.getElementById("back-key");

let kb_key = document.getElementsByClassName("key");
let score_txt = document.getElementById("score");

let space_btn = document.getElementById("space-key");
let restart_btn = document.getElementById("restart-btn");

let textIn = document.getElementById("input-box");
let wrong_txt = document.getElementById("wrong");



document.addEventListener("keydown", function (e) {
    let kCode = e.code;
    let temp = [];
    let time = 15;
    gameStart = true;
    gameTurns++;
    if (gameStart == true && gameTurns == 1) {
        if (gameTurns == 1) {
            let timeLeft = setInterval(function () {
                if (time <= 0) {
                    restart_btn.style.visibility = "visible";
                    textIn.disabled = true;
                    gameTurns = 0;
                    clearInterval(timeLeft);
                }
                document.getElementById("timer").innerHTML = time;
                time--;
            }, 1000);
        }
    }


    if (kCode == "Backspace" && kCode != "undefined") {
        chars.pop();
    } else if (kCode == "Space" && kCode != "undefined") {
        gameRun();
    } else if (kCode != "undefined") {
        temp = kCode.split("Key");
        temp.shift();
        let txtIn = temp.map(ele => ele.toLocaleLowerCase());
        chars.push(txtIn[0]);
        console.log(chars);
    }

    switch (kCode) {
        case "Backspace":
            break;
        case "Space":
            console.log("space");
            break;
        case "KeyA":
            keyPressed = "A-key";
            console.log("a");
            break;
        case "KeyB":
            console.log("b");
            break;
        case "KeyC":
            console.log("c");
            break;
        case "KeyD":
            console.log("d");
            break;
        case "KeyE":
            console.log("e");
            break;
        case "KeyF":
            console.log("f");
            break;
        case "KeyG":
            console.log("g");
            break;
        case "KeyH":
            console.log("h");
            break;
        case "KeyI":
            console.log("i");
            break;
        case "KeyJ":
            console.log("j");
            break;
        case "KeyK":
            console.log("k");
            break;
        case "KeyL":
            console.log("l");
            break;
        case "KeyM":
            console.log("m");
            break;
        case "KeyN":
            console.log("n");
            break;
        case "KeyO":
            console.log("o");
            break;
        case "KeyP":
            console.log("p");
            break;
        case "KeyQ":
            console.log("q");
            break;
        case "KeyR":
            console.log("r");
            break;
        case "KeyS":
            console.log("s");
            break;
        case "KeyT":
            console.log("t");
            break;
        case "KeyU":
            console.log("u");
            break;
        case "KeyV":
            console.log("v");
            break;
        case "KeyW":
            console.log("w");
            break;
        case "KeyX":
            console.log("x");
            break;
        case "KeyY":
            console.log("y");
            break;
        case "KeyZ":
            console.log("z");
            break;
    };
});
back_btn.addEventListener("click", function () {
    chars.pop();
    textIn.value = chars.join('');
});

space_btn.addEventListener("click", function () {
    chars.push(' ');
    textIn.value = chars.join('');
    gameRun();
});

let keyPressed = "";
let chars = [];
let keyWord = ["earthquake",
    "ecology",
    "environment",
    "famine",
    "enhaust",
    "biodiversity",
    "climate",
    "destruction",
    "feelings",
    "deforestation",
    "fertilizer",
    "fertilizer",
    "soft",
    "toxic ",
    "space",
    "test",
    "admit",
    "addition",
    "tape",
    "shirt",
    "laptop",
    "cable",
    "phone",
    "helicopter",
    "external",
    "wallpaper",
    "keyboard",
    "motorbike",
    "car",
    "ship",
    "bottle",
    "learn",
    "dictionary",
    "call",
    "dog",
    "cat",
    "mouse",
    "bed",
    "stand",
    "sit",
    "lie",
    "guitar",
    "piano",
    "violin",
    "football",
    "responsibility",
    "badminton",
    "swim",
    "picture",
    "nuclear",
    "letter",
    "sign",
    "color",
    "category",
    "indentify"];
let word = keyWord[Math.floor(Math.random() * keyWord.length)];
document.getElementById("word-tab").innerHTML = word;
let score = 0;
let wrong = 0;
let gameStart = true;
let gameTurns = 0;
restart_btn.style.visibility = "hidden";
textIn.value = "";

function gameRun() {
    let usrIn = chars.join('');

    if (usrIn === word) {
        score+=100;
        textIn.value = "";
        chars = [];
        score_txt.innerHTML = score;
        word = keyWord[Math.floor(Math.random() * keyWord.length)];
        document.getElementById("word-tab").innerHTML = word;
    } else {
        wrong++;
        textIn.value = "";
        chars = [];
        wrong_txt.innerHTML = wrong;
        word = keyWord[Math.floor(Math.random() * keyWord.length)];
        document.getElementById("word-tab").innerHTML = word;
    }
}
keys.forEach(btn => {
    btn.addEventListener("click", function () {
        textIn.value += (btn.innerText).toLowerCase();
        chars = textIn.value.split('');
    })
});
restart_btn.addEventListener("click", gameEnd);


function gameEnd() {
    score = 0;
    wrong = 0;
    score_txt.innerHTML = 0;
    wrong_txt.innerHTML = 0;
    textIn.value = "";
    chars = [];
    gameStart = 0;
    word = keyWord[Math.floor(Math.random() * keyWord.length)];
    document.getElementById("timer").innerHTML = 15;
    document.getElementById("word-tab").innerHTML = word;
    textIn.disabled = false;
    restart_btn.style.visibility = "hidden";
}