import React from "react";
class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };
  handleOnclickDelete = (job) => {
    console.log("Check log", job);
    this.props.deleteJob(job);
  };
  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  render() {
    //console.log("check props", this.props);
    // let { name, age, address, arrJob } = this.props;
    let { arrJob } = this.props;
    let { showJob } = this.state;
    let check = showJob === true ? "ShowJob= true" : "ShowJob=false";
    //console.log("Check Haha", check);
    return (
      <>
        {/* <div>
          ChildComponent:{name}-{age}-{address}
        </div> */}
        {showJob === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-list">
              {arrJob.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title}-{item.salary}
                    <></>
                    <button onClick={() => this.handleOnclickDelete(item)}>
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let { arrJob } = props;
//   return (
//     <>
//       <div className="job-list">
//         {arrJob.map((item, index) => {
//           if (+item.salary >= 500)
//             return (
//               <div key={item.id}>
//                 {item.title}-{item.salary} $
//               </div>
//             );
//         })}
//       </div>
//     </>
//   );
// };
export default ChildComponent;
