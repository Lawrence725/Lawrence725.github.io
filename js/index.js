// Scroll to top
document.getElementById('body').onscroll = function() {
    console.log(document.getElementById('body').scrollTop);
    var top = document.getElementById('body').scrollTop == 0;
    document.getElementById('toTop').style.display = top ? 'none' : 'flex'; };
function toTop() {
    document.getElementById('body').scrollTo({top: 0, behavior: 'smooth'}); }

// Animation (Rotate)
function rotate(e) {
    if (e.classList.contains('rotateF'))
        { e.className = 'icon iconButton fill rotateB'; }
    else { e.className = 'icon iconButton fill rotateF'; }}

// Toast
function showToast() {
    var toast = document.getElementById("toast");
    toast.className = "toast show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000); }

// Popup close
function popClose(e) {
    if (e.classList.contains('popup'))
        window.onclick  = function(event) {
            if (event.target == e)
                e.style.display = "none"; }
    else if (!(e.classList.contains('popBody')))
        e.closest('.popup').style.display = "none";
    document.body.style.overflow = "scroll"; }

// Popup (Test)
function popTest() {
    document.getElementById("popTest").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Mobile screen fix
// window.addEventListener(
//     'resize',
//     (function () {
//         document.documentElement.style.setProperty(
//             '--mobileH', `${window.innerHeight}px` );})());

// Banner
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
    dots[slideIndex-1].className += " active"; }
window.setInterval( function(){ plusSlides(1); }, 3000 );
function swipedetect(el, callback){
    var touchsurface = el, swipedir, startX, startY, distX, distY, elapsedTime, startTime,
    threshold = 50, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
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
            }}
        handleswipe(swipedir)
        e.preventDefault()
    }, false)}
var el = document.getElementById('banners')
swipedetect(el, function(swipedir){
    // swipedir contains either "none", "left", "right", "up", or "down"
    if (swipedir =='left')
        plusSlides(1)
    if (swipedir =='right')
        plusSlides(-1) })