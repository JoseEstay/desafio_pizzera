import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../Cart.css";

function Cart() {
    const {cart, handleIncrease, handleDecrease, total} = useContext(CartContext);

    return (
        <div className="container mt-4 mb-5">
            <h2>Detalles del pedido:</h2>
            {cart.map((pizza) => (
                <div key={pizza.id} className="d-flex align-items-center mb-3">
                    <img src={pizza.img} alt={pizza.name} style={{ width: '50px', marginRight: '10px' }} />
                    <h5 className="text-capitalize me-auto">{pizza.name}</h5>
                    <p className="mb-0 me-3">${(pizza.price * pizza.count).toLocaleString('es-CL')}</p>
                    
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDecrease(pizza.id)}>-</button>
                    <span className="mx-2">{pizza.count}</span>
                    <button className="btn btn-outline-primary btn-sm" onClick={() => handleIncrease(pizza.id)}>+</button>
                </div>
            ))}
            
            <h3 className="mt-4">Total: ${total.toLocaleString('es-CL')}</h3>
            <button className="btn btn-dark mt-2" disabled={cart.length === 0}>Pagar</button>
        </div>
    );
}

export default Cart;