import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
// Overarching concept of One way Data Flow -> Dirty vs Re-Rendered (App is parent which robots and SearchBox classes)

/*Concept of STATE vs props in react:
Description of your app -> STATE is just an object that describes your application
STATE is able to change the value of searchbox (input) and change what robots are displayed
 - Because App.js has states, its considered a smart component rather than a pure function such as SearchBox
 - Piece of data that describe our app.
Props = simply things that comes out of state
Parent feed state to child component and once received, its a property that never changes.

Rule of Thumb that comes from react such as constructor and render -
when making your own method in a component, this arrow functions
Example: onSearchChange(event) changes to onSearchChange= (event) => {}
*/

// Syntax below for declaring a class - Class syntax is what makes a smart component
class App extends Component{
    // How we add state - declare the state inside a constructor
    constructor() {
        // super calls the constructor of component
        super()
        // state is something that can change and effect our app which lives in the parent component
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    // this is part of react which is why we don't use arrow functions like onSearchChange
    // Using .json to dynamically code instead of static
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) // fetch the name and email first
            .then(users => this.setState({ robots: users})); // this part is responsible to receiving the robots
    }

    // function we are creating - every time SearchBox input changes, it will trigger onSearchChange
    onSearchChange = (event) => {
        // syntax whenever we want to change state such as above: searchfield: ''
        this.setState({ searchfield: event.target.value })
    }

    // Must nest a render() inside a return statement
    render() {
        // usage of destructuring
        const { robots, searchfield } = this.state;

        // with an event we always have .target.value
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            // "this.state." is important because searchfield is a object which contains a state
        })

        // Remember 'this.state.' portion or else we get 'robots' is not defined no-undef error
        // scroll component - can be used anywhere in our app due to power of react.

        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            );
    }
}


export default App;

/*
Explanation of code

We have app component which has states of robots and searchfield
since app owns these two states, any component that has state uses the class syntax which allows
the usage of the constructor function to create this.state which is what changes in an app/describes an app.

The virtual DOM is just a javascript object that collects states and react uses those states to render and pass them
down as props to components in the return statement. The components that are just functions can just render.

App will always look the same due to our program structuring of pure functions (one job/task with one input/output)
State is managed in the render function. App is only thing that can change states.
However, props can be passed down into the render function such as onSearchChange to the SearchBox.
Then the SearchBox - every time there's an onSearchChange on the input, it lets the app know that a change was made
and to run the onSearchChange function with the event and update the search field in the constructor from an
empty string '' to whatever the given input was. 

From here, we can communicate with the CardList and tell it to filter the this.state.robots to only 'includes'
whatever is in the searchfield. Then instead of passing this.state.robots, we pass the filteredRobots.

Note that robot never changes, but we created a new array called filteredRobots and we always pass that down.

*/