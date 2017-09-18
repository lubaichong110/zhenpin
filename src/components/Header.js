import React from 'react'
import {
    connect
} from 'react-redux'
import "../styles/Header.css"
class HeaderUI extends React.Component {
    componentDidMount() {
        // this.props.fetchListData();
        if(window.location.pathname == "/detail"){
            // this.refs.headerf.style.display = "none"
            this.refs.header.style.display = "block"
        }
        
    }
    render() {
        return (
            <div className="header" ref="header">
                
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