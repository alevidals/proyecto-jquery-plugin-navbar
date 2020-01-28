$(document).ready(function () {
    $('body').navbarAle('addBar', 'header');
    $('.header').navbarAle('addElement', 'inicio', 'index.html');
    $('.header').navbarAle('addElement', 'sobre nosotros', 'about-us.html');
    $('.header').navbarAle('addElement', 'comidas');
    $('#comidas').navbarAle('addOption', 'verduras', 'verduras.html');
    $('#comidas').navbarAle('addOption', 'frutas', 'frutas.html');
    $('#comidas').navbarAle('addOption', 'carnes', 'carnes.html');
    $('#comidas').navbarAle('addOption', 'pescados', 'pescados.html');
    $('#comidas').navbarAle('addOption', 'ordenadores', 'ordenadores.html');
    $('#comidas').navbarAle('removeOption', 'ordenadores');


    $('body').append('<br><br><br><br><br><br><br><br><br><br><br><br><br>');
    $('body').navbarAle('addBar', 'footer');
    $('.footer').navbarAle('addElement', 'inicio', 'index.html');
    $('.footer').navbarAle('addElement', 'sobre nosotros', 'about-us.html');
    $('.footer').navbarAle('addElement', 'ordenadores');
    $('#ordenadores').navbarAle('addOption', 'placas', 'placas.html');
    $('#ordenadores').navbarAle('addOption', 'cpu', 'cpu.html');
    $('#ordenadores').navbarAle('addOption', 'ram', 'ram.html');
    $('#ordenadores').navbarAle('addOption', 'tarjeta gráfica', 'tgrafica.html');
    $('#ordenadores').navbarAle('addOption', 'móviles', 'moviles.html');
    $('#ordenadores').navbarAle('removeOption', 'móviles');
});