// Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_symbol
var acc = document.getElementsByClassName("accordion");
var i;
// Slide down the content till reach the max height of content
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

