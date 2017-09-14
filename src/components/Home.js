import React from 'react'
import {
    connect
} from 'react-redux'
import '../style/home.css'
import "../iconfont/iconfont.css"
import ReactSwipe from 'react-swipes'


class HomeUI extends React.Component {
    componentDidMount() {
        // this.props.fetchListData();
    }
    render() {
        return (
            <div className="home">
                <div className="logo"></div>
                <ul className="nav">
                    <li>
                        <i className="icon iconfont icon-qiandao"></i>
                        <p>签到</p>
                    </li>
                     <li>
                        <i className="icon iconfont icon-yaoyiyao"></i>
                        <p>摇一摇</p>
                    </li>
                     <li>
                        <i className="icon iconfont icon-feiji1"></i>
                        <p>全球购</p>
                    </li>
                     <li>
                        <i className="icon iconfont icon-new"></i>
                        <p>新品</p>
                    </li>
                </ul>
                <ul>
                <div className="seckill">
                    <div className="title">
                        <p>秒杀</p>
                        <i className="icon iconfont icon-xiangyou1"></i>
                    </div>
                    <div className="seckillShop">
                        <div className="seckillList">
                            <img src="https://pic2.zhen.com/uploadimg1/300_c3b52036c720c5c4953de4e27ff866c0.jpg" />
                            <p className="seckillName">Versace Jeans Couture</p>
                            <p className="seckillPrice">￥339</p>
                        </div>
                        <div className="seckillList">
                            <img src="https://pic2.zhen.com/uploadimg1/300_c3b52036c720c5c4953de4e27ff866c0.jpg" />
                            <p className="seckillName">Versace Jeans Couture</p>
                            <p className="seckillPrice">￥339</p>
                        </div>
                        <div className="seckillList">
                            <img src="https://pic2.zhen.com/uploadimg1/300_c3b52036c720c5c4953de4e27ff866c0.jpg" />
                            <p className="seckillName">Versace Jeans Couture</p>
                            <p className="seckillPrice">￥339</p>
                        </div>
                        <div className="seckillList">
                            <img src="https://pic2.zhen.com/uploadimg1/300_c3b52036c720c5c4953de4e27ff866c0.jpg" />
                            <p className="seckillName">Versace Jeans Couture</p>
                            <p className="seckillPrice">￥339</p>
                        </div>
                    </div>
                </div>
                <div className="active">
                    <img src="https://pic2.zhen.com/uploadimg1/c1969ee79a6c44544f278a738bd7f547.gif" alt=""/>
                    <img src="https://pic2.zhen.com/uploadimg1/c1969ee79a6c44544f278a738bd7f547.gif" alt=""/>
                </div>
                <div className="shopList">
                    
                    <div className="shopInfo">
                        <div className="show">
                            <img src="https://pic2.zhen.com/uploadimg1/7bbe496f23c17f661084ccba339ab3af.jpg" alt=""/>
                        </div>
                        <div className="shopInfo2">
                            <div className="shopInfolist">
                                <img src="https://pic2.zhen.com/uploadimg1/255_140031ab496209dec03371d2862de5d2.jpg" alt=""/>
                                <p className="shopName">Gucci</p>
                                <p className="shopPrice">￥15399</p>
                            </div>
                            <div className="shopInfolist">
                                <img src="https://pic2.zhen.com/uploadimg1/255_140031ab496209dec03371d2862de5d2.jpg" alt=""/>
                                <p className="shopName">Gucci</p>
                                <p className="shopPrice">￥15399</p>
                            </div>
                            <div className="shopInfolist">
                                <img src="https://pic2.zhen.com/uploadimg1/255_140031ab496209dec03371d2862de5d2.jpg" alt=""/>
                                <p className="shopName">Gucci</p>
                                <p className="shopPrice">￥15399</p>
                            </div>
                            <div className="shopInfolist">
                                <img src="https://pic2.zhen.com/uploadimg1/255_140031ab496209dec03371d2862de5d2.jpg" alt=""/>
                                <p className="shopName">Gucci</p>
                                <p className="shopPrice">￥15399</p>
                            </div>
                            <div className="shopInfolist">
                                <img src="https://pic2.zhen.com/uploadimg1/255_140031ab496209dec03371d2862de5d2.jpg" alt=""/>
                                <p className="shopName">Gucci</p>
                                <p className="shopPrice">￥15399</p>
                            </div>
                        </div>

                    </div>

                </div>
                 {
        //     this.props.home_list.map((item, index)=>{
        //         return <li key={"h_l_" + index}>
        //             <img src={item.logo} />
        //             <span>{item.shop_name}</span>
        //             <span>{item.price}</span>
        //             <Link to={"/detail/" + item.shop_name}>详情</Link>
        //         </li>;
        //     })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Home: state.Home
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
const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);
export default Home;