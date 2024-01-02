for (var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var buttonname = this.innerHTML;
        makeSound(buttonname);
        buttonAnime(buttonname);
    });
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnime(event.key);
})
function makeSound(key){
    switch (key) {
        case "w":
            var w = new Audio("./sounds/crash.mp3");
            w.play();                
            break;
        case "a":
            var a = new Audio("./sounds/kick-bass.mp3");
            a.play();
            break;
        case "s":
            var s = new Audio("./sounds/snare.mp3");
            s.play();
            break;
        case "d":
            var d = new Audio("./sounds/tom-1.mp3");
            d.play();
            break;
        case "j":
            var j = new Audio("./sounds/tom-2.mp3");
            j.play();
            break;
        case "k":
            var k = new Audio("./sounds/tom-3.mp3");
            k.play();
            break;
        case "l":
            var l = new Audio("./sounds/tom-4.mp3");
            l.play();
            break;
    
        default:
            break;
    }
    
}
function buttonAnime(pressed_key){
    document.querySelector("."+pressed_key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+pressed_key).classList.remove("pressed");
    },100);
}