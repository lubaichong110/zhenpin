import React from 'react';
import "../styles/KindsSearch.css"
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios"
class KindsSearch extends React.Component{
	
	constructor(){
		  super();
		  this.timeOut=null;
		  this.state = {
		  	   isShow : "tabNone",
		  	   hot_word:[],
		  	   goods_id:[]
		  }
		  this.oninput =this.oninput.bind(this)
		  this.search =this.search.bind(this)
	}
	oninput(){
		clearTimeout(this.timeOut)
		var that = this  
		   this.timeOut=setTimeout(function(){
			var inputvalue =document.getElementById("searchInput").value
			 axios.get("/api/searchgood/"+inputvalue).then(function(res){
		         console.log(res)
		         var searchArr=res.data;
		         var goods_id =[];
		         for(var i=0;i<searchArr.length;i++){
		         	goods_id.push(searchArr[i].goods_id)
		         }
		         that.setState({
		    		goods_id:goods_id
		  		  })
			 },function(err){
			 	 console.log(err)
			 })
		},500)	   
	}
	search(){
		if(this.state.goods_id.length>=1){
			var goods_id=this.state.goods_id.join(",")
			console.log(goods_id)
			window.location.replace("/list/"+goods_id)
		}
	}
	render(){
		  return (
		  	 <div className="kindsSearch">
		  	 <div className="flexibility">
		  	    <div className="neck">		  	    
		  	           <div className="neck_up">
		  	                 <input onInput={()=>{this.oninput()}} id="searchInput" className='iconfont icon' type="text" placeholder="&nbsp;&nbsp;满额最高减200元"/>
		  	                 <button onClick={this.search}>搜索</button>
		  	           </div>
		  	       
		  	    </div>
		  	    
		  	    <div className="kinds_contents">
		  	      <div className="kinds_contents_box">
		  	        <div className="kinds_just_search">
		  	            <p>热门</p>
		  	            <span>皮带</span>
		  	            <span>阿玛尼牛仔</span>
		  	            <span>范思哲</span>
		  	            <span>手表</span>
		  	            <span>鞋</span>
		  	            <span>菲拉格慕</span>
		  	            <span>双肩包</span>
		  	            <span>太阳镜</span>
		  	            <span>钱包</span>
		  	            <span>博柏利</span>
		  	            <span>施华洛世奇</span>
		  	            <span>杜嘉班纳</span>
		  	            <span>CK</span>
		  	        </div>
		  	        <p>猜你想找</p>
		  	          <span>休闲/运动鞋</span>
		  	          <span>衬衫</span>
		  	          <span>短袖</span>
		  	          <span>PUMA精品</span>
		  	          <span>T恤</span>
		  	          <span>ROCOCO洛可可</span>
		  	          <span>JNBY</span>
		  	          <span>速写sCROQUIS</span>
		  	        </div>
		  	    </div>
		  	    </div>
		  	 </div>
		  )
	}
	
}



export default KindsSearch