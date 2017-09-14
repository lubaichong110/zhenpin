import React from 'react'
import {
    connect
} from 'react-redux'
import {
    Input
} from 'antd';
const Search = Input.Search;
class HeaderUI extends React.Component {
    componentDidMount() {
        // this.props.fetchListData();
    }
    render() {
        return (
            <div id="header">
                <Search
                    placeholder="input search text"
                    style={{ width: 200 }}
                    onSearch={value => console.log(value)}
                  />
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