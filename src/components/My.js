import React from 'react'
import {
  Link
} from 'react-router-dom'
import '../style/my.css'
import "../iconfont/iconfont.css"

export default class My extends React.Component {
  constructor() {
    super();
    this.handle = this.handle.bind(this);
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    if (localStorage.userName) {
      this.refs.user.style.display = "none";
      this.refs.loginuser.style.display = "flex";
      this.setState({
        list: localStorage.userName
      })
      console.log("1")
    }
  }

  handle(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="my">
                <div className="top">
                    <div className="set">
                      <Link to={'/setting'}>
                         <div>
                        <i className="icon iconfont icon-shezhi"></i>
                        </div>
                      </Link>
                    </div>
                    <Link className="user" to={'login'}>
                    
                        <div className="headImg">
                             <div>
                            <img src="unlogin.png" alt=""/>
                            </div>
                        </div>
                        <div className="login" ref="user">

                            <p>登录/注册</p>
                        </div>
                        <div className="userName1" ref="loginuser" onClick={(e)=>this.handle(e)} style={{display:"none"}}>

                                <p>{this.state.list}</p>
                        </div>
                    
                    </Link>
                    <div className="email">
                    <div>
                        <i className="icon iconfont icon-youjian1"></i>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="orders">
                        <div className="all">
                            <i className="icon iconfont icon-dingdan"></i>
                            <p>全部订单</p>
                        </div>
                         <div className="waitmoney">
                            <i className="icon iconfont icon-daifukuan"></i>
                            <p>待付款</p>
                        </div>
                         <div className="waitgoods">
                            <i className="icon iconfont icon-truck"></i>
                            <p>待收货</p>
                        </div>
                         <div className="assess">
                            <i className="icon iconfont icon-daipingjia"></i>
                            <p>待评价</p>
                        </div>
                         <div className="change">
                            <i className="icon iconfont icon-tuihuanhuo1"></i>
                            <p>退换货</p>
                        </div>
                    </div>
                     <div className="fortune">
                        <div className="money">
                            <i className="icon iconfont icon-dingdan"></i>
                            <p>余额</p>
                        </div>
                         <div className="coupon">
                            <i className="icon iconfont icon-daifukuan"></i>
                            <p>优惠券</p>
                        </div>
                         <div className="integral">
                            <i className="icon iconfont icon-truck"></i>
                            <p>积分</p>
                        </div>
                         <div className="cards">
                            <i className="icon iconfont icon-daipingjia"></i>
                            <p>礼品卡</p>
                        </div>
                         <div className="income">
                            <i className="icon iconfont icon-shouyi"></i>
                            <p>收益</p>
                        </div>
                    </div>
                            
                    <div className="isMy">
                        <div className="isTop">
                            <div className="buy">
                                <i className="icon iconfont icon-icongwd"></i>
                                <p>购物袋</p>
                            </div>
                             <div className="collection">
                                 <i className="icon iconfont icon-sccollection"></i>
                                 <p>收藏</p>
                            </div>
                             <div className="attention">
                                <i className="icon iconfont icon-pinpai-"></i>
                                <p>关注品牌</p>
                            </div>
                             <div className="vip">
                              <i className="icon iconfont icon-VIP"></i>
                              <p>珍品会员</p>
                            </div>
                        </div>
                        <div className="isBottom">
                            <div className="footprint">
                                <i className="icon iconfont icon-zuji"></i>
                                <p>我的足迹</p>
                            </div>
                             <div className="activity">
                                <i className="icon iconfont icon-kaifangjijin"></i>
                                <p>珍会花</p>
                            </div>
                             <div className="online">
                             <i className="icon iconfont icon-kefu1"></i>
                             <p>在线客服</p>
                            </div>
                             <div className="help">
                             <i className="icon iconfont icon-help"></i>
                             <p>帮助/反馈</p>
                            </div>
                        </div>
                    </div>
                    <div className="telMe">
                        <p><i className="icon iconfont icon-rexiandianhua"></i>时尚服务热线  400-009-6666</p>
                    </div>
                </div>
            </div>
    )
  }
}