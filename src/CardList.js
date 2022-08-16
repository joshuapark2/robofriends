import React from 'react';
import Card from './Card';

// This CardList.js is an example of a pure function - Receives an input and returns same output - deterministic
// Reads the props received which is ({ robots }) and renders out return statement
// Components are called pure components, they don't need to know anything other than receive and return
// It's nice because we will always know our inputs and outputs
// ^^ Entire concept of props - main idea that they never change

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => { /* map instead of for.while loop */
                    return (
                            <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;