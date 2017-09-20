//import React from 'react'
//import "../styles/Brand.css"
//import {
//  Grid
//} from 'antd-mobile';
//import {
//connect
//}
//from 'react-redux'
//
//import Header from "./Header.js"
//
//import axios from 'axios';
//
//class BrandUI extends React.Component {
//      constructor() {
//          super();
//          this.state = {
//              data1: []
//          }
//      }
//      componentDidMount() {
//          var that = this;
//          axios.get('/api/getbranddata')
//              .then(function(res) {
//                  console.log(res.data[0].brand);
//                  that.state.data1 = res.data[0].brand
//                  that.setState({
//                      data1: that.state.data1
//                  })
//              })
//              .catch(function(error) {
//                  console.log(error);
//              });
//      }
//      render() {
//              var that = this;
//              return (
//
//                      <div>
//              <Header></Header>  
//
//          <div className="brand_box">
//              <Grid data={that.state.data1}
//
//                columnNum={3}
//                renderItem={dataItem => (
//                  <div id="grid" style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
//                    <img src={dataItem.brand_img} style={{ width: '1.5rem', height: '1.5rem' }} alt="icon" />
//                    
//                  </div>
//                )}
//              />
//            </div>
//      )
//  }
//}
//const mapStateToProps = (state) => {
//  return {
//
//  }
//}
//const mapDispatchToProps = (dispatch) => {
//  return {
//
//  }
//}
//const Brand = connect(mapStateToProps, mapDispatchToProps)(BrandUI);
//export default Brand;