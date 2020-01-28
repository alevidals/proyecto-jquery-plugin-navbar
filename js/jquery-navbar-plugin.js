(function ($) {
    var methods = {

        /**
         * Crea un div vacío con una clase que recibirá el valor del parámetro name.
         * @author Alejandro Vidal
         * @param name El nombre de la clase que se añadirá al elemento.
         */
        addBar: function (name) {
            $(this).append(`<div class="${name}"></div>`);
        },

        /**
         * Añadirá un elemento a la lista donde name será el nombre que tomará ese elemento.El parámetro to
         * indicará que sera un ancla y en el debemos de indicar el nombre del fichero o url a la que redirijamos.Es
         * último puede ser omitido si no queremos crear un ancla.
         * @author Alejandro Vidal
         * @param name El nombre del elemento en la barra
         * @param to El nombre del fichero o url a la que redirige, puede ser omitido.
         */
        addElement: function (name, to) {
            if ($(this).children().length == 0) {
                $(this).append(`<ul class="${$(this).attr('class')}-ul"></ul>`);
            }
            if (to) {
                $(`.${$(this).attr('class')}-ul`).append(`<li id="${replaceWhiteSpace(name)}" class="li-item vertical-center"><a href="${to}">${name}</a></li>`);
            } else {
                $(`.${$(this).attr('class')}-ul`).append(`<li id="${replaceWhiteSpace(name)}" class="li-item vertical-center">${name}</li>`);
            }
        },

        /**
         * Elimina el elemento al que le apliquemos este método.
         * @author Alejandro Vidal
         */
        removeElement: function () {
            if ($(this).length && $(this).attr('class') == 'li-item') {
                $(this).remove();
            } else {
                console.log('No existe ningún elemento con ese nombre.');
            }
        },

        /**
         * Añade una subopcion al elemento al que le apliquemos este método, el parámetro name será el nombre
         * de la subopcion y el parámetro to será el nombre del fichero o url a la que redirijamos.
         * @author Alejandro Vidal
         * @param name El nombre de subopcion que se añadirá.
         * @param to El nombre del fichero o url a la que redirige, puede ser omitido.
         */
        addOption: function (name, to) {
            if ($(this).children().length == 0) {
                $(this).append(`<ul class="${$(this).attr('id').toLowerCase()}-ul dropdown-content"><div class="dropdown-li"><div></ul>`);
            }
            $(`.${$(this).attr('id').toLowerCase()}-ul .dropdown-li`, ).append(`<li class="submenu-item-li ${name}-li"><a class="submenu-item" href="${to}">${name}</a></li>`);
            $(`#${$(this).attr('id')}`).on({
                mouseenter: function () {
                    $(`#${$(this).attr('id')} .dropdown-content`).show(300);
                },
                mouseleave: function () {
                    $(`#${$(this).attr('id')} .dropdown-content`).hide(300);
                },
            });
        },

        /**
         * Elimina una subopción del elemento al que le apliquemos este método.Eliminará la opción cuyo
         * nombre sea igual al pasado por el parámetro name.
         * @author Alejandro Vidal
         * @param name El nombre de la subopcion a borrar.
         */
        removeOption: function (name) {
            if ($(this).length && $(`#${$(this).attr('id')} .dropdown-li`).children().length > 0 && $(`.${name}-li`).length) {
                $(`.${name}-li`).remove();
            } else {
                console.log('No existe ninguna opción con ese nombre.');
            }
        },
    };
    $.fn.navbarAle = function (method) {
        if (methods[method]) {
            return methods[method].apply(
                this,
                Array.prototype.slice.call(arguments, 1),
            );
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            alert('La función ' + method + ' no existe en jQuery.navbarAle');
        }
    };

    function replaceWhiteSpace(string) {
        return string.toLowerCase().replace(/\s/g, '-');
    }
})(jQuery);