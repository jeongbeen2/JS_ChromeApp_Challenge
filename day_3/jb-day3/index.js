const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const hello = document.querySelector("h2");
const superEventHandler = {
  resized: function () {
    hello.innerHTML = "You just resized!";
    hello.style.color = colors[2];
  },

  mouseOver: function () {
    hello.innerHTML = "The mouse is here!";
    hello.style.color = colors[0];
  },

  contextMenu: function () {
    hello.innerHTML = "That was a right click!";
    hello.style.color = colors[4];
  },

  mouseLeave: function () {
    hello.innerHTML = "The mouse is gone!";
    hello.style.color = colors[1];
  },
};
window.addEventListener("resize", superEventHandler.resized);
hello.addEventListener("mouseover", superEventHandler.mouseOver);
hello.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("contextmenu", superEventHandler.contextMenu);
