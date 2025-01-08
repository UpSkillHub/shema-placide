var links = document.getElementById("links")
var open = document.getElementById("open")
var close = document.getElementById("close")

open.addEventListener("click", function() {
    open.style.display = "none";
    close.style.display = "block";
    links.style.right = "0"
})
close.addEventListener("click", function() {
    close.style.display = "none";
    open.style.display = "block";
    links.style.right = "-100%"
})