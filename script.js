// Selecting button with class kit
let btn = document.querySelectorAll(".kit");

// Iterating through button with class kit 
for (let i = 0; i < btn.length; i++) {
    document.querySelectorAll(".kit")[i].addEventListener("click", handlerClick);

    //EventListener for Mouse click
    function handlerClick(){
        let btnValue = this.innerHTML;
        makeDrumSound(btnValue);
        makeTrumpletSound(btnValue);
        makeFluteSound(btnValue);
        buttonAnimation(btnValue);

    }
}
//EventListener for Keyboard press
document.addEventListener("keypress", function(e) {
    makeDrumSound(e.key);
    makeTrumpletSound(e.key);
    makeFluteSound(e.key);
    buttonAnimation(e.key);
});

//Drum sounds
function makeDrumSound(key) {
    switch(key) {
        case "q":
            const tom1 = new Audio("assets/band/tom-1.mp3");
            tom1.play();
            break;
        case "w":
            const tom2 = new Audio("assets/band/tom-2.mp3");
            tom2.play();
            break;
        case "e":
            const tom3 = new Audio("assets/band/tom-3.mp3");
            tom3.play();
            break;
        case "r":
            const tom4 = new Audio("assets/band/tom-4.mp3");
            tom4.play();
            break;
        case "t":
            const snare = new Audio("assets/band/snare.mp3");
            snare.play();
            break;
        case "y":
            const crash = new Audio("assets/band/crash.mp3");
            crash.play();
            break;
        case "u":
            const kick = new Audio("assets/band/kick-bass.mp3");
            kick.play();
            break;

        // default: console.log(btnValue);
    }
}

//Trumple Sounds
function makeTrumpletSound(key){
    switch(key){
        case "a":
            const fail = new Audio("assets/trumplet/fail-144746.mp3");
            fail.play();
            break;
        case "s":
            const fanfare = new Audio("assets/trumplet/fanfare-46385.mp3");
            fanfare.play();
            break;
        case "d":
            const tada = new Audio("assets/trumplet/tada-fanfare-a-6313.mp3");
            tada.play();
            break;
        case "f":
            const horn = new Audio("assets/trumplet/horn-toy-claun-like-sound-1-94986.mp3");
            horn.play();
            break;
        case "g":
            const success = new Audio("assets/trumplet/success-fanfare-trumpets-6185.mp3");
            success.play();
            break;
        case "h":
            const horse = new Audio("assets/trumplet/trumpet-horse-whinney-38590.mp3");
            horse.play();
            break;
        case "j":
            const funny = new Audio("assets/trumplet/medieval-fanfare-6826.mp3");
            funny.play();
            break;
    }
}

//Flute Sounds
function makeFluteSound(key){
    switch(key){
        case "z":
            const cinematic = new Audio("assets/flute/mixkit-cinematic-tribal-flute-2306.wav");
            cinematic.play();
            break;
        case "x":
            const alert = new Audio("assets/flute/mixkit-flute-alert-2307.wav");
            alert.play();
            break;
        case "c":
            const cellPhone =  new Audio("assets/flute/mixkit-flute-cell-phone-alert-2315.wav");
            cellPhone.play();
            break;
        case "v":
            const toyWhistle = new Audio("assets/flute/mixkit-flute-toy-whistle-2812.wav");
            toyWhistle.play();
            break;
        case "b":
            const game = new Audio("assets/flute/mixkit-game-flute-bonus-2313.wav");
            game.play();
            break;
        case "n":
            const musicalAlert = new Audio("assets/flute/mixkit-musical-flute-alert-2308.wav");
            musicalAlert.play();
            break;
        case "m":
            const uplifting = new Audio("assets/flute/mixkit-uplifting-flute-notification-2317.wav");
            uplifting.play();
            break;
    }
}

function buttonAnimation(currentkey) {
    let activebtn = document.querySelector("." + currentkey);
    activebtn.classList.add("pressed");
    setTimeout(function() {
        activebtn.classList.remove("pressed");
    }, 100);
    
}