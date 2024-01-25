
/*               ******** Detecting Button Press ********               */
var numOfButtons = document.querySelectorAll(".drum").length;   // we should know how many buttons are there by saying "length".

for (var i=0; i < numOfButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  // when "click" is detected,  it will run the callback function.

var buttonInnerHTML = this.innerHTML; // If a buttonis pressed, it checks the innerHTML of the button that got pressed! // If a button pressed,

makeSound(buttonInnerHTML);  // and sends that to makeSound in order to play the relevant sound.

buttonAnimation(buttonInnerHTML);  // and sends that to generate animation.

});
}


/*               ******** Detecting Keyboard Press ********               */
document.addEventListener("keydown", function(event) {  // Instead of event , we could insert anything else.
  // console.log(event.key);  // If we use only console.log(event) , it will give some information about the key we insert.{key, keyCode, cancelable}

  makeSound(event.key);

  buttonAnimation(event.key);

function makeSound (key) {

switch (key) {
  case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
  case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
  case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
  case "d":
    var tom3 = new Audio("sounds/tom-4.mp3");
    tom3.play();
    break;
  case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
  case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
  case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

  default: console.log(buttonInnerHTML);

}    /* Or we could use these lines of codes:

          ******** Constructor Function ********

      function Audio("fileLocation") {
        this.fileLocation = fileLocation;
        this.play = function () {
          ...... do these
          ...... do these
          ...... do these
        }
      }   */
    }


/*               ******** Generating Animation ********               */
    function buttonAnimation(currentKey) {
      var acttiveButton = document.querySelector("." + currentKey);  // "." is for .w .k .j

      acttiveButton.classList.add("pressed");

      setTimeout(function() {   //Structure: setTimeout(function() {alert("Hello"); }, 1000);
        acttiveButton.classList.remove("pressed");
      }, 100);


    }
  })


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
