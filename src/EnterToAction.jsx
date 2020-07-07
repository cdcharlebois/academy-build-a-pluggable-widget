import { Component, createElement } from "react";


import "./ui/EnterToAction.css";

export default class EnterToAction extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event){
        const { attribute } = this.props;
        attribute.setValue(event.target.value);
    }

    handleKeyPress(event){
        const { action } = this.props;
        if (event.which === 13 && action.canExecute){
            action.execute();
        }
    }

    render() {
        const { attribute } = this.props;
        return (
            <input
                type="text"
                className={`form-control ${this.props.class}`}
                value={attribute.value}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
            />
        )
    }
}
