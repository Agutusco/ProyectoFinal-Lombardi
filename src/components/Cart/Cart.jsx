import { Link } from "react-router-dom"
import { useContext } from "react"
import { carritoContexto } from "../../contexto/CarritoContexto"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"


const Cart = (img2) => {
    const {carrito, vaciarCarrito} = useContext(carritoContexto)

    const calcularTotalEnCarrito = carrito.reduce((total, producto) => total + producto.cantidad, 0)

    const total = carrito.reduce((total, producto) => total + (producto.Item.Precio * producto.cantidad ),0) 

    if (calcularTotalEnCarrito === 0) {
        return (
            <>
                <h2 className="aviso-carrito">No agregaste productos al carrito</h2>
                <h2 className="aviso-carrito">¿Qué estas esperando?</h2>
                <div className="div-agregar">
                <button className="button-agregar"><Link to={"/"} className="link-agregar"> Agrega productos </Link></button>
                </div>
            </>
        )
    }

    return (
        <div>
            {
                carrito.map(productos => <CartItem key={productos.id} {...productos} />)}
                <div>
                    <div className="compra-final">
                    <img src={img2} alt="" />
                <h3>Total: ${total}</h3>
                <button onClick={() => vaciarCarrito()} className="button-vaciar">Vaciar carrito</button>
                <button className="button-finalizar"><Link to= "/checkout" className="link-final"> Finalizar compra</Link></button>
                    </div>
                </div>
        </div>
    )

}

export default Cart
