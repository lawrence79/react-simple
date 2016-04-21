'use strict';
import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);

        // Track `editing` state.
        this.state = {
            editing: false
        };
    };
    render() {
        if (this.state.editing) {
            return this.renderEdit();
        }
        return this.renderNote();
    };
    renderNote = () => {
        // If the user clicks a normal note, trigger editing logic.
        return <div onClick = { this.edit } > { this.props.task } < /div>;
    };
    edit = () => {
        // Enter edit mode.
        this.setState({
            editing: true
        });
    };
    checkEnter = (e) => {
        // The user hit *enter*, let's finish up.
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    };
    finishEdit = (e) => {
        // `Note` will trigger an optional `onEdit` callback once it
        // has a new value. We will use this to communicate the change to
        // `App`.
        //
        // A smarter way to deal with the default value would be to set
        // it through `defaultProps`.
        //
        // See the *Typing with React* chapter for more information.
        const value = e.target.value;

        if (this.props.onEdit) {
            this.props.onEdit(value);

            // Exit edit mode.
            this.setState({
                editing: false
            });
        }
    };
}
