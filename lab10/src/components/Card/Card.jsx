import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div class='card'>
            <img
                className='picture'
                src={props.picture}
                alt='картинка'
            />
            <div class='card-header'>{props.number_of_block} блок</div>
            <div class='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
    );
};

export default Card;
