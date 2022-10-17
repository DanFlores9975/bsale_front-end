# Front-end para consumir una API REST 
## Elaboración para una tienda online
Para consultar la pagina web se puede hacer en este enlace.

* https://bsalefront-end-production.up.railway.app/


Para consultar la rest API de manera online se utilizan los siguientes endpoints
---
* **GET ->** https://bsaleback-end-production.up.railway.app/api
    * Obtiene todos los productos ordenados por categoria.
---
* **GET ->** https://bsaleback-end-production.up.railway.app/api/category
    * Params - **cat**
    * Obtiene los productos de la categoria solicitada.
---
* **GET ->** https://bsaleback-end-production.up.railway.app/api/search
    * Params - **name**
    * Obtiene todos los productos con incidencias en el nombre.

---


## Recursos y elaboracion de la tienda online

Los recursos utilizados para que esta rest api funcionara, son:

* Vanilla JS
* Bootstrap


A continuación mencionaré cual es la función de cada uno y como instalarlo:

### Vanilla JS
* vanilla js que no es más que otra cosa que JavaScript puro , muchas veces comenzamos a usar JavaScript sin saber escribir JavaScript realmente y de la mejor forma, casi siempre aprendemos JavaScript es usando librerías como Jquery pero realmente terminamos aprendiendo más de la propia librería que del propio lenguaje de programación.

* Vanilla JS es una iniciativa, en forma de framework que intenta enseñar las grandes ventajas de no usar frameworks y potenciar nuestras aplicaciones sin necesidad de añadir grandes archivos extra.

* Antes de entrar en materia un poco de teoría de que es JavaScript, JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, 3 basado en prototipos, imperativo, débilmente tipado y dinámico.

* Se utiliza principalmente en su forma del lado del cliente (client-side), implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámica aunque existe una forma de JavaScript del lado del servidor(Server-side JavaScript o SSJS). Su uso en aplicaciones externas a la web, por ejemplo en documentos PDF, aplicaciones de escritorio (mayoritariamente widgets) es también significativo.

