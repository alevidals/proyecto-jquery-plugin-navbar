# Alejandro Vidal

# JQuery Navbar Manual Diseñador

>Aviso: en todo el manual donde aparezca NOMBRE sustitúyelo por la clase que le hayas añadido a la barra. A veces será preciso usar la etiqueta !important.

###  `.nombre`

-   Para cambiar el diseño de la barra en general, por ejemplo: altura, color de fondo, tipo de letra, tamaño de letra, etc.

### `.nombre .li-item a, .nombre .li-item`

-   Para cambiar las propiedades de los elementos de la barra de navegación. AVISO: no de las opciones del submenu.

### `.nombre .li-item:hover`

-   Para cambiar las propiedades de los elementos de la barra de navegación cuando hacemos hover. AVISO: no de las opciones del submenu.

### `.nombre .submenu-item`

-   Para cambiar el diseño de los elementos del submenu.

### `.nombre .submenu-item:hover`

-   Para cambiar el diseño de los elementos del submenu cuando hacemos hover.

# JQuery Navbar Manual Programador

### **Funciones**

### `addBar(name, animation)`

-   Crea un div vacío con una clase que recibirá el valor del parámetro **name**. El parámetro **animation** es para indicar el tipo de animación y puede tomar los valores: down, right o fate. Este último puede ser omitido si no deseamos animación.

### `addElement(name, to)`

-   Añadirá un elemento a la lista donde **name** será el nombre que tomará ese elemento. El parámetro **to** indicará que sera un ancla y en el debemos de indicar el nombre del fichero o url a la que redirijamos. Es último puede ser omitido si no queremos crear un ancla.

### `removeElement()`

-   Elimina el elemento al que le apliquemos este método.

### `addOption(name, to)`

-   Añade una subopcion al elemento al que le apliquemos este método, el parámetro **name** será el nombre de la subopcion y el parámetro **to** será el nombre del fichero o url a la que redirijamos.

### `removeOption(name)`

-   Elimina una subopción del elemento al que le apliquemos este método. Eliminará la opción cuyo nombre sea igual al pasado por el parámetro **name**.
