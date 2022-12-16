const carrito = JSON.parse(localStorage.getItem("miCarrito"))
const containerCarrito = document.getElementById("containerCarrito")

function recuperarCarrito() {
    let tablaHTML = ""    
    const carrito = JSON.parse(localStorage.getItem("miCarrito"))        
    if (carrito.length > -1) {
        console.log(carrito)
        carrito.forEach(ropa => {
            tablaHTML += armarTablaCarrito(ropa)
        });
        containerCarrito.innerHTML = tablaHTML
        calcularTotal()
    }
}
recuperarCarrito()

function activarBotonesQuitar() {
    const buttonsDelete = document.querySelectorAll("button.imgBotonQuitar.borrar")
    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let idx = carrito.findIndex(ropa => ropa.nombre === btn.id)            
                if (idx > -2){
                    carrito.splice(idx, 1)
                    localStorage.setItem ("miCarrito", JSON.stringify(carrito))                                                            
                    recuperarCarrito()
                    activarBotonesQuitar()
                    toast ("🤨 El producto fue borrado del carrito", "red")                      
                }                
        })
    }) 
           
}
activarBotonesQuitar()

const toast = (text, bgcolor)=> {
    Toastify({
        text: text,
        duration: 1500,
        close: false,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {background: bgcolor || "rgb(17, 177, 17)", border: "1px solid green", color:"white"}
      }).showToast();
}

function calcularTotal() {
    let total = document.querySelector("h2#total")
    let totalCarrito = carrito.reduce((acc, ropa)=> acc + ropa.precio, 0)
        total.innerText = `$ ${totalCarrito.toLocaleString()}`
}

const btnComprar = document.querySelector(".botonConfirmar")

btnComprar.addEventListener("click", ()=> {
    Swal.fire({        
        title: '¿Querés confirmar la compra?',
        imageUrl: '../imagenes/escudo.jpg',
        imageWidth: 200,
        imageHeight: 200,
        background: "white",      
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: `Cancelar`,        
        }) 
      .then(result => {
        if (result.isConfirmed) {
            localStorage.removeItem("miCarrito")
            carrito.length = 0
            Swal.fire("¡Muchas gracias! Te enviaremos un correo con los datos del envío. ¡Hasta pronto! 😀", '', '')
                .then(()=> {
                    location.href = '../index.html'
                })
        }
      })
})

const btnCancelar = document.querySelector(".botonCancelar")

btnCancelar.addEventListener("click", ()=> {
    Swal.fire({
        imageUrl: '../imagenes/escudo.jpg',
        title: '¿Estas seguro que quieres cancelar tu compra?',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: `Cancelar`,
      }) 
      .then(result => {
        if (result.isConfirmed) {
            localStorage.removeItem("miCarrito")
            carrito.length = 0
            Swal.fire("Tu compra fue cancelada. Esperamos verte pronto por aquí 😀", '', '')
                .then(()=> {
                    location.href = '../index.html'
                })
        }
      })
})


