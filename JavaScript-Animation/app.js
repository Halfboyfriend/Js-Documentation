const container = document.querySelector(".dots-container.square")
const container2 = document.querySelector(".dots-container.triangle")
const container3 = document.querySelector(".dots-container.circle")

for(let i = 1; i < 50; i++){
    const dots = document.createElement("span")
    dots.classList.add("dots");
    container.appendChild(dots);
}
for(let j = 1; j < 230; j++){
    const dots = document.createElement("span")
    dots.classList.add("dots");
    container2.appendChild(dots);
}
for(let k = 1; k < 180; k++){
    const dots = document.createElement("span")
    dots.classList.add("dots");
    container3.appendChild(dots);
}


const Dots = document.querySelectorAll(".dots");
Dots.forEach((dot, idx) => {
    dot.style.animationDelay =`${idx * 15}ms`
});