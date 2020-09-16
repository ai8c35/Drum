let numberDrumBtns = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberDrumBtns; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //alert("click");
    let btnInnerHTML = this.innerHTML;
    makeNoise(btnInnerHTML);
    btnAnimateFlash(btnInnerHTML);

  })

  document.addEventListener("keydown", function(event) {
    makeNoise(event.key);
    btnAnimateFlash(event.key);
  })

  function makeNoise(beep){
    switch (beep) {
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        let bass = new Audio("sounds/kick-bass.mp3");
        bass.play();
        break;
      case "l":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    }
  }
  function btnAnimateFlash(clickedOn){
    let currentKey = document.querySelector("." + clickedOn);
    currentKey.classList.add("pressed");
    setTimeout(function(){currentKey.classList.remove("pressed");}, 150);

  }
}
