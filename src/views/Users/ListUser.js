import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "../Users/listuser.scss";
class ListUser extends React.Component {
  state = {
    ListUser: [],
  };
  async componentDidMount() {
    // axios.get('https://reqres.in/api/users?page=2')
    // .then(res=>{
    //  console.log(res.data.data);
    // })
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      ListUser: res && res.data.data ? res.data.data : [],
    });
  }
  handleDetail = (user) => {
    this.props.history.push(`/user/${user.id}`);
    console.log(this.props);
  };
  render() {
    let { ListUser } = this.state;
    return (
      <div className="list-user">
        <div className="title">Fetch list user</div>
        <div className="list-user-content">
          {ListUser &&
            ListUser.length > 0 &&
            ListUser.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleDetail(item)}
                >
                  {index + 1}-{item.first_name}-{item.last_name}
                  <div>
                    <img
                      style={{ width: 70, height: 50 }}
                      src={item.avatar}
                    ></img>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
