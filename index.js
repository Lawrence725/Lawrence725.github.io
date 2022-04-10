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

// Swipe
function swipedetect(el, callback){
    
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}

    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}

//USAGE:
var el = document.getElementById('banners')
swipedetect(el, function(swipedir){
    // swipedir contains either "none", "left", "right", "top", or "down"
    if (swipedir =='right')
        plusSlides(1)
        // alert('You just swiped left!')
})