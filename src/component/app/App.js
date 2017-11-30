import React from 'react';
// import Reflux from 'reflux';
// import {ReactRouter, RouteHandler} from 'react-router';
import Login from '../login/Login';
import Layout from '../layout/Layout';

class App extends React.Component{
  constructor(props) {
        super(props);
        var isLogin = !!localStorage.api_token;
        this.state = {
            isLogin: isLogin,
        };
  }
  loginSystem(status){
    this.setState({isLogin: status});
  }
  componentDidMount(props) {

  }
  render() {
    return (
      <div>
      {
        this.state.isLogin ? <Layout number="100"/> : <Login loginSystem={this.loginSystem.bind(this)}/>
      }
      </div>
      );
  }
}
export default App;
