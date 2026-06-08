import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from './pizzas.js'

function Home () {
  return (
    <div>
      <Header />
      <div className='container mt-4 mb-4'>
        <div className='row'>
          {pizzas.map((pizza) => (
            <div className='col-12 col-md-4 mb-4' key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home