![VanillaJS](https://res.cloudinary.com/practicaldev/image/fetch/s--DXKi6XIw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAr8AAAAJGUxMTdlYzM4LWZmNmEtNGZiNi05Mjc0LTc1ODQ0MWZmYzU4Nw.png)

### Bootstrap
* Bootstrap es un framework CSS desarrollado por Twitter en 2010, para estandarizar las herramientas de la compañía.

* Inicialmente, se llamó Twitter Blueprint y, un poco más tarde, en 2011, se transformó en código abierto y su nombre cambió para Bootstrap. Desde entonces fue actualizado varias veces y ya se encuentra en la versión 4.4.

* El framework combina CSS y JavaScript para estilizar los elementos de una página HTML. Permite mucho más que, simplemente, cambiar el color de los botones y los enlaces.

* Esta es una herramienta que proporciona interactividad en la página, por lo que ofrece una serie de componentes que facilitan la comunicación con el usuario, como menús de navegación, controles de página, barras de progreso y más.

* Además de todas las características que ofrece el framework, su principal objetivo es permitir la construcción de sitios web responsive para dispositivos móviles.

* Esto significa que las páginas están diseñadas para funcionar en desktop, tablets y smartphones, de una manera muy simple y organizada.

![Bootstrap](https://miracomohacerlo.com/wp-content/uploads/2021/02/bootstrap-illustration.jpg)

---
## Desarrollo de la Tienda online en html


### **Index.html**
Ahora bien, comprendido todo esto sigamos con nuestro archivo fuente el cual se llama index.html.

~~~html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mi tienda online</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  <body>
~~~
En el encabezado podemos observar los metadatos asi como el href que se utiliza para tener acceso a bootstrap

~~~html
  <body>
    <div class="container">
        <h1>Mi tienda Online!</h1>
        
        <hr>
        
        <div class="d-inline-flex p-2 bd-highlight">
        <nav class="navbar navbar-light bg-light mr-sm-5" id="nav">
            <form class="form-inline" method="get" onKeyPress="if(event.keyCode == 13) event.returnValue = false;">
              <input id="in" class="form-control mr-sm-5" type="search" placeholder="Nombre del producto" aria-label="Search">
            </form>
            <button id="search" class="btn btn-outline-success my-1 ml-2" type="submit">Buscar</button>
          </nav>
            </div>
~~~
En nuestra primera parte del body hacemos un div con la clase container en donde estará todo con lo que estaremos trabajando, posterior a eso, se pone un titulo h1 Con el texto "Mi tienda online!", despues tenemos la barra de busqueda con su input y boton, todo esto con las clases de bootstrap para darles diseño, ademas de agregar los "ID" que se utilizaran para hacer las consultas.

~~~html
 <div class="btn-group dropend">
                
                <ul class="menu" id="drop">
                  <button class="btn btn-info btn-sm" href="" id="4">Bebida</button>
                  <button class="btn btn-info btn-sm" href="" id="1">Bebida energetica</button>
                  <button class="btn btn-info btn-sm" href="" id="6">Cerveza</button>
                  <button class="btn btn-info btn-sm" href="" id="2">Pisco</button>
                  <button class="btn btn-info btn-sm" href="" id="3">Ron</button>
                  <button class="btn btn-info btn-sm" href="" id="5">Snack</button>
                  <button class="btn btn-info btn-sm" href="" id="7">Vodka</button>
                </ul>
              </div>
~~~
En este apartado podemos observar la declaracion de los botones con su respectivo id que coincide con el id de categoria que contienen los productos, esto para al momento de hacer click en ellos nos arroje los resultados de dicha consulta.

~~~html
        <div class="row" id="cards"></div>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acción</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody id="items"></tbody>
            <tfoot>
              <tr id="footer">
                <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
              </tr>
            </tfoot>
          </table>
    </div>
~~~
En este div otorgamos el nombre row puesto que aqui mostraremos todo el contenido de nuestros productos ademas de agregar una tabla en la que se encontraran los productos de nuestro carrito de compras.

~~~javascript
    <template id="template-footer">
        <th scope="row" colspan="2">Total productos</th>
        <td>10</td>
        <td>
            <button class="btn btn-danger btn-sm" id="vaciar-carrito">
                vaciar todo
            </button>
        </td>
        <td class="font-weight-bold">$ <span>5000</span></td>
    </template>
~~~
Este apartado es una plantilla para utilizar en el carrito, esta la utilizaremos para vaciar los productos del carrito.

~~~html
    <template id="template-carrito">
      <tr>
        <th scope="row">id</th>
        <td></td>
        <td>1</td>
        <td>
            <button class="btn btn-info btn-sm">
                +
            </button>
            <button class="btn btn-danger btn-sm">
                -
            </button>
        </td>
        <td>$ <span></span></td>
      </tr>
    </template>
~~~
Aqui tenemos la plantilla de un producto del carrito, ya que como se utilizaran varios se haran copias de esta y sus funcionalidades.
Tenemos dos botones para agregar o quitar productos asi como el precio de los productos que tenemos indexados. 


~~~html
    <template id="template-card">
        <div class="col-12 mb-2 col-md-4">
          <div class="card">
            <img src="" alt="" class="card-img-top"
            <div class="card-body">
              <h5>Titulo</h5>
              <p>precio</p>
              <button class="btn btn-dark">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </template>
~~~

Aqui observamos otra plantilla, pero ahora de las tarjetas en las cuales se mostraran nuestros productos, esta tarjeta cuenta con el nombre, precio y un boton para agregar el producto al carrito.


~~~html
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <script src="app.js"></script>
</body>
</html>
~~~
Por ultimo en nuestro archivo html tenemos los scripts, los cuales son las funcionalidades de bootstrap asi como nuestro archivo *app.js* en donde se encuentra el script para mostrar productos asi como hacer funcionar el carrito de compras.

## Desarrollo de la Tienda online en Javascript


### **app.js**
Ahora procederemos a ver el funcionamiento del script.
~~~javascript
const row = document.querySelector(".row");
const cards = document.getElementById("cards");
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const templateCard = document.getElementById("template-card").content;
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;
const fragment = document.createDocumentFragment();
const drop = document.getElementById("drop");
const search = document.getElementById("search");
const inp = document.getElementById("in");
let carrito = {};
~~~
En nuestra primera parte del codigo obtenemos todos los DOM con los que trabajaremos, en este caso son los templates y los espacios con los que podemos interactuar como lo son el boton y la entrada de la busqueda, los botones del carrito y el boton del carrito.

Ademas instanciamos un objeto "carrito" en donde se almacenará toda la información sobre los productos y sus cantidades para la compra.

~~~javascript
// Eventos
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});
cards.addEventListener("click", (e) => {
  addCarrito(e);
});
items.addEventListener("click", (e) => {
  btnAumentarDisminuir(e);
});
cards.addEventListener("click", (e) => {
  addCarrito(e);
});

