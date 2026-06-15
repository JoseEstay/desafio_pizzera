import {useEffect, useState} from "react";
import axios from "axios";

function FormularioMUI() {


const [gatos, SetGatos] = useState([]);

useEffect(() => {
    const cargarGatos = async () => {
        try {
const {data} = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10");

SetGatos(data);
        } catch (error) {
            console.error("Error al cargar los gatos:", error);
        }
    };

    cargarGatos();
}, []);

return (
    <>
    <h1>Gatos</h1>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        {gatos.map((gato) => (
            <img key={gato.id} src={gato.url} alt="Gato" style={{ width: "200px", margin: "10px" }} />
        ))}
    </div>

    </>
);
}

export default FormularioMUI;