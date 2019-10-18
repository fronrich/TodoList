import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// Class which generates TodoItems based on array passed
// by App.js
class Todos extends Component {
    render() {
        /*Props is equivalent to the HTML field for labels*/
        console.log(this.props.todos);
        /* For each index in todos display info*/
        /* All objects in aray need a unique key id*/
        return this.props.todos.map (
            (currentTodoIndex) => (
                <TodoItem key = {currentTodoIndex.id} todo = {currentTodoIndex} />
            )
        );
    }
}

// Todos data must come from an array
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
