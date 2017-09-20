import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Footer extends React.Component {

    componentDidMount(){
        if(window.location.pathname == "/detail"){
            // this.refs.headerf.style.display = "none"
            this.refs.foot_bar.style.display = "none"
        }
    }
    render(){
        return (
            <div className="foot_bar" ref="foot_bar">
                <div><Link to="/"><i className="iconfont icon-home"></i>首页</Link></div>
                <div><Link to="/classify"><i className="iconfont icon-fenlei1"></i>分类</Link></div>
                <div><Link to="/zhenxuan"><i className="iconfont icon-zhinanzhen"></i>珍选</Link></div>
                <div><Link to="/brand"><i className="iconfont icon-pinpai-"></i>品牌</Link></div>
                <div><Link to="/my"><i className="iconfont icon-wode"></i>我的</Link></div>
            </div>
                
        )

    }
}
export default Footer