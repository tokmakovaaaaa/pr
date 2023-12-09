const btn = document.querySelector(".flexdiv");

btn.addEventListener("click", function () {
  btn.classList.toggle("open");
});

var block = document.querySelector(".filtr");
var button = document.querySelector("#krestik");

button.onclick = function () {
  if (!block) {
    return;
  }

  block.hidden = !block.hidden;
};
