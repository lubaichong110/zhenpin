import React from 'react'
import {
  connect
} from 'react-redux'
import {
  Tabs,
  InputItem,
  Button
} from 'antd-mobile';
import {
  createForm
} from 'rc-form';
import {
  Toast,
  WingBlank,
  Icon
} from 'antd-mobile';
import '../style/login.css'

const tabs = [{
  title: "登录"
}, {
  title: "注册"
}, ];

class LoginUI extends React.Component {
  componentDidMount() {
    // this.props.fetchRegist();

  }
  constructor() {
    super();
    this.regist = this.regist.bind(this);
    this.login = this.login.bind(this);
  }
  regist() {

    var username = this.refs.username.value;
    var psw = this.refs.psw.value;
    // console.log('./api/register?username=' + username + '&psw=' + psw)
    fetch('./api/register?username=' + username + '&psw=' + psw).then((res) => {
      return res.json()
    }).then((data) => {

      if (data == 1) {
        console.log("成功");

        function successToast() {
          Toast.success('注册成功 !!!', 1);

        }
        successToast();
        setTimeout(function() {
          window.location.href = "/Login";

        }, 1000)
      }
      if (data == 2) {
        // console.log("该用户已被注册")
        function failToast() {
          Toast.fail('该用户已经注册 !!!', 1);
        }
        failToast();
      }
      if (data == 0) {
        // console.log("失败")
        function failToast() {
          Toast.fail('注册失败 !!!', 1);
        }
        failToast();
      }
      this.refs.username.value = "";
      this.refs.psw.value = "";
    })
  }
  login() {
    var loginName = this.refs.loginName.value;
    var loginPsw = this.refs.loginPsw.value;
    fetch("./api/login?username=" + loginName + "&psw=" + loginPsw).then((res) => {
      return res.json();
    }).then((data) => {
      if (data == 1) {
        // console.log("登录成功");
        function successToast() {
          Toast.success('登陆成功 !!!', 1);

        }
        successToast();
        setTimeout(function() {
          window.location.href = "/";
        }, 1000)
      }
      if (data == 0) {
        // console.log("用户名或密码错误")
        function failToast() {
          Toast.fail('用户名或密码错误 !!!', 1);
        }
        failToast();
      }
      this.refs.loginName.value = "";
      this.refs.loginPsw.value = "";
    })
  }
  back() {
    window.location.href = "/my";
  }

  render() {

    return (
      <div className="loginpage">
          <div className="back" onClick={this.back}>
            <i className="icon iconfont icon-ddqx"></i>
          </div>
                <div className="loginTab">
                    <Tabs tabs={tabs}
                      initialPage={0}
                      onChange={(tab, index) => { console.log('onChange', index, tab); }}
                      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                      <div className="childBox">
                       <div className="login">
                          <div><input className="userName" ref="loginName" type="text" placeholder="手机号/用户名/邮箱"/></div>
                           <div><input className="psw" ref="loginPsw" type="password" placeholder="密码"/></div>
                        
                           
                           <Button className="btn" onClick={this.login} activeStyle={false} type="primary">登录</Button>
                         
                        <p className="forget">忘记密码？</p>
                       </div> 
                       <div className="tellme">
                         <div className="weChart">
                            <div className="box">
                                <i className="icon iconfont icon-icon-"></i>
                                
                            </div>
                            <p>微信登录</p>
                         </div>

                         <div className="qq">
                            <div className="box">

                          <i className="icon iconfont icon-qq"></i>
                          </div>
                                <p>QQ登录</p>
                        </div>
                       </div>

                      </div>
                      <div className="childBox childBox2" >
                      <div className="regiser">
                        <div> <input ref="username" className="phone" type="text" placeholder="手机号"/><button className="getPwd">获取验证码</button></div> 
                        <div><input type = "text" placeholder = "短信验证码" / ></div>
                        <div><input ref="psw" type="password" placeholder="6-20位登录密码"/></div>
                        <br / >
                        <div className="b"><button onClick={this.regist} className="regiserBtn">注册</button> </div>
                        <p> 注册代表同意 <span > 注册协议 </span></p>
                       
                      </div>
                      </div>
                    
                    </Tabs>
                    
                </div> </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Regist: state.Regist
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRegist: () => {
      fetch("/api/getData").then((res) => {
        return res.json();
      }).then((json) => {
        dispatch({
          type: "GET_REGIST",
          payload: json
        })
        console.log()
      })
    }
  }
}
const Login = connect(mapStateToProps, mapDispatchToProps)(LoginUI);
export default Login;