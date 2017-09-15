import React from 'react'
import {
    connect
} from 'react-redux'
import "../styles/List.css"
class ListUI extends React.Component {
    componentDidMount() {
        // this.props.fetchListData();
    }
    constructor() {
        super();
        this.alertP = this.alertP.bind(this);
        this.state = {
            sort: "none",
            goods_arr: [{
                good_id: "1",
                good_title: " Burberry/博柏利 男士经典格纹长袖衬衫 3983247",
                good_img: "https://pic2.zhen.com/uploadimg1/bc08d20f19d440084722db2fcd408c4e.jpg",
                good_price: "3399"
            }, {
                good_id: "2",
                good_title: " Burberry/博柏利 男士经典格纹长袖衬衫 3983247",
                good_img: "https://pic2.zhen.com/uploadimg1/11862789532be58a21c96c21ed6094ac.jpg",
                good_price: "3399"
            }, {
                good_id: "",
                good_title: " Burberry/博柏利 男士经典格纹长袖衬衫 3983247",
                good_img: "https://pic2.zhen.com/uploadimg1/f33ba76ee4f762a4f7c8e2ec796c8f25.jpg",
                good_price: "3399"
            }, {
                good_id: "4",
                good_title: " Burberry/博柏利 男士经典格纹长袖衬衫 3983247",
                good_img: "https://pic2.zhen.com/uploadimg1/b0787c1e57bd7dea6ab8e1f6d126c09e.jpg",
                good_price: "3399"
            }]
        }
    }
    render() {
            return (
                <div className="main_box" >
                <div className="pxu_mb" style={{display:this.state.sort}}></div>
                <div className="choose_box">
                    <div id="sort" onClick={this.alertP}>排序<i className="iconfont icon-xiangxia"></i></div>
                    <div id="filter">筛选<i className="iconfont icon-xiangxia"></i></div>
                    <ul className="choose_list" style={{display:this.state.sort}}>
                        <li>默认排序</li>
                        <li onClick={this.alertP}>新品优先</li>
                        <li>销量优先</li>
                        <li>价格从高到低</li>
                        <li>价格从低到高</li>
                    </ul>
                </div>
                <ul className="goods_list">
                    {
                        this.state.goods_arr.map((item,index)=>{
                            return(
                                <li key={"goods"+index}>
                                    <p><img src={item.good_img} alt=""/></p>
                                    <div className="good_title">
                                        <span>可用券</span>
                                        {item.good_title}
                                    </div>
                                    <div>
                                        <span className="good_price">{item.good_price}</span>
                                        <span><i className="iconfont icon-shoucang"></i></span>
                                    </div>
                                </li>
                                )
                        })
                    }
                </ul>
            </div>
            )
        }
        //弹出下拉框
    alertP() {
        if (this.state.sort == "block") { //如果弹出点击就收回
            this.setState({
                sort: "none"
            })
        } else {
            this.setState({
                sort: "block"
            })
        }

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