drop.addEventListener("click", (e) => {
  const r = e.target.id;

  fetch(urlC + r)
    .then((res) => res.json())
    .then((data) => {
      draw(data);
    })
    .catch((err) => console.log(err));
});

search.addEventListener("click", (e) => {
  const S = inp.value.toUpperCase();
  fetch(urlS + S)
    .then((res) => res.json())
    .then((data) => {
      draw(data);
    })
    .catch((err) => console.log(err));
});
~~~
En este bloque de codigo se tienen los eventos a los que se pueden acceder, como lo son el documento, el cual al ingresar a la pagina se utiliza una función llamada fetchData() la cual se encarga de cargar toda la informacion que pedimos a la rest api.

Tambien tenemos otro evento llamado card, en el cual al hacer click en el boton llamamos a la funcion addCarrito(e) y le pasamos el evento esta función nos añadirá un nuevo producto a nuestro carrito.

Items tambien tiene un evento el cual si se presiona el boton de aumento o disminuir, se le envia el evento para verificar cual boton fue presionado y asi proceder con la acción.

Drop es un objeto en el cual tenemos los botones de categoria, que, segun el boton que sea presionado se mostrará la categoria, recordemos que los id de los botones coinciden con los id de categoria de los productos en la base de datos. Concatenamos el id del boton y hacemos la peticion a la rest api, la cual nos proporciona los endpoints despues de recibir los datos se enviana una función llamada draw() a la cual le pasamos la data como parametro para que esta pueda ser dibujada.

En el DOM de search tenemos un evento que cuando el boton es presionado, toma el valor de nuestro input y lo concatena a un endpoint para hacer la petición despues se llama a la función data de nuevo. 

~~~javascript
// Endpoints
const url = "https://bsaleback-end-production.up.railway.app/api";

const urlC =
  "https://bsaleback-end-production.up.railway.app/api/category?cat=";

const urlS = "https://bsaleback-end-production.up.railway.app/api/search?name=";
~~~
En este apartado tenemos los endpoints los cuales utilizamos en algunas de las funciones anteriores.

~~~javascript
fetchData = async () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      draw(data);
    })
    .catch((err) => console.log(err));
};
~~~
Esta función es la fetchData() La cual si recordamos es instanciada anteriormente, y esta solo se ejecuta cuando la peticion es recibida, demas tambien hace uso de la función draw que veremos a continuación.

