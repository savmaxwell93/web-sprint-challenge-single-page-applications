import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../index.css';
import axios from 'axios';
import Confirmation from './Confirmation';

const Pizza = (props) => {
    //State

    return (
        <div className='order-form'>
            <h1>Build Your Pizza!</h1>
            <div className='form'>
                
            </div>


            <nav>
                <Link to='/Confirmation'>
                    <button>Complete Order</button>
                </Link>
            </nav>

        </div>
    )
}

export default Pizza;