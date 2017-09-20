import React from 'react'
import {
    InputItem
}
from 'antd-mobile';
import {
    connect
} from 'react-redux'
import "../styles/Header.css"
class HeaderUI extends React.Component {
    componentDidMount() {
        // this.props.fetchListData();
        if (window.location.pathname == "/my") {
            // this.refs.headerf.style.display = "none"
            this.refs.header.style.display = "block"
        }
        if (window.location.pathname == "/search") {
            this.refs.header.style.display = "none"
        }

    }
    render() {
        return (
            <div className="header" ref="header">
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