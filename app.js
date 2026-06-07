var textBox = document.getElementById("msg-box")
var charCount = document.getElementById("counter")
var overlay = document.querySelector(".overlay")
var popupBox = document.querySelector(".popup-warning")
var closeBtn = document.querySelector(".close")
var reminingChar = document.getElementById("remainCounter")

textBox.addEventListener("input", function(){
    var maxchar = 200;
    var currentlength = textBox.value.length;
    var charleft = currentlength - maxchar

    charCount.textContent = `${currentlength}/${maxchar}`
    reminingChar.textContent = `Charecter left:${-charleft}`
    console.log(overlay)
    if(textBox.value.length >200)
    {
        textBox.value = textBox.value.slice(0,200)
        overlay.classList.remove("hidden")
        popupBox.classList.remove("hidden")
    }
    else{
        overlay.classList.add("hidden")
        popupBox.classList.add("hidden")
    }


})

closeBtn.addEventListener("click",function(){
        overlay.classList.add("hidden")
        popupBox.classList.add("hidden")
})