let textColor = document.querySelector("#color");
let change = document.getElementById("change");
let randomColor;
change.addEventListener("click",changeColor);

function changeColor(){
    randomColor = Math.floor(Math.random()*16777215);
    randomColor = randomColor.toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    change.style.backgroundColor = `#${randomColor}`;
    textColor.textContent = `Background color: #${randomColor}`;
}