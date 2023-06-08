/*
document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("I am Clicked!");
}
*/

/**********Another way to write this code**********/
/*
document.querySelector("button").addEventListener("click", function(){
    //This is an Anonymous function
    alert("I am Clicked!");
})
*/





//To add click function to all the buttons
//we will use a for loop

/********************  Actual code   ******************/
var noButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<noButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        //alert("I am clicked!");
        //console.log(this.innerHTML);

        var ButtonInnerHTML = this.innerHTML;
        makeSound(ButtonInnerHTML);
        animation(ButtonInnerHTML);
    })
}

document.addEventListener("keydown", function(event){
    //console.log(event);

    var keyPress = event.key;
    makeSound(keyPress);
    animation(keyPress);
})

function makeSound(key) {
    switch(key){
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break;
        default:
            console.log(this.innerHTML);

    }
}
function animation(key) {
    document.querySelector("." + key).classList.add("whiteText");
    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + key).classList.remove("whiteText");
    document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}