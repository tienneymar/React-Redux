import React from "react";
import Color from "../HOC/Color";
import { withRouter } from "react-router";
import logo from "../../assets/images/image.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todo");
  //   }, 3000);
  // }
  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };
  handleCreateUser = () => {
    this.props.addUserRedux();
  };
  render() {
    // console.log(this.props);
    let listUser = this.props.dataRedux;

    return (
      <>
        <div>Đại hội Thể thao Đông Nam Á 2021</div>
        <div>
          <br />
          <img src={logo} />
        </div>
        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1}-{item.name}-{item.channel}
                  &nbsp; &nbsp;
                  <span onClick={() => this.handleDeleteUser(item)}>X</span>
                  &nbsp; &nbsp;
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Them Moi</button>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.user };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
