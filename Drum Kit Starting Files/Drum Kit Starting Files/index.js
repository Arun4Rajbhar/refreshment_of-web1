//detecting the button press
for(i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
 
    })
}
//detecting the keypress
document.addEventListener("keypress", function(e){
    makeSound(e.key)
    buttonAnimation(e.key);

})

function makeSound(key){
    switch(key)
    {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;  
            
        default :console.log(buttonInnerHtml)     

    }

}

// Animation effect

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey)
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);

}