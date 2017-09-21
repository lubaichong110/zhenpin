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

                }
                if (window.location.pathname !== "/") {
                    this.refs.headerOther.style.display = "flex"
                    this.refs.headerDetail.style.display = "none"
                    this.refs.headerHome.style.display = "none";
                }

                if (window.location.pathname == "/my") {
                    this.refs.header.style.display = "none"

                }
                if (window.location.pathname == "/detail") {
                    this.refs.headerOther.style.display = "none"
                    this.refs.headerDetail.style.display = "flex"
                    this.refs.headerHome.style.display = "none";


                    if (window.location.pathname == "/my") {
                        // this.refs.headerf.style.display = "none"
                        this.refs.header.style.display = "block"
                    }
                }
               } 
                back(){
                    window.history.go(-1);
                }
                render() {
                        return (
                                <div className="header" ref="header" >
             <Link to={'/search'}>
                <div className="headerHome" ref="headerHome">
                   <span>珍品</span>
                   <div className="search">
                        <div>
                            <i className="icon iconfont icon-sousuo"></i>
                             <span>腕表</span>
                        </div>
                   </div>
                    <i className="icon iconfont icon-icongwd"></i>
                </div>
                </Link>
                  <Link to={'/search'}>
                <div className="headerOther" ref="headerOther">
                    <div className="search">
                        <div>
                            <i className="icon iconfont icon-sousuo"></i>
                             <span>腕表</span>
                        </div>
                   </div>
                    <i className="icon iconfont icon-icongwd"></i>
                </div>
                   </Link>
                <div className="headerDetail" ref="headerDetail" >
                   
                      <i onClick={this.back} className="icon iconfont icon-fanhui1"></i>
                      <i className="icon iconfont icon-icongwd"></i>
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