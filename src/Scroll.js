import React from 'react';

const Scroll = (props) => {
    return(
        // javascript expression: {}, within bracket we are returning an object {{}} containing css styles
        <div style={{overflow: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;

/*
In App.js, scroll is not a self-closing component, it wraps components.
How do we render what is inside solution?

So far the concepts of props and state were learned, last concept is children which is
    <CardList robots={filteredRobots} 

Every props object has children and the block of code written regarding <Scroll> </Scroll> uses the concept that
components can wrap other components within them using props.children

*/