~~~javascript
const draw = (data) => {
  if (data.length > 0) {
    data.forEach((element) => {
      row.innerHTML = "";
      templateCard.querySelector("h5").textContent = element.name;
      templateCard.querySelector("p").textContent = `${element.price}`;
      templateCard.querySelector("img").setAttribute("src", element.url_image);
      templateCard.querySelector(".btn-dark").dataset.id = element.id;
      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
  } else {
    row.innerHTML = "";
    const p = document.createElement("h5");
    p.innerHTML = "El producto que buscas no existe!";
    row.appendChild(p);
  }
};
~~~
Esta es la función draw() la cual recibe un parametro el cual es data, primero se comprueba que la data no este vacia, para el caso de la busqueda, ya que la rest api nos regresa solo un mensaje, por lo cual no se toma en cuenta.
Si la data tiene elementos se procede actualizar y a hacer un foreach de cada uno de los elementos para poder obtener sus datos y agregarlos a una nueva tarjeta que es creada y agregada a nuestro div en donde se mostrarán

~~~javascript
// Agregar al carrito
const addCarrito = (e) => {
  if (e.target.classList.contains("btn-dark")) {
    setCarrito(e.target.parentElement);
  }
  e.stopPropagation();
};

const setCarrito = (item) => {
  // console.log(item)
  const producto = {
    title: item.querySelector("h5").textContent,
    precio: item.querySelector("p").textContent,
    id: item.querySelector("button").dataset.id,
    cantidad: 0,
  };
  // console.log(producto)
  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad++;
  }

  carrito[producto.id] = { ...producto };

  pintarCarrito();
};
~~~

Procedemos a la funcionalidad del carrito de compras, el cual se encuentra a la vista en la parte inferior de nuestra página.

Como vimos anteriormente en la seccion de eventos llamabamos a la funcion addCarrito() la cual recibia el evento, pues bien, en esta funcion verificamos si el boton presionadao fue el de agregar al carrito, si es asi, llamamos a la funcion setCarrito() a la cual le enviamos el producto seleccionado.

En la función de setCarrito() recibimos el objeto y creamos uno nuevo a partir de sus datos, posterior, se verifica si este producto ya esta en el carrito, si no esta en el carrito se agrega uno, si ya esta, no agrega nada más, puesto que ya existe uno.


~~~javascript

const pintarCarrito = () => {
  items.innerHTML = "";

  Object.values(carrito).forEach((producto) => {
    templateCarrito.querySelector("th").textContent = producto.id;
    templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
    templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
    templateCarrito.querySelector("span").textContent =
      producto.precio * producto.cantidad;

    //botones
    templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
    templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);

  pintarFooter();
};

const pintarFooter = () => {
  footer.innerHTML = "";

  if (Object.keys(carrito).length === 0) {
    footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío con innerHTML</th>
        `;
    return;
  }

  ~~~
En estas funciones de pintar carrito y pintar footer lo que se hace es obtener el carrito y los productos que este tiene para asi mismo agregarlos a nuestro campo footer donde se encontrarán todos los elementos del carrito de compras, ademas se le agregan los botones y el footer si queda vacio, muestra un mensaje de que el carrito esta vacio.

  ~~~javascript

  // sumar cantidad y sumar totales
  const nCantidad = Object.values(carrito).reduce(
    (acc, { cantidad }) => acc + cantidad,
    0
  );
  const nPrecio = Object.values(carrito).reduce(
    (acc, { cantidad, precio }) => acc + cantidad * precio,
    0
  );
  // console.log(nPrecio)

  templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
  templateFooter.querySelector("span").textContent = nPrecio;

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);

  footer.appendChild(fragment);

  const boton = document.querySelector("#vaciar-carrito");
  boton.addEventListener("click", () => {
    carrito = {};
    pintarCarrito();
  });
};

~~~

En esta parte de la funcion de pintar futer, tenemos metodos para calcular los resultados de los precios y sus cantidades, esto para mostrar un total de manera global en el carrito, es decir, el gran total.

Además de tener la opcion de vaciar el carrito la cual simplemente hace que el objeto carrito este vacio.


~~~javascript

const btnAumentarDisminuir = (e) => {
  if (e.target.classList.contains("btn-info")) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad++;
    carrito[e.target.dataset.id] = { ...producto };
    pintarCarrito();
  }

  if (e.target.classList.contains("btn-danger")) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad--;
    if (producto.cantidad === 0) {
      delete carrito[e.target.dataset.id];
    } else {
      carrito[e.target.dataset.id] = { ...producto };
    }
    pintarCarrito();
  }
  e.stopPropagation();
};
~~~
Por ultimo tenemos esta función que si recordamos en los eventos esta es llamada, esta funcion recibe el evento y verifica cual boton fue presionadao, si fue el boton de aumentar o disminuir, en caso de aumentar, aumenta la cantidad del producto en el carrito y se llama pintarCarrito() de nuevo para hacer la actualizacón de datos, en caso contrario, se disminuye la cantidad, y se verifica si es diferente de cero, esto para poder eliminar el producto del carrito en caso de ser cero.


## Despedida
Esto seria todo por mi parte, espero haya quedado claro esta implementación de como se puede consumir una rest api y la implementación de un carrito, si observan que se podria mejorar algo o tienen alguna duda del funcionamiento de la misma, me lo pueden hacer saber a mi correo.

danflores9977@gmail.com

Suerte y mucho exito a todos!! 🚀💻🌌
