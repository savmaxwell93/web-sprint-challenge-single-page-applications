import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../index.css';
import axios from 'axios';
import Confirmation from './Confirmation';


const Pizza = (props) => {

    const {
        values, 
        submit, 
        change, 
        disabled, 
        errors
    } = props

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <div className='order-form'>
            <h1>Build Your Pizza!</h1>
                <form id='pizza-form' onSubmit={onSubmit}>
                    <label>Enter Your Name:
                        <input
                            id='name-input'
                            type='text'
                            name='name'
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>
                    <label>Choose Pizza Size:
                        <select
                            id='size-dropdown'
                            className='size'
                            name='size'
                            onChange={onChange}
                            value={values.size}
                        >
                            <option value=''>--Choose a Size--</option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                        </select>
                    </label>
                    <label>Choose Your Toppings:
                        <input
                            id='toppings'
                            name='pepperoni'
                            type='checkbox'
                            checked={values.pepperoni}
                            onChange={onChange}
                        />Pepperoni
                        <input
                            id='toppings'
                            name='sausage'
                            type='checkbox'
                            checked={values.sausage}
                            onChange={onChange}
                        />Sausage
                        <input
                            id='toppings'
                            name='ham'
                            type='checkbox'
                            checked={values.ham}
                            onChange={onChange}
                        />Ham
                        <input
                            id='toppings'
                            name='chicken'
                            type='checkbox'
                            checked={values.chicken}
                            onChange={onChange}
                        />Chicken
                        <input
                            id='toppings'
                            name='pineapple'
                            type='checkbox'
                            checked={values.pineapple}
                            onChange={onChange}
                        />Pineapple
                        <input
                            id='toppings'
                            name='greenPepper'
                            type='checkbox'
                            checked={values.greenPepper}
                            onChange={onChange}
                        />Green Pepper
                        <input
                            id='toppings'
                            name='onion'
                            type='checkbox'
                            checked={values.onion}
                            onChange={onChange}
                        />Onion
                    </label>
                    <label>Any Special Instructions?
                        <textarea
                            id='special-text'
                            name='special'
                            value={values.special}
                            onChange={onChange}
                        />
                    </label>
                    <button disabled={disabled} id='order-button'>Complete Order</button>
                </form>
            <div className='errors'>
                    <div>{errors.name}</div>
            </div>

        </div>
    )
}

export default Pizza;