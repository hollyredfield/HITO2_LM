document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var body = document.body;
    var gradientColor = "linear-gradient(to right, lightblue, darkblue)";
    body.style.background = scrollPosition > 1 ? gradientColor : "";
});

$(document).ready(function() {
    // Efecto de desvanecimiento en los elementos al cargar la página
    $("body").fadeOut(2000);

    // Cambio de color de fondo al pasar el cursor sobre los enlaces
    $("a").hover(function() {
        $(this).css("background-color", "yellow");
    }, function() {
        $(this).css("background-color", "transparent");
    });

    // Animación de los títulos al pasar el cursor sobre ellos
    $("h1, h2").hover(function() {
        $(this).animate({fontSize: '+=10px'}, 500);
    }, function() {
        $(this).animate({fontSize: '-=10px'}, 500);
    });

    // Cambio de color del texto al hacer clic en él
    $("p").click(function() {
        $(this).css("color", "red");
    });

    // Recarga de la página al hacer doble clic en el cuerpo de la página
    $("body").dblclick(function() {
        location.reload();
    });
});