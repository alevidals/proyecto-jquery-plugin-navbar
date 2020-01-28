$(document).ready(function () {

    $('body').navbarAle('addBar', 'header');
    $('.header').navbarAle('addElement', 'Paca');
    $('.header').navbarAle('addElement', 'Paco');
    $('.header').navbarAle('addElement', 'Juan');
    $('#saborido').navbarAle('removeElement');

    $('body').navbarAle('addBar', 'footer');
    $('.footer').navbarAle('addElement', 'Miguel');
    $('.footer').navbarAle('addElement', 'José');
    $('.footer').navbarAle('addElement', 'Ale');
    $('.footer').navbarAle('addElement', 'Christian');
    $('.footer').navbarAle('addElement', 'Saborido');

});