import React, { Component } from "react";
import axios from "axios";

export class UpdateItem extends Component {
  state = {
    title: this.props.itemProp.title,
    body: this.props.itemProp.body
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    const { _id } = this.props.itemProp
    console.log(_id)

    axios
      .put(`http://localhost:4000/api/v1/todos/${_id}`, { title, body })
      .then(() => {
        this.props.getToDoListProp(); // to show newly added items
        this.props.toggleEditProp() // to toggle edit form back to off
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />

          <label>Body:</label>
          <textarea
            name="body"
            value={this.state.body}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UpdateItem;