import React from 'react'
import {
    connect
} from 'react-redux'
import "../styles/Header.css"
class HeaderUI extends React.Component {
    componentWillMount() {
        // this.props.fetchListData();
        
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