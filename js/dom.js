const carrito = JSON.parse(sessionStorage.getItem("miCarrito")) || []
const container = document.getElementById("container")
const inputSearch = document.querySelector("input#inputSearch")
const botonBuscar = document.getElementById("botonBuscar")
const verCarrito = document.getElementById("verCarrito")
const imgCarrito = document.getElementById ("imgCarrito")
const URL = "../bbdd/productos.json"
const productos = []

fetch (URL)
    .then ((response) => data = response.json())
    .then ((data) => productos.push (...data))
    .then(() => cargarProductos(productos))
    .then(() => activarBotones())

imgCarrito.addEventListener("mousemove", ()=> {
    let totalCarrito = carrito.length
        imgCarrito.title = `${totalCarrito} productos en Tu Carrito`
})

function cargarProductos(array) {
    let contenido = ""
        if (array.length > 0) {
            array.forEach(producto => {
                contenido += retornoCard(producto)
            })
            container.innerHTML = contenido            
        }
}


function activarBotones(){
    const botonesAdd = document.querySelectorAll ("button.boton")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let resultado = productos.find(prod => prod.id === parseInt (btn.id))            
                carrito.push(resultado)
                sessionStorage.setItem("miCarrito", JSON.stringify(carrito))                
                toast (`😀 ${resultado.nombre} se agregó al carrito`)
        })
    })
}


function filtrarProductos() {
    let resultado = productos.filter(producto => producto.nombre.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
    if (resultado.length > 0) {
            cargarProductos(resultado)              
            activarBotones()           
        } else {
            console.warn("No se han encontrado coincidencias.")           
        }    
} 


inputSearch.addEventListener("change", ()=> {
    if (inputSearch.value.trim() !== "") {
        filtrarProductos()
    } else {
        cargarProductos(productos)        
        activarBotones()
    }
})

botonBuscar.addEventListener("click", filtrarProductos())

const toast = (text, bgcolor)=> {
    Toastify({
        text: text,
        duration: 1500,
        close: false,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {background: bgcolor || "rgb(17, 177, 17)", border: "1px solid green", color:"white"}
      }).showToast();
}















