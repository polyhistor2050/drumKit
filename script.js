let btn = document.querySelectorAll(".drum");
for (let i = 0; i < btn.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handlerClick);
    function handlerClick(){
        let btnValue = this.innerHTML;
        makeSound(btnValue);
        buttonAnimation(btnValue);
    }
}

document.addEventListener("keypress", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});


function makeSound(key) {
    switch(key) {
        case "q":
            let tom1 = new Audio("assets/band/tom-1.mp3");
            tom1.play();
            break;
        case "w":
            let tom2 = new Audio("assets/band/tom-2.mp3");
            tom2.play();
            break;
        case "e":
            let tom3 = new Audio("assets/band/tom-3.mp3");
            tom3.play();
            break;
        case "r":
            let tom4 = new Audio("assets/band/tom-4.mp3");
            tom4.play();
            break;
        case "t":
            let snare = new Audio("assets/band/snare.mp3");
            snare.play();
            break;
        case "y":
            let crash = new Audio("assets/band/crash.mp3");
            crash.play();
            break;
        case "u":
            let kick = new Audio("assets/band/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(btnValue);
    }
}

function buttonAnimation(currentkey) {
    let activebtn = document.querySelector("." + currentkey);
    activebtn.classList.add("pressed");
    setTimeout(function() {
        activebtn.classList.remove("pressed");
    }, 100);
    
}