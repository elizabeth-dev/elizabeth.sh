function menu() {
    var x = document.getElementById("menu");
    var y = document.getElementById("nav");
    if (x.className === "menu") {
        x.className += " responsive";
        y.className += "column"
    } else {
        x.className = "menu";
        y.className = "";
    }
}
