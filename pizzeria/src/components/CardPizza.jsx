function CardPizza (props) {
  return (
    <div className='card' style={{ width: '100%' }}>
      <img src={props.img} className='card-img-top' alt='pizza' />
      <div className='card-body'>
        <h5 className='card-title'>Pizza {props.name}</h5>
        <hr />
        <p><b>Ingredientes:</b></p>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {props.ingredients.map((ingrediente, index) => (
            <li key={index} className='ingrediente-item'>🍕 {ingrediente}</li>
          ))}
        </ul>
        <hr />
        <h4 className='text-center'>Precio: ${props.price.toLocaleString('es-CL')}</h4>
        <br />
        <div className='d-flex justify-content-between'>
          <button className='btn btn-light btn-sm'>Ver Más 👀</button>
          <button className='btn btn-dark btn-sm'>Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
