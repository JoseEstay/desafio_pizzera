import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'; 

function CardPizza (props) {
  const { addToCart } = useContext(CartContext)
  
  return (
    <div className='card' style={{ width: '100%' }}>
      <img src={props.img} className='card-img-top' alt='pizza' />
      <div className='card-body'>
        <h5 className='card-title text-capitalize'>Pizza {props.name}</h5>
        <hr />

        <div className='text-center'>
          <p><b>Ingredientes:</b></p>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {props.ingredients.map((ingrediente, index) => (
              <li key={index} className='ingrediente-item text-capitalize'>🍕 {ingrediente}</li>
            ))}
          </ul>
        </div>

        <hr />
        <h4 className='text-center'>Precio: ${props.price.toLocaleString('es-CL')}</h4>
        <br />
        <div className='d-flex justify-content-between'>
          <Link to={`/pizza/${props.id}`} className='btn btn-light btn-sm'>Ver Más 👀</Link>
          
          <button 
            className='btn btn-dark btn-sm'
            onClick={() => addToCart({ id: props.id, name: props.name, price: props.price, img: props.img })}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza;

