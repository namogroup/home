window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    var splash = document.getElementById('splash');
    if ( window.pageYOffset > (splash.scrollHeight - navbar.clientHeight)) {
        navbar.classList.add("opaque");
        console.log('greater than splash')
    } else {
        navbar.classList.remove("opaque");
        console.log('less than splash')
    }
}