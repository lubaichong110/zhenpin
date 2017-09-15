import React from 'react'
import {
    connect
} from 'react-redux'
class ListUI extends React.Component {
    componentDidMount() {
        // this.props.fetchListData();
    }
    constructor() {
        super();
        this.alertP = this.alertP.bind(this);
    }
    render() {
            return (
                <div>
                <ul>
                    <li onClick={this.alertP}>排序<i className="iconfont icon-xiangxia"></i></li>
                    <li>筛选<i className="iconfont icon-xiangxia"></i></li>
                </ul>
                <ul>
                列表页
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
        //弹出下拉框
    alertP() {

    }
}

const mapStateToProps = (state) => {
    return {

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
const List = connect(mapStateToProps, mapDispatchToProps)(ListUI);
export default List;