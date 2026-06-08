import { useState } from "react";
import { pizzaCart } from "./pizzas.js";
import "../Cart.css";

function Cart() {
    
    const [cart, setCart] = useState(pizzaCart);

    
    const handleIncrease = (id) => {
        const newCart = cart.map((pizza) => 
            pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
        );
        setCart(newCart);
    };

    const handleDecrease = (id) => {
        const newCart = cart.map((pizza) => 
            pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        ).filter((pizza) => pizza.count > 0); 
        setCart(newCart);
    };

    const total = cart.reduce((acumulador, pizza) => acumulador + (pizza.price * pizza.count), 0);

    return (
        <div className="container mt-4">
            <h2>Detalles del pedido:</h2>
            {cart.map((pizza) => (
                <div key={pizza.id} className="d-flex align-items-center mb-3">
                    <img src={pizza.img} alt={pizza.name} style={{ width: '50px', marginRight: '10px' }} />
                    <h5 className="text-capitalize me-auto">{pizza.name}</h5>
                    <p className="mb-0 me-3">${pizza.price.toLocaleString('es-CL')}</p>
                    
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDecrease(pizza.id)}>-</button>
                    <span className="mx-2">{pizza.count}</span>
                    <button className="btn btn-outline-primary btn-sm" onClick={() => handleIncrease(pizza.id)}>+</button>
                </div>
            ))}
            
            <h3 className="mt-4">Total: ${total.toLocaleString('es-CL')}</h3>
            <button className="btn btn-dark mt-2">Pagar</button>
        </div>
    );
}

export default Cart;