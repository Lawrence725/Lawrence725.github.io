// Animation (Rotate)
function rotate(e) {
    if (e.classList.contains('rotateF'))
        { e.className = 'icon iconButton fill rotateB'; }
    else { e.className = 'icon iconButton fill rotateF'; }}

// Slideshow
var slideIndex = 1;
showSlides(1);
function plusSlides(n) {
    showSlides(slideIndex += n); }
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("banner");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; }
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); }
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
    // setTimeout(plusSlides(1), 2000); // Change image every 2 seconds
}

// Toast
function showToast() {
    var toast = document.getElementById("toast");
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000); }

// Popup (Small)
function popSmall() {
    var popSmall    = document.getElementById("popSmall");
    var close       = popSmall.getElementsByClassName("close")[0];
    var submit      = popSmall.getElementsByClassName("submit")[0];
    var cancel      = popSmall.getElementsByClassName("cancel")[0];
    close.onclick   = function() { popSmall.style.display = "none"; }
    submit.onclick  = function() { popSmall.style.display = "none"; }
    cancel.onclick  = function() { popSmall.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popSmall) { popSmall.style.display = "none"; }}
    popSmall.style.display = "flex"; }

// Popup (Large)
function popLarge() {
    var popLarge    = document.getElementById("popLarge");
    var close       = popLarge.getElementsByClassName("close")[0];
    var submit      = popLarge.getElementsByClassName("submit")[0];
    var cancel      = popLarge.getElementsByClassName("cancel")[0];
    close.onclick   = function() { popLarge.style.display = "none"; }
    submit.onclick  = function() { popLarge.style.display = "none"; }
    cancel.onclick  = function() { popLarge.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popLarge) { popLarge.style.display = "none"; }}
    popLarge.style.display = "flex"; }