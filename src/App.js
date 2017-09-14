import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
//引入组件
import Home from "./components/Home.js"
import Classify from "./components/Classify.js"
import Zhenxuan from "./components/Zhenxuan.js"
import Brand from "./components/Brand.js"
import My from "./components/My.js"
import Header from "./components/Header.js"
import Detail from './components/Detail.js'

//配置路由
const App = () => (
  <Router>
    <div className="app_wrap">
      <Header></Header>
      <div className="app_container">
          <Route exact path="/" component={Home}/>
          <Route path="/discover" component={Classify}/>
          <Route path="/zhenxuan" component={Zhenxuan}/>
          <Route path="/brand" component={Brand}/>
          <Route path="/my" component={My}/>
          <Route path="/detail" component={Detail}/>
      </div>
      <div className="foot_bar">
        <div><Link to="/"><i className="iconfont icon-home"></i>首页</Link></div>
        <div><Link to="/discover"><i className="iconfont icon-fenlei1"></i>分类</Link></div>
        <div><Link to="/zhenxuan"><i className="iconfont icon-zhinanzhen"></i>珍选</Link></div>
        <div><Link to="/brand"><i className="iconfont icon-pinpai-"></i>品牌</Link></div>
        <div><Link to="/my"><i className="iconfont icon-wode"></i>我的</Link></div>
      </div>
    </div>
  </Router>
)
export default App