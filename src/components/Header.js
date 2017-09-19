import React from 'react'
import {
    connect
}
from 'react-redux'
import {
    InputItem
}
from 'antd-mobile';
import "../styles/Header.css"
class HeaderUI extends React.Component {
    componentDidMount() {
        // this.props.fetchListData();
        if (window.location.pathname == "/detail") {
            // this.refs.headerf.style.display = "none"
            this.refs.header.style.display = "block"
        }

    }
    render() {
        return (
            <div className="header" >
                <div className="headerHome">
                   <span>珍品</span>
                   <div className="search">
                        <div>
                            <i className="icon iconfont icon-sousuo"></i>
                             <span>腕表</span>
                        </div>
                   </div>
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