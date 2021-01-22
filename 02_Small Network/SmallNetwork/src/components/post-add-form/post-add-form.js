import React, { Component } from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onInputChange(e) {
        this.setState({text: e.target.value});
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form className="bottom-panel d-flex" onSubmit={this.onSubmit.bind(this)}>
                <input
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onInputChange.bind(this)}
                    value={this.state.text}
                />
                <button className="btn btn-outline-secondary" type="submit">
                    Добавить пост
                </button>
            </form>
        );
    }
};