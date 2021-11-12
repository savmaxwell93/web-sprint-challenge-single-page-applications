import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './index.css'

import Pizza from './components/Pizza'
import Confirmation from './components/Confirmation';


const App = () => {
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
          <Pizza />
        </Route>
        <Route path='/Confirmation'>
          <Confirmation />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
