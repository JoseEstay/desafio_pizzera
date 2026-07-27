import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext"; 
import "../Cart.css";

function Cart() {
    const { cart, handleIncrease, handleDecrease, total } = useContext(CartContext);
    const { token } = useContext(UserContext);

    const realizarCompra = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/checkouts",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            cart: cart,
          }),
        });
        if (response.ok){
          alert("Compra exitosa");
        } else {
          alert("Error en el proceso de compra")
        }
      } catch (error) {
        console.error("Error en checkout:", error);
      }
    };

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
            <button 
                className="btn btn-dark mt-2" 
                disabled={cart.length === 0 || !token}
                onClick={realizarCompra}
            >
                Pagar
            </button>
        </div>
    );
}

export default Cart;

