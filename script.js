const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const white = document.querySelector(".upper");


white.addEventListener("click",() => {
    container.classList.toggle("active");
    btn.classList.toggle("black");
    white.classList.toggle("one");
    white.classList.toggle("left");
    btn.style.transitionDuration = "2s"; 

    container.style.transitionDuration = "2s";
    

})
