

var toggler = document.getElementsByClassName("caret");
var j;

for (j = 0; j < toggler.length; j++) {
  toggler[j].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}