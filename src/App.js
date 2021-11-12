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

        </nav>
      </header>
    </div>
  );
};
export default App;
