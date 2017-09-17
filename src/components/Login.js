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
import '../style/login.css'

const tabs = [{
  title: "登录"
}, {
  title: "注册"
}, ];

class LoginUI extends React.Component {
  componentDidMount() {
    // this.props.fetchListData();
  }
  constructor() {
    super();

  }



  render() {

    return (
      <div className="loginpage">
                <div className="loginTab">
                    <Tabs tabs={tabs}
                      initialPage={0}
                      onChange={(tab, index) => { console.log('onChange', index, tab); }}
                      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                      <div className="childBox">
                       <div>
                       
                            <InputItem className="userName"   
                                clear
                                placeholder="手机号/用户名/邮箱"
                                autoFocus
                              ></InputItem>
                       
                         <InputItem
                            
                            type="password"
                            placeholder="密码"
                          ></InputItem>
                           
                           <Button className="btn"  activeStyle={false} type="primary">登录</Button>
                         
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
                        <div> <input className="phone" type="text" placeholder="手机号"/><button className="getPwd">获取验证码</button></div> 
                        <div><input type = "text" placeholder = "短信验证码" / ></div>
                        <div><input type="password" placeholder="6-20位登录密码"/></div>
                        <br / >
                        <div className="b"><button className="regiserBtn">注册</button> </div>
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

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // fetchListData: () => {
    //     fetch("/api/getdata").then((res) => {
    //         return res.json();
    //     }).then((json) => {
    //         dispatch({
    //             type: "GET_HOME_LIST",
    //             payload: json
    //         })
    //     })
    // }
  }
}
const Login = connect(mapStateToProps, mapDispatchToProps)(LoginUI);
export default Login;