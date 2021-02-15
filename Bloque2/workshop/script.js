class producto {
    constructor(pNombre, pPrecio) {
        this.nombre = pNombre;
        this.precio = pPrecio;
    }
}
const p1 = new producto('iPhone 12', '1098');
const p2 = new producto('iPad Pro', '1500');
const p3 = new producto('iPad', '1100');
const p4 = new producto('Apple Watch', '500');


let productos = [p1, p2, p3, p4];


var tarjetita = document.getElementById('producto');
var div2 = document.getElementsByClassName('card');
var div3 = document.getElementsByClassName('card-body');


for (let index = 0; index < productos.length; index++) {
    var div = document.createElement("div");
    div.classList.add("card");
    div.style.width = "18rem";
    tarjetita.appendChild(div);
    var divx = document.createElement("div");
    divx.classList.add("card-body");
    div.appendChild(divx);
    var h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent = productos[index].nombre;
    divx.appendChild(h5);
    var p = document.createElement("p");
    p.classList.add("card-text");
    p.textContent = "USD-" + productos[index].precio;
    divx.appendChild(p);
    var a = document.createElement("a");
    a.classList.add("card-link");
    a.textContent = "Agregar al carrito";
    a.onclick = agregarAlCarrito;
    divx.appendChild(a);
}
function agregarAlCarrito() {
    alert("Agrego al carrito!!!");
}
marca_de_verificación_blanca
ojos
manos_levantadas


function agregarAlCarrito(pNombreProducto) {
    var carrito = document.getElementById("carrito");
    var li = document.createElement("li");
    li.textContent = pNombreProducto;
    carrito.appendChild(li);
    alert("Agrego al carrito!!!");
}