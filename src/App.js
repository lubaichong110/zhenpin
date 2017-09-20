import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
}
from 'react-router-dom'
//引入组件
import Home from "./components/Home.js"
import Classify from "./components/Classify.js"
import Zhenxuan from "./components/Zhenxuan.js"
import Brand from "./components/Brand.js"
import My from "./components/My.js"
import Header from "./components/Header.js"
import Detail from './components/Detail.js'
import List from "./components/List.js"
import Login from "./components/Login.js"
import Footer from "./components/Footer.js"
import Setting from './components/Setting.js'


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
          <Route path="/list" component={List}/>
          <Route path="/login" component={Login}/>
      </div>
      <Footer></Footer>
    </div>
  </Router>
)
export default App