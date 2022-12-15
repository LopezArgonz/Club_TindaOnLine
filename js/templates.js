
let imagen = ""

function retornoCard(producto){
    return `<div class="tarjeta" id="tarjeta ${producto.id}">
                <div class="imagenProducto"><img src=${producto.imagen}></div>
                <div class="nombreProducto"><h2>${producto.nombre}</h2></div>
                <div class="precioProducto"><h3>$ ${producto.precio}</h3></div>           
                <div class="tarjetaBoton">
                    <button class="boton" id="${producto.id}" title = "Clic para agregar al carrito">Agregar</button>
                </div>
            </div>`
}

function armarNada(nada){
    return `<div>
                <p>Muchas gracias por elegirnos, esta es tu orden de compra:</p>
            </div>
            <div class="containerCarrito" id="containerCarrito">

            </div>
            <div class="resumenCompra">
                <div class="total">
                    <h2>El total de tu compra es: $TOTAL</h2>
                    <h3>¿Queres continuar con tu compra?</h3>
                </div>                        
            </div>
            <div class="botonesConfirmar">
                <button class="botonCancelar">❌ Cancelar</button>
                <button class="botonConfirmar">✅ Confirmar</button>                
            </div>`
}

function armarTablaCarrito(ropa){
    return `<div class="contenedorCarrito">
                <div class="imagenesCarrito">
                    <img src="${ropa.imagen}"> 
                </div>
                <div class="contenedores">
                    <div class="contenedorCarritoinfo">
                        <div class="condenedornompre">
                            <div class="nombreProducto"><h2>${ropa.nombre}</h2></div>
                            <div class="precioProducto"><h3>Precio: $${ropa.precio}</h3></div>                           
                            <div>
                                <form>
                                    <select class= "size"> 
                                        <option> Talle XS</option>
                                        <option> Talle S</option>
                                        <option> Talle M</option>
                                        <option> Talle L</option>
                                        <option> Talle XL</option>
                                    </select> 
                                </form>                
                            </div>                                                                             
                        </div>
                    </div> 
                </div>
                <div class= "botonquitar">
                    <button type="button" class="imgBotonQuitar borrar" id="${ropa.nombre}" title="Quitar del carrito">❌</button>
                </div>                
            </div>`
}

