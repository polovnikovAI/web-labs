import React, { useState } from 'react';
import pizza from '../../assets/pizza.jpg';
import cart from '../../assets/cart.png';
import './PizzaCard.css';

const PizzaCard = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <div className='pizzaCard'>
            <div className='wrapper'>
                <div className='head'>
                    <img
                        className='picture'
                        src={pizza}
                        alt='pepperoni'
                    />
                    <div className='label'>Хит сезона</div>
                </div>
                <div className='name'>Пепперони</div>
                <div className='description'></div>
                <select
                    name='size'
                    id=''>
                    <option
                        disabled
                        selected>
                        Диаметр
                    </option>
                    <option>25 см</option>
                    <option>30 см</option>
                    <option>35 см</option>
                </select>
                <div className='price'>от 550 ₽</div>
                <div className='footer'>
                    <button
                        className='count'
                        onClick={decrement}>
                        -
                    </button>
                    <span className='counter'>{count}</span>
                    <button
                        className='count'
                        onClick={increment}>
                        +
                    </button>
                    <img
                        src={cart}
                        alt='cart'
                        className='cartImage'
                        onClick={() => {
                            alert(`Количество заказанного товара: ${count}`);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;
