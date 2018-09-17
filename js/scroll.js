window.onload = function() {
    let breakpoint1 = parseFloat(window.getComputedStyle(formacionC).marginTop) + parseFloat(window.getComputedStyle(sobreC).marginBottom)
    let breakpoint2 = parseFloat(window.getComputedStyle(proyectosC).marginTop) + parseFloat(window.getComputedStyle(formacionC).marginBottom)
    let breakpoint3 = parseFloat(window.getComputedStyle(conocimientosC).marginTop) + parseFloat(window.getComputedStyle(proyectosC).marginBottom)
    if (parseInt(formacionC.getBoundingClientRect().y - breakpoint1) > 1) {
        document.getElementById('b-1').style.opacity = 1;
        document.getElementById('b-2').style.opacity = 0;
        document.getElementById('b-3').style.opacity = 0;
        document.getElementById('b-4').style.opacity = 0;
    } else if (parseInt(proyectosC.getBoundingClientRect().y - breakpoint2) > 1) {
        document.getElementById('b-1').style.opacity = 0;
        document.getElementById('b-2').style.opacity = 1;
        document.getElementById('b-3').style.opacity = 0;
        document.getElementById('b-4').style.opacity = 0;
    } else if (parseInt(conocimientosC.getBoundingClientRect().y - breakpoint3) > 1) {
        document.getElementById('b-1').style.opacity = 0;
        document.getElementById('b-2').style.opacity = 0;
        document.getElementById('b-3').style.opacity = 1;
        document.getElementById('b-4').style.opacity = 0;
    } else {
        document.getElementById('b-1').style.opacity = 0;
        document.getElementById('b-2').style.opacity = 0;
        document.getElementById('b-3').style.opacity = 0;
        document.getElementById('b-4').style.opacity = 1;
    }
}
window.onscroll = function() {
    let breakpoint1 = parseFloat(window.getComputedStyle(formacionC).marginTop) + parseFloat(window.getComputedStyle(sobreC).marginBottom)
    let breakpoint2 = parseFloat(window.getComputedStyle(proyectosC).marginTop) + parseFloat(window.getComputedStyle(formacionC).marginBottom)
    let breakpoint3 = parseFloat(window.getComputedStyle(conocimientosC).marginTop) + parseFloat(window.getComputedStyle(proyectosC).marginBottom)
    if (parseInt(formacionC.getBoundingClientRect().y - breakpoint1) > 1) {
        document.getElementById('b-1').style.opacity = 1;
        document.getElementById('b-2').style.opacity = 0;
    } else if (parseInt(proyectosC.getBoundingClientRect().y - breakpoint2) > 1) {
        document.getElementById('b-1').style.opacity = 0;
        document.getElementById('b-2').style.opacity = 1;
        document.getElementById('b-3').style.opacity = 0;
    } else if (parseInt(conocimientosC.getBoundingClientRect().y - breakpoint3) > 1) {
        document.getElementById('b-2').style.opacity = 0;
        document.getElementById('b-3').style.opacity = 1;
        document.getElementById('b-4').style.opacity = 0;
    } else {
        document.getElementById('b-3').style.opacity = 0;
        document.getElementById('b-4').style.opacity = 1;
    }
};