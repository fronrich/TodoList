import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Class which represents each individual item in the
// todos array
// nested in class Todos in Todos.js
export class TodoItem extends Component {
    // computes the style of an item on the list
    getStyle = (key) => {
        // ColorVal
        const gradIntensity = 17;
        var redVal = (255 - (gradIntensity * key)).toString(16);
        var greenVal = (gradIntensity * key).toString(16);
        var finalColor = '#' + redVal + greenVal + '00';
        console.log('finalColor is:' + finalColor + ' with key of: ' + key);
        // check if completed
        return (
            this.props.todo.completed ? {
                backgroundColor: 'white',
                color: 'blue',
                borderBottom: '1px blue solid'

            } : {
                backgroundColor: finalColor,
                borderBottom: '1px #fff solid'
            }
        )
    }

    render() {
        // the markComplete on this level must be traced back to App.js
        return(
            <div style = {this.getStyle(this.props.todo.id)}>
                <p>
                    <input type="checkbox" onChange = {this.props.markComplete}/> {' '}
                    {this.props.todo.title}
                </p>
            </div>
        );
    }
}

// Todos data must come from an object
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}



// Styling constants
const itemStyle = {
    backgroundColor: 'red'
}

export default TodoItem;
