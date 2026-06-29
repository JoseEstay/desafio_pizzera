import { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Home() {
const {pizzas} = useContext(PizzaContext);

  return (
    <div>
      <Header />
      <div className='container mt-4 mb-4'>
        <div className='row'>
          {pizzas.map((pizza) => (
            <div className='col-12 col-md-4 mb-4' key={pizza.id}>
              <CardPizza
                id={pizza.id}
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
  );
}

export default Home;