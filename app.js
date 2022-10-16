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
      }).catch(err => console.log(err))
  });
  
  search.addEventListener("click", (e) => {
    
    const S = inp.value.toUpperCase();
    fetch(urlS + S)
      .then((res) => res.json())
      .then((data) => {
        draw(data);
      }).catch(err => console.log(err))
  });
  

// Endpoints
const url = "https://bsaleback-end-production.up.railway.app/api";

const urlC = "https://bsaleback-end-production.up.railway.app/api/category?cat=";

const urlS = "https://bsaleback-end-production.up.railway.app/api/search?name=";


fetchData = async () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      draw(data);
    }).catch(err => console.log(err))
};

const draw = (data) => {
    if(data.length>3){
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
}else{
    row.innerHTML = "";
    const p = document.createElement('h5')
    p.innerHTML = 'El producto que buscas no existe!'
    row.appendChild(p)
}
};

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
