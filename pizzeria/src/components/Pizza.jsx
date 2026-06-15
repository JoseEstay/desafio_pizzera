import {useEffect, useState} from "react";



const Pizza = () => {
const [pizza, setPizza] = useState([]);

 const getPizza = async () => {
    try {
      const response = await fetch("pizza.json");
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error fetching pizza:", error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

return (
    <>
    <h1>Pizzas</h1>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pizza.map((pizza) => (
            <img key={pizza.desc} src={pizza.img} alt={pizza.name} style={{ width: "200px", margin: "10px" }} />
        ))}
    </div>

    </>
);
}

export default Pizza;