import React, { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios'
import schema from './validation/formSchema'
import './index.css'

import Pizza from './components/Pizza'
import Confirmation from './components/Confirmation';

// Initial States
const initialOrderForm = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  ham: false,
  chicken: false,
  pineapple: false,
  greenPepper: false,
  onion: false,
  special: '',
}

const initialErrorText = {
  name: '',
  size: '',
  pepperoni: '',
  sausage: '',
  ham: '',
  chicken: '',
  pineapple: '',
  greenPepper: '',
  onion: '',
  special: '',
}

const initialOrders = []
const initialDisabled = true

const App = () => {

  //States
  const [orders, setOrders] = useState(initialOrders)
  const [pizzaOrder, setPizzaOrder] = useState(initialOrderForm);
  const [errorText, setErrorText] = useState(initialErrorText);
  const [disabled, setDisabled] = useState(initialDisabled);

  //Helpers
  const newPizzaOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.error(err))
      .finally(() => {
        setPizzaOrder(initialOrderForm)
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrorText({ ...errorText, [name]: '' }))
    .catch(err => setErrorText({ ...errorText, [name]: err.errors[0]}))
  }

  //Event Handlers
  const onChange = (name, value) => {
    validate(name, value);
    setPizzaOrder({ ...pizzaOrder, [name]: value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      name: pizzaOrder.name,
      size: pizzaOrder.size,
      pepperoni: ['pepperoni'],
      sausage: ['sausage'],
      ham: ['ham'],
      chicken: ['chicken'],
      pineapple: ['pineapple'],
      greenPepper: ['greenPepper'],
      onion: ['onion'],
      special: pizzaOrder.special,
    }

    newPizzaOrder(newOrder);

  }

  //Sde Effects
  useEffect(() => {
    schema.isValid(pizzaOrder).then(valid => setDisabled(!valid))
  }, [pizzaOrder])

  return (
    <div className='App'>
      <header>
        <h1>Lambda Eats</h1>
        <p>Get the best pizza in town delivered to your door!</p>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/pizza' id='order-pizza'>Order Here!</Link>
        </nav>
      </header>
      <Switch>
        <Route path='/pizza'>
          <Pizza 
            values={pizzaOrder}
            change={onChange}
            submit={onSubmit}
            disabled={disabled}
            errors={errorText}
          />
        </Route>
        <Route path='/Confirmation'>
          <Confirmation />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
