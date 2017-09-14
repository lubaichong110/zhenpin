import React from 'react'
import '../style/my.css'
import "../iconfont/iconfont.css"

export default class My extends React.Component {
    render() {
        return (
            <div className="my">
                <div className="top">
                    <div className="set">
                         <div>
                        <i className="icon iconfont icon-shezhi"></i>
                        </div>
                    </div>
                    <div className="user">
                        <div className="headImg">
                             <div>
                            <img src="unlogin.png" alt=""/>
                            </div>
                        </div>
                        <div className="login">
                            <p>登录/注册</p>
                        </div>
                    </div>
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
                        </div>
                        <div className="isBottom"></div>
                    </div>
                </div>
            </div>
        )
    }
}