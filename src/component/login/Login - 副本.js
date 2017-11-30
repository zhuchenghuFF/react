import React from 'react';
// import ReactDOM from 'react-dom';
// import {hashHistory} from 'React-router'
import Http from '../../service/httpService'
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            username: "",
            password: "",
        };
  }
  static defaultProps = {
    loginSystem:()=>{}
  }
  changeUsername = (value) => {
    this.setState({username: value});
  }
  changePassword = (value) => {
    this.setState({password: value});
  }
  // static propTypes = {
  //       loginSystem: PropTypes.func
  //   }
  handleClick = () => {
    // console.log('submit');
    // hashHistory.push('/Layout')
    var params = {
      "url" :'/eoffice10/server/public/api/auth/login',
      param: {
        password: this.state.password,
        user_account: this.state.username,
      }
    }
    // var props = this.props;
    Http.post(params).then((response) => {
        console.log(response);
        if(response.status == "1"){
            localStorage.api_token = response.data.token;
            this.props.loginSystem(true)
        }else{
            alert(response.errors[0].message);
        }
    })
    
  }
    render() {
        return (<div className="loginForm">
              <div className="eleItem">
                <label>用户名：</label><LoginUserName username={this.changeUsername.bind(this)}/>
              </div>
              <div className="eleItem">
                <label>密&nbsp;&nbsp;码：</label><LoginUserPassword password={this.changePassword.bind(this)}/>
              </div>
              <div className="btnItem">
                  <input type="submit" name="button" id="button" value="登录" onClick={this.handleClick} />
              </div>
        </div>);
    }
};

class LoginUserName extends  React.Component{
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		}
	}
  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.props.username(event.target.value);
  }
  render() {
    var value = this.state.value;
    return <input type="text" name="username" value={value} placeholder="请输入用户名" onChange={this.handleChange} />;
  }
};

class LoginUserPassword extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		}
	}
  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.props.password(event.target.value);
  }
  render() {
    var value = this.state.value;
    return <input type="text" ref="password" name="password" value={value} placeholder="请输入密码" onChange={this.handleChange} />;
  }
};
export default Login;