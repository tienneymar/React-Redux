import React from "react";
import "../Todos/ListTodo.scss";
import AddTodo from "../Todos/AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Ronaldo" },
      { id: "todo2", title: "NeyMar JR" },
      { id: "todo3", title: "Leo Messi" },
      { id: "todo4", title: "Alexis Sanchez" },
      { id: "todo5", title: "Romeo Lukaku" },
    ],
    editTodo: {},
  };
  AddNewTodo = (todo) => {
    // let currentListTodo = this.state.listTodos;
    this.setState({
      //   listTodos:this.state.listTodos,
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Thêm Thành Công!");
  };
  handleDelete = (todo) => {
    let current = this.state.listTodos;
    current = current.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: current,
    });
    toast.success("Delete Thành Công!");
    // console.log("check", todo);
  };
  handleEdit = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];

      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.info("Update Success!");
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };
  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <p>Create TodoApp Basic </p>
        <div className="list-container">
          <AddTodo AddNewTodo={this.AddNewTodo} />

          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1}-{item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1}-
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnchangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1}-{item.title}
                          </span>
                        )}
                      </>
                    )}
                    {/* <input value={item.title} /> */}
                    <button
                      onClick={() => this.handleEdit(item)}
                      className="edit"
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      onClick={() => this.handleDelete(item)}
                      className="delete"
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default ListTodo;
