import React from 'react'
import {
    connect
} from 'react-redux'
class HomeUI extends React.Component {
    componentDidMount() {
        // this.props.fetchListData();
    }
    render() {
        return (
            <div>
                <h1>首页</h1>
                <ul>
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