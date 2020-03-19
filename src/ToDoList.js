import React, { Component } from "react";
import axios from "axios";
import AddItem from "./AddItem";
import Item from "./Item";

class ToDoList extends Component {
  state = {
    ToDoList: [],
    toggleEditForm: false
  };

  getToDoList = () => {
    axios.get("http://localhost:4000/api/v1/todos").then(apiResponse => {
      this.setState({ ToDoList: apiResponse.data });
    });
  };

  deleteItem = id => {
    axios
      .delete(`http://localhost:4000/api/v1/todos/${id}`)
      .then(() => {
        console.log(`Item ${id} deleted`);
        this.getToDoList();
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getToDoList();
  }

  render() {
    const { ToDoList } = this.state;

    return (
      <div>
        <AddItem getToDoListProp={this.getToDoList} />

        {ToDoList.map(item => {
          return (
            <div>
              <Item itemProp={item} deleteItemProp={this.deleteItem} getToDoListProp={this.getToDoList} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ToDoList;
