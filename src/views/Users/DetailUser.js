import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  withRouter,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import axios from "axios";
import ListUser from "./ListUser";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    let id = this.props.math.params.id;
    let res = await axios.get(`https://reqres.in/api/users/${id}`);
    this.setState({
      user: res & res.data & res.data.data ? res.data.data : {},
    });
  }
  handleBack = () => {
    this.props.history.push("/user");
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(ListUser).length === 0;

    return (
      <>
        <div>DetailUser :</div>
        {isEmptyObj === false && (
          <>
            <div>
              Users Name : {user.first_name} + {user.last_name}
            </div>
            <div>Users Email : {user.email}</div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>
              <button type="button" onClick={() => this.handleBack()}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default withRouter(DetailUser);
