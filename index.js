var drums = document.querySelectorAll(".drum").length;
for (var i = 0; i < drums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var alph = this.innerHTML;
        makeSound(alph);
        makeAnimation(alph);
    })
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            var music1 = new Audio("./sounds/tom-1.mp3");
            music1.play();
            break;
        case "a":
            var music2 = new Audio("./sounds/tom-2.mp3");
            music2.play();
            break;
        case "s":
            var music3 = new Audio("./sounds/tom-3.mp3");
            music3.play();
            break;
        case "d":
            var music4 = new Audio("./sounds/tom-4.mp3");
            music4.play();
            break;
        case "j":
            var music5 = new Audio("./sounds/snare.mp3");
            music5.play();
            break;
        case "k":
            var music6 = new Audio("./sounds/crash.mp3");
            music6.play();
            break;
        case "l":
            var music7 = new Audio("sounds/kick-bass.mp3");
            music7.play();
            break;
        default:
            console.log("Wrong key pressed!");
    }
}

function makeAnimation(y){
    var clickedClass = "." + y;
    document.querySelector(clickedClass).classList.add("clicked");
    setTimeout(function(){
        document.querySelector(clickedClass).classList.remove("clicked");
    }, 100);
}