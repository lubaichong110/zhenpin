import React from 'react'
import "../styles/Classify.css"
import IScroll from "iscroll-react"
import iscroll from "iscroll"
import axios from 'axios';
import { ActivityIndicator, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import {
    setDefaultIScrollOptions
} from "iscroll-react"
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    connect
} from 'react-redux'
class ClassifyUI extends React.Component {
	constructor(){
		super();
		this.state={
			color:"#f3f3f3",
			menu_arr:[],
			kind_arr:[],
			animating: false
		}
		this.changeList=this.changeList.bind(this)
	}
    componentDidMount() {
    	var that =this;
    		//获取商品分类和信息
			axios.get('/api/getsortdata')
			  .then(function (res) {
			    console.log(res.data[0].classify);
			    var resArr=res.data[0].classify;//左边菜单
			    for(var i in resArr){
			    	that.state.menu_arr.push(resArr[i].class_name);
			    	that.setState({
			    		menu_arr:that.state.menu_arr
			    	})
			    }
			    var kindArr=resArr[0].class_info;//右边分类
			    console.log(kindArr)
			    that.setState({
			    		kind_arr:kindArr
			    })
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
    }
    changeList(index){
    	var liArr=document.getElementsByClassName("l_li")
    	for(var i=0;i<liArr.length;i++){
    		liArr[i].style.background="#f3f3f3"
    	}
    	liArr[index].style.background="#fff"
    	var that =this;
    	that.setState({
		    		animating: !that.state.animating
		    })
    	
    	axios.get('/api/getsortdata')
		 .then(function (res) {
		 	var kindArr=res.data[0].classify[index].class_info;//右边分类
		 	console.log(that.setState)
		    that.setState({
		    		kind_arr:kindArr,
		    		animating: !that.state.animating
		    })
		    //console.log(that.state.kind_arr)
	 	 })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
    render() {
        return (
            <div className="classify_box">
                <div className="classify_container">
                <div className="class_left">
                <IScroll iScroll={iscroll}>
                    <ul>
                        {	
                            this.state.menu_arr.map((item,index)=>{
                                //console.log(item)
                                return (
                                    <li className="l_li" key={"m"+index} style={{background:this.state.color}} onClick={()=>this.changeList(index)}>{item}</li>
                                    )  
                            })
                        }
                    </ul>
                </IScroll>
                </div>  
                <div className="class_right">
                	<ActivityIndicator toast animating={this.state.animating} size="large"/>
                    {
                        this.state.kind_arr.map((item,index)=>{
                            return(
                                    <div key={"k"+index}>
                                        <div className="kind_title"><span>{item.list_name}</span></div>
                                        <div className="goods">
                                            <ul>
                                               {
                                                 this.state.kind_arr[index].list_class.map((g_item,index)=>{
                                                    return(
                                                        <li key={"g"+index} >
                                                            <Link to={"/list/"+g_item.list_goods}>
                                                                <img src={g_item.list_img} />
                                                                <div className="g_name">{g_item.list_class_name}</div>
                                                            </Link>
                                                        </li>
                                                        )
                                                })
                                               }
                                            </ul>
                                        </div>
                                    </div>
                                )
                        })

                    }
                </div>
            </div>
            </div>
        )
    }
}
setDefaultIScrollOptions({
    scrollbars: false,
    mouseWheel: false,
    shrinkScrollbars: "scale",
    fadeScrollbars: false,
    click: false
})
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
const Classify = connect(mapStateToProps, mapDispatchToProps)(ClassifyUI);
export default Classify;