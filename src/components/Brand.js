import React from 'react'
import "../styles/Brand.css"
import {
    Grid
} from 'antd-mobile';
import {
    connect
} from 'react-redux'

import Header from "./Header.js"
const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));


import axios from 'axios';

class BrandUI extends React.Component {
        constructor() {
            super();
            this.state = {
                data1: []
            }
        }
        componentDidMount() {
            var that = this;
            axios.get('/api/getbranddata')
                .then(function(res) {
                    console.log(res.data[0].brand);
                    that.state.data1 = res.data[0].brand
                    that.setState({
                        data1: that.state.data1
                    })
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        render() {
                var that = this;
                return (

                        <div>
                <Header></Header>  
                <Grid data={data1}

            <div className="brand_box">
                <Grid data={that.state.data1}

                  columnNum={3}
                  renderItem={dataItem => (
                    <div id="grid" style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <img src={dataItem.brand_img} style={{ width: '1.5rem', height: '1.5rem' }} alt="icon" />
                      
                    </div>
                  )}
                />
              </div>
        )
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
const Brand = connect(mapStateToProps, mapDispatchToProps)(BrandUI);
export default Brand;