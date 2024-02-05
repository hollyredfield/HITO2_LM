document.addEventListener('DOMContentLoaded', function() {
    // Agrega un efecto de "desplazamiento suave" a todos los enlaces de navegación
    var navLinks = document.querySelectorAll('.nav-link');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(event) {
            var target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Muestra una alerta cuando el usuario envía el formulario
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Gracias por tu mensaje!');
    });
});

$(document).ready(function(){
    // Efecto de desplazamiento suave para los enlaces
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Efecto de desvanecimiento para el formulario de contacto
    $("#contacto").hide().fadeIn(2000);

    // Efecto de desplazamiento para el formulario de contacto
    $("#contacto").on('submit', function(event) {
        event.preventDefault();
        $(this).slideUp(1000, function() {
            $(this).slideDown(1000);
        });
    });
});

// portapapeles json
function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId);
    navigator.clipboard.writeText(copyText.textContent)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}