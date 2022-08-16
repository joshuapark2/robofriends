import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
// Overarching concept of One way Data Flow -> Dirty vs Re-Rendered (App is parent which robots and SearchBox classes)

/*Concept of STATE vs props in react:
Description of your app -> STATE is just an object that describes your application
STATE is able to change the value of searchbox (input) and change what robots are displayed
Props = simply things that comes out of state
Parent feed state to child component and once received, its a property that never changes.

Rule of Thumb that comes from react such as constructor and render -
when making your own method in a component, this arrow functions
Example: onSearchChange(event) changes to onSearchChange= (event) => {}
*/

// Syntax below for declaring a class
class App extends Component{
    // How we add state - declare the state inside a constructor
    constructor() {
        // super calls the constructor of component
        super()
        // state is something that can change and effect our app which lives in the parent component
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    // function we are creating - every time SearchBox input changes, it will trigger onSearchChange
    onSearchChange = (event) => {
        // syntax whenever we want to change state such as above: searchfield: ''
        this.setState({ searchfield: event.target.value })
    }

    // Must nest a render() inside a return statement
    render() {
        // with an event we always have .target.value
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            // "this.state." is important because searchfield is a object which contains a state
        })
        
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;

/*

*/