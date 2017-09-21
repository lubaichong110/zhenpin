import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    connect
} from 'react-redux'
import Header from './Header.js'
import axios from 'axios';
import "../styles/List.css"
import { RefreshControl, ListView } from 'antd-mobile';
class ListUI extends React.Component {
    componentDidMount() {
        //console.log(this.props.match.params.id.split(","))
        var goodsIdArr=this.props.match.params.id.split(",");
        var goodsArr =[];
        var that = this;
        for(var i in goodsIdArr){
        	axios.get("/api/searchgoodid/"+goodsIdArr[i])
        	.then(function(res){
        		//console.log(res.data[0])
        		goodsArr.push(res.data[0])
        		that.setState({
	        	goods_arr:goodsArr
	        })
        	})
        	.catch(function(err){
        		console.log(err)
        	})
        }
    }
    constructor() {
        super();
        this.alertP = this.alertP.bind(this);
        this.state = {
            sort: "none",
            goods_arr: []
        }
    }
    toDetail(goods_id){
    	alert("1")
    	console.log(goods_id)
    }
    render() {
            return (
                <div className="main_box" >
                <Header></Header>
                <div className="pxu_mb" style={{display:this.state.sort}}></div>
                <div className="choose_box">
                    <div id="sort" onClick={this.alertP}>排序<i className="iconfont icon-xiangxia"></i></div>
                    <div id="filter">筛选<i className="iconfont icon-xiangxia"></i></div>
                    <ul className="choose_list" style={{display:this.state.sort}}>
                        <li>默认排序</li>
                        <li onClick={this.alertP}>新品优先</li>
                        <li onClick={this.alertP}>销量优先</li>
                        <li onClick={this.alertP}>价格从高到低</li>
                        <li onClick={this.alertP}>价格从低到高</li>
                    </ul>
                </div>
                <ul className="goods_list">
                    {
                        this.state.goods_arr.map((item,index)=>{
                            return(
                            	<Link to={"/detail/"+item.goods_id} key={"goods"+index}>
                                <li >
                                    <p><img src={item.goods_img[0]} alt=""/></p>
                                    <div className="good_title">
                                        <span>可用券</span>
                                        {item.goods_title}
                                    </div>
                                    <div>
                                        <span className="good_price">{item.goods_price}</span>
                                        <span><i className="iconfont icon-shoucang"></i></span>
                                    </div>
                                </li>
                                </Link>
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