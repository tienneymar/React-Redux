import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleClick = () => {
    if (!this.state.title) {
      toast.error("Error Text!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10),
      title: this.state.title,
    };
    this.props.AddNewTodo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleChangeTitle(event)}
        />
        <button onClick={() => this.handleClick()} className="add">
          ADD
        </button>
      </div>
    );
  }
}
export default AddTodo;
