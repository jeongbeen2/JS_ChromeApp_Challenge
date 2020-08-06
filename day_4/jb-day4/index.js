const bg = document.querySelector("body");


let colors = ["#6DC9FC", "#64DE76", "#F5E87B"];


function resize() {
    if (innerWidth > 1000){
        bg.style.backgroundColor = colors[0];
        text();
    } else if (innerWidth < 600){
        bg.style.backgroundColor = colors[1];
        text();
    } else {
        bg.style.backgroundColor = colors[2];
        text();
    }
}

resize();

function text(){
    bg.style.color = "white";
    bg.style.fontSize = "50px"
    bg.innerText = "Sooooooooo Ez"
}


window.addEventListener("resize", resize);
