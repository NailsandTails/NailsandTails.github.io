// Global Variables
var video = document.getElementById('example');
var videoSource = document.getElementById('vid-src');
var descriptionSource = document.getElementById('despsrc');

// Hamburger menu function
function hamburger() {
    var menu = document.getElementById('menu-links');
    var logo = document.getElementById('dog-logo');
    if (menu.style.display == 'block' && logo.style.display == 'none') {
        menu.style.display = 'none';
        logo.style.display = 'block';
    } else {
        menu.style.display = 'block';
        logo.style.display = 'none';
    }
}