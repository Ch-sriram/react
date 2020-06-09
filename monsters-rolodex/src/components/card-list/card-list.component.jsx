import React from 'react';
import './card-list.styles.css';

/**
 * We no longer need to render the list as props.children. We 
 * can simply use the props object to get the list of monsters.
 */

// export const CardList = props => (
//     <div className="card-list">
//         {props.monsters.map(monster => (
//             <h1 key={monster.id}> {monster.name} </h1>
//         ))}
//     </div>
// );

/**
 * Now, our CardList component only renders the monster cards 
 * onto the front-end, but it doesn't take care of the styling 
 * of each monster card. So for that reason, we'll delegate 
 * the work to be done on a single monster card, to the Card 
 * component.
 * 
 * For that to work, we need to import the Card component.
 */

import { Card } from '../card/card.component';

export const CardList = props => (
    <div className="card-list">
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);