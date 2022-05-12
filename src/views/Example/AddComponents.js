import React from "react";

class AddComponents extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleChangetitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleClick = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Waring");
      return;
    }
    console.log("Check data", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 10),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">JobTitle:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChangetitleJob(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />

          <br />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handleClick(event)}
          />
        </form>
      </>
    );
  }
}

export default AddComponents;
