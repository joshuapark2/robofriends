import React from 'react'; //building function
// ^ needed because we are writing jsx
// Below we added the parameter of property or props
const Card = ({ name, email, id }) => {
    return ( // make sure to return one element at a time (div element)
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name /*curly brackets important because js syntax */}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;