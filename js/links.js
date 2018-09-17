function linkScroll(dir) {
    window.scroll({
        top: document.querySelector(dir.getAttribute('href')).offsetTop,
        behavior: 'smooth',
    });
    var x = document.getElementById("menu");
    var y = document.getElementById("nav");
    if (x.className === "menu responsive") {
        x.className = "menu";
        y.className = ""
    }
}
