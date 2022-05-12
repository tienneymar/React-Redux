import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponents from "./AddComponents";
class MyComponent extends React.Component {
  state = {
    arrJob: [
      { id: "abcd1", title: "developer", salary: "550" },
      { id: "abcd2", title: "Tester", salary: "400" },
      { id: "abcd3", title: "Project Managers", salary: "1550" },
    ],
  };
  addNewJob = (job) => {
    this.setState({
      arrJob: [...this.state.arrJob, job],
    });
    console.log("Check", job);
  };
  deleteJob = (job) => {
    let currenJob = this.state.arrJob;
    currenJob = currenJob.filter(item => item.id !== job.id);
    this.setState({
      arrJob: currenJob,
    });
  };
  render() {
    return (
      <>
        <AddComponents addNewJob={this.addNewJob} />

        <ChildComponent
          arrJob={this.state.arrJob}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}
export default MyComponent;
