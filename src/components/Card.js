import React from 'react';
import './Card.css';

const Card = ({ id, name, email}) => {
    return(
        <div className='bg-card dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={ `https://robohash.org/${id}?200x200` } alt='robot'/>
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;