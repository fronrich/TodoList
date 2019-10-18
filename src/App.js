import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'take out the trash',
                completed: false
            },
            {
                id: 2,
                title: 'potluck',
                completed: false
            },
            {
                id: 3,
                title: 'interview',
                completed: false
            },
            {
                id: 4,
                title: 'cello lessons',
                completed: false
            },
            {
                id: 5,
                title: 'produce',
                completed: true
            },
            {
                id: 6,
                title: 'buy groceries',
                completed: false
            },
            {
                id: 7,
                title: 'play minecraft',
                completed: false
            },
            {
                id: 8,
                title: 'misc',
                completed: false
            },
            {
                id: 9,
                title: 'misc',
                completed: false
            },
            {
                id: 10,
                title: 'misc',
                completed: false
            },
            {
                id: 11,
                title: 'misc',
                completed: false
            },
            {
                id: 12,
                title: 'misc',
                completed: false
            },
        ]
    };

    render() {
        console.log(this.state.todos)
        return (
            <div className = "App">
            <h1> Fronrich's Priority Queue </h1>
            {/* Comments in return must be written like this*/}
            {/* adds Todos component to the app*/}
            <Todos todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
