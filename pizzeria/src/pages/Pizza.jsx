import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const getPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };
    getPizza();
  }, [id]); 

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", display: "flex", justifyContent: "center" }}>
      <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "15px", width: "400px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <img 
          src={pizza.img} 
          alt={`Pizza ${pizza.name}`} 
          style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "6px" }} 
        />
        
        <h2 style={{ textTransform: "capitalize", margin: "10px 0" }}>{pizza.name}</h2>
        
        <p style={{ fontSize: "14px", color: "#555" }}>{pizza.desc}</p>
        
        <div>
          <strong>Ingredientes:</strong>
          <ul style={{ margin: "5px 0", paddingLeft: "20px", fontSize: "14px" }}>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index} style={{ textTransform: "capitalize" }}>{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <h3 style={{ color: "#d9534f", marginTop: "15px" }}>Precio: ${pizza.price.toLocaleString("es-CL")}</h3>
        <button className='btn btn-dark btn-sm'>Añadir 🛒</button>
      </div>
    </div>
  );
};

export default Pizza;