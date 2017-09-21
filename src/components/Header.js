import React from 'react'
import {
    InputItem
}
from 'antd-mobile';
import {

    Link
} from 'react-router-dom'
import {
    connect
}
from 'react-redux'

import "../styles/Header.css"


class HeaderUI extends React.Component {
    constructor() {
        super();
        this.back = this.back.bind(this);
    }
    componentDidMount() {
        // this.props.fetchListData();
        if (window.location.pathname == "/search") {
            this.refs.header.style.display = "none"
        }
        if (window.location.pathname == "/") {
            this.refs.headerOther.style.display = "none"
            this.refs.headerHome.style.display = "flex";
            this.refs.header.style.marginTop = "23px"
            this.refs.headerDetail.style.display = "none"
            this.refs.HeaderCart.style.display = "none"

        }
        if (window.location.pathname !== "/") {
            this.refs.headerOther.style.display = "flex"
            this.refs.headerDetail.style.display = "none"
            this.refs.HeaderCart.style.display = "none"
            this.refs.headerHome.style.display = "none";
        }
        if (window.location.pathname == "/cart") {
            this.refs.headerOther.style.display = "none"
            this.refs.headerHome.style.display = "none";
            this.refs.headerDetail.style.display = "none"
            this.refs.HeaderCart.style.display = "flex"

        }
        if (window.location.pathname == "/my") {
            this.refs.header.style.display = "none"

        }
        var reg = /^\/detail\//;
        if (window.location.pathname.match(reg)) {
            this.refs.headerOther.style.display = "none"
            this.refs.headerDetail.style.display = "flex"
            this.refs.HeaderCart.style.display = "none"
            this.refs.headerHome.style.display = "none";
        }
    }
    back() {
        window.history.go(-1);
    }
    render() {
        return (
            <div className="header" ref="header" >
             
                <div className="headerHome" ref="headerHome">
                   <span>珍品</span>
                   <Link className="search" to={'/search'}>                
                        <div>
                            <i className="icon iconfont icon-sousuo"></i>
                             <span>腕表</span>
                        </div>                
                   </Link>
                   <Link className="cartCountP" to={'/cart'}>
                        <i className="icon iconfont icon-icongwd"></i>
                        <span className="cartCount">0</span>
                    </Link>
                </div>
                
                  
                <div className="headerOther" ref="headerOther">
                <Link className="search" to={'/search'}>                  
                        <div>
                            <i className="icon iconfont icon-sousuo"></i>
                             <span>腕表</span>
                        </div>                  
                   </Link>
                  <Link className="cartCountP" to={'/cart'}>
                        <i className="icon iconfont icon-icongwd"></i>
                        <span className="cartCount">0</span>
                    </Link>
                </div>
                   
                <div className="headerDetail" ref="headerDetail" >
                   
                      <i onClick={this.back} className="icon iconfont icon-fanhui1"></i>
                      <Link className="cartCountP" to={'/cart'}>
                        <i className="icon iconfont icon-icongwd"></i>
                        <span className="cartCount">0</span>
                    </Link>
                </div>
                <div className="HeaderCart" ref="HeaderCart">
                    <i onClick={this.back} className="icon iconfont icon-fanhui1"></i>
                    <div className="title">
                        <p>购物袋</p>
                    </div>
                    <div></div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderUI);
export default Header;