(function ($) {
    var methods = {
        addBar: function (name) {
            $(this).append(`<div class="${name}"></div>`);
            $(`.${name}`).append(`<ul class="${name}-ul"></ul>`);
        },
        addElement: function(name) {
            $(`.${$(this).attr('class')}-ul`).append(`<li id="${replaceWhiteSpace(name)}">${name}</li>`)
        },
        removeElement: function(name) {
            console.log($(this).length);
            
            $(this).remove();
        }
    };
    $.fn.navbarAle = function (method) {
        // Si existe la función la llamamos
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            //Si no se pasa ningún parámetro o el parámetro es
            //un objeto de configuración llamamos al inicializador
            return methods.init.apply(this, arguments);
        } else {
            //En el resto de los casos mostramos un error
            alert('La función ' + method + ' no existe en jQuery.navbarAle');
        }
    };

    function replaceWhiteSpace(string) {
        return string.toLowerCase().replace(/\s/g, '-');
    }
})(jQuery);