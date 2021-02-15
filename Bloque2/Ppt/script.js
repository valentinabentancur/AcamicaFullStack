
class Usuario {
    constructor (pUser,pPass,pNombre,pApellido,pEdad){
        this.userName=pUser;
        this.password=pPass;
        this.name=pNombre;
        this.apellido=pApellido;
        this.edad=pEdad;
    }
}
let usuarios = [];

let formulario = document.getElementById("formulario");


function crearUsuario(){
document.getElementById("formulario").innerHTML = "";
let inputUsuario=document.createElement('input');
inputUsuario.setAttribute("id","inputUsuario");
inputUsuario.placeholder="usuario";
formulario.appendChild(inputUsuario);

let inputPassword=document.createElement('input');
inputPassword.setAttribute("id","inputPassword");
inputPassword.placeholder="Contrasena";
formulario.appendChild(inputPassword);

let inputNombre=document.createElement('input');
inputNombre.setAttribute("id","inputNombre");
inputNombre.placeholder="Nombre";
formulario.appendChild(inputNombre);

let inputApellido =document.createElement('input');
inputApellido.setAttribute("id","inputApellido");
inputApellido.placeholder="Apellido";
formulario.appendChild(inputApellido);

let inputEdad=document.createElement('input');
inputEdad.setAttribute("id","inputEdad");
inputEdad.placeholder="Edad";
formulario.appendChild(inputEdad);

let button = document.createElement('button');
button.setAttribute("id","botonGuardar");
formulario.appendChild(button);
button.textContent="Guardar Usuario";
button.addEventListener("click",guardarUsuario);
}


function guardarUsuario(){
    let usr = document.getElementById("inputUsuario").value;
    let psw = document.getElementById("inputPassword").value;
    let name = document.getElementById("inputNombre").value;
    let apellido = document.getElementById("inputApellido").value;
    let edad = document.getElementById("inputEdad").value;

    const usuario = new Usuario(usr, psw, name , apellido, edad);
    usuarios.push(usuario);


}

function listarUsuarios(){
document.getElementById("formulario").innerHTML = "";
let tabla = document.createElement("table");
tabla.classList = "table table-striped table-dark";
formulario.appendChild(tabla);

let th0 = document.createElement("th");
tabla.appendChild(th0);
th0.textContent = "Usuario  ";

let th1 = document.createElement("th");
tabla.appendChild(th1);
th1.textContent = "Contrasena  ";

let th2 = document.createElement("th");
tabla.appendChild(th2);
th2.textContent = "Nombre  ";

let th3 = document.createElement("th");
tabla.appendChild(th3);
th3.textContent = "Apellido  ";

let th4 = document.createElement("th");
tabla.appendChild(th4);
th4.textContent = "Edad  ";

for (let index = 0; index < usuarios.length; index++) {
    let tr = document.createElement("tr");
    tabla.appendChild(tr);

    let td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = usuarios[index].userName;

    let td1 = document.createElement("td");
    tr.appendChild(td1);
    td1.textContent = usuarios[index].password;

    let td2 = document.createElement("td");
    tr.appendChild(td2);
    td2.textContent = usuarios[index].name;

    let td3 = document.createElement("td");
    tr.appendChild(td3);
    td3.textContent = usuarios[index].apellido;

    let td4 = document.createElement("td");
    tr.appendChild(td4);
    td4.textContent = usuarios[index].edad;
    
}

}

document.getElementById("crear_usuario").addEventListener("click",crearUsuario);
document.getElementById("listar_usuario").addEventListener("click",listarUsuarios);


class Productos {
    constructor (pUsuario, pDescripcion , pPrecio , Pstock){
        this.usuarioProductos = pUsuario;
        this.descripcion = pDescripcion;
        this.precio = pPrecio;
        this.stock= Pstock;
    }
  

}

let productos = [];

function crearProducto(){
    document.getElementById("formulario").innerHTML = "";
    let inputUsuarioProducto = document.createElement('input');
    inputUsuarioProducto.setAttribute("id","inputUsuarioProducto");
    inputUsuarioProducto.placeholder="Usuario";
    formulario.appendChild(inputUsuarioProducto);


    let inputdescripcionProducto = document.createElement('input');
    inputdescripcionProducto.setAttribute("id","descripcionProducto");
    inputdescripcionProducto.placeholder="Descripcion";
    formulario.appendChild(inputdescripcionProducto);

    let inputPrecio = document.createElement('input');
    inputPrecio.setAttribute("id","inputPrecio");
    inputPrecio.placeholder="Precio";
    formulario.appendChild(inputPrecio);

    let inputStock = document.createElement('input');
    inputStock.setAttribute("id","inputStock");
    inputStock.placeholder="Stock";
    formulario.appendChild(inputStock);

    let button = document.createElement('button');
    button.setAttribute("id","botonGuardarProductos");
    formulario.appendChild(button);
    button.textContent="Guardar Producto";
    button.addEventListener("click", guardarProducto);
    
    
}

function guardarProducto(){
    let usrProducto = document.getElementById("inputUsuarioProducto").value;
    let descrip = document.getElementById("descripcionProducto").value;
    let precioProdcuto = document.getElementById("inputPrecio").value;
    let stockProducto = document.getElementById("inputStock").value;

    const producto = new Productos(usrProducto, descrip , precioProdcuto, stockProducto)
   productos.push(producto);
    
}

function listarProdcutos(){
     document.getElementById("formulario").innerHTML = "";
let tabla = document.createElement("table");
tabla.classList = "table table-striped table-dark";
formulario.appendChild(tabla);

let th0 = document.createElement("th");
tabla.appendChild(th0);
th0.textContent = "Producto ";

let th1 = document.createElement("th");
tabla.appendChild(th1);
th1.textContent = "Descripcion";

let th2 = document.createElement("th");
tabla.appendChild(th2);
th2.textContent = "Precio";

let th3 = document.createElement("th");
tabla.appendChild(th3);
th3.textContent = "Stock";


}

for (let index = 0; index < productos.length; index++) {
    let tr = document.createElement("tr");
    tabla.appendChild(tr);

    let td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = productos[index].usuarioProductos;

    let td1 = document.createElement("td");
    tr.appendChild(td1);
    td1.textContent = productos[index].descripcion;

    let td2 = document.createElement("td");
    tr.appendChild(td2);
    td2.textContent = productos[index].precio;

    let td3 = document.createElement("td");
    tr.appendChild(td3);
    td3.textContent = productos[index].stock;

   
    
}


document.getElementById("crear_producto").addEventListener("click", crearProducto);
document.getElementById("listar_productos").addEventListener("click",listarProdcutos);










