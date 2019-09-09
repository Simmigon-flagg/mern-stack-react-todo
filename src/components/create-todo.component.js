import React, { Component } from 'react';
// import { forInStatement } from '@babel/types';

export default class CreateTodos extends Component {
    constructor(props) {
        super(props);
        // To get access to the state in the method

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,
        }

    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value,
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value,
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value,
        });
    }
    onSubmit(e) {
        e.preventDefault();

        // Backend Logic

        console.log(`To Do Description ${this.state.todo_description}`)
        console.log(`todo_responsible ${this.state.todo_responsible}`)
        console.log(`todo_priority ${this.state.todo_priority}`)
        console.log(`todo_completed ${this.state.todo_completed}`)
        console.log(`Now Go update your Database`)
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,
        });
    }
    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <p>This is the Create Todo's list component</p>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.todo_description}
                            onChange={this.onChangeTodoDescription}
                        />
                        <label>Responsible: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.todo_responsible}
                            onChange={this.onChangeTodoResponsible}
                        />

                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.todo_priority === 'Low'}
                                    onChange={this.onChangeTodoPriority}
                                />
                                <label>Low </label>

                            </div>
                            <div className="form-check form-check-inline">
                                
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.todo_priority === 'Medium'}
                                    onChange={this.onChangeTodoPriority}
                                />
                                <label>Medium </label>

                            </div>
                            <div className="form-check form-check-inline">
                                
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.todo_priority === 'Medium'}
                                    onChange={this.onChangeTodoPriority}
                                />
                                <label>High </label>

                            </div>
                        </div>

                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create ToDo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}