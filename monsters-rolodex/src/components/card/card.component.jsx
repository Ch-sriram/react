import React from 'react';

/**
 * To add the styling to each of the card component, we simply
 * write the rules of the styling in ./card.styles.css and 
 * then import it here.  
 */

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img
            alt="monster"
            src={`https://robohash.org/${props.monster.name}.png?size=256x256`}
        />

        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div>
);

/**
 * We can see that we have added the HTML elements inside the 
 * JavaScript like syntax. This is the amazing language of JSX.
 * It is extremely intuitive to bind both JS & HTML.
 */