const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('list-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
// productos





cargarEventListeners();

function cargarEventListeners(){

    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    

}


function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
       
    }
}

function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento)

}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src="${elemento.imagen}" width=100/>
    </td>
    <td>
        ${elemento.titulo}    
    </td>
    <td>
        ${elemento.precio}
    </td>
    <td>
        <a href="#" class="borrar" data-id="${elemento.id}">X</a>
    </td>
    `;

    lista.appendChild(row)
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento;
    let elementoId;
    if(e.target.classList.contains('borrar')){
            e.target.parentElement.parentElement.remove();
            elemento = e.target.parentElement.parentElement;
            elementoId = elemento.querySelector('a').getAttribute('data-id');

    }

}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}

// voy a colocar un for para mostrar los productos sin necesidad de un html para cada uno


function crearProducto(misArticulos) {
    const divProducto = document.createElement('div');
    divProducto.classList.add('product');

    divProducto.innerHTML = `
        <img src="${misArticulos.img}" alt="">
        <div class="products-txt">
            <h3>${misArticulos.titulo}</h3>
            <p>${misArticulos.descripcion}</p>
            <p class="precio">${misArticulos.precio}</p>
            <a href="#" class="agregar-carrito btn-2" data-id="${misArticulos.id}">Agregar al carrito</a>
        </div>
    `;

    return divProducto;
}

// Obtener el contenedor de productos
const productContent = document.querySelector('.product-content');

// Crear y agregar los productos al contenedor
for (const articulo of misArticulos) {
    const productoElemento = crearProducto(articulo);
    productContent.appendChild(productoElemento);
}