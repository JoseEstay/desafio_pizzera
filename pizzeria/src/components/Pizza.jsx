import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Menú de Pizzas</h1>
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {pizzas.map((pizza) => (
          <div 
            key={pizza.id} 
            style={{ 
              border: "1px solid #ddd", 
              borderRadius: "8px", 
              padding: "15px", 
              width: "280px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}
          >
            <img 
              src={pizza.img} 
              alt={`Pizza ${pizza.name}`} 
              style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "6px" }} 
            />
            
            <h2 style={{ textTransform: "capitalize", margin: "10px 0" }}>
              {pizza.name}
            </h2>
            
            <p style={{ fontSize: "14px", color: "#555" }}>
              {pizza.desc}
            </p>
            
            <div>
              <strong>Ingredientes:</strong>
              <ul style={{ margin: "5px 0", paddingLeft: "20px", fontSize: "14px" }}>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index} style={{ textTransform: "capitalize" }}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            
            <h3 style={{ color: "#d9534f", marginTop: "15px" }}>
              Precio: ${pizza.price.toLocaleString("es-CL")}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizza;