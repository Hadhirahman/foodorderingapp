import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {
        Name: "",
        Location: "",
      },
    };
  }

  async componentDidMount() {
    const profile = await fetch("https://api.github.com/users/hadhirahman");

    const jsonProfile = await profile.json();

    this.setState({
      userinfo: jsonProfile,
    });
  }



  

  render() {
    console.log(this.state.userinfo);
    const {name,location,
        url}=this.state.userinfo
    return (
      <div>
        <img src="https://avatars.githubusercontent.com/u/127327257?v=4"/>
        <h1>Name:{name}</h1>
        <h3>Age:</h3>
        <h3>Location:{location}</h3>
        <h3>gitProfile:{url}</h3>
      </div>
    );
  }
}
export default UserClass;
