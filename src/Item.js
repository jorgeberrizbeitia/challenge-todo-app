import React, { Component } from "react";
import UpdateItem from "./UpdateItem";

export class Item extends Component {
  state = {
    toggleEditForm: false
  };

  toggleEdit = () => {
    if (this.state.toggleEditForm) {
      this.setState({ toggleEditForm: false });
    } else {
      this.setState({ toggleEditForm: true });
    }
  };

  render() {
    const { itemProp, deleteItemProp, getToDoListProp } = this.props;
    return (
      <div>
        <div>
          <h2>Title:{itemProp.title}</h2>
          <h4>Title:{itemProp.body}</h4>
          <button onClick={() => deleteItemProp(itemProp._id)}>DELETE</button>
          <button onClick={() => this.toggleEdit(itemProp._id)}>EDIT</button>

          {this.state.toggleEditForm ? <UpdateItem itemProp={itemProp} getToDoListProp={getToDoListProp} toggleEditProp={this.toggleEdit}/> : null}
        </div>
      </div>
    );
  }
}

export default Item;
