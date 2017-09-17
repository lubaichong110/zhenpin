import React from 'react'
import {
    Grid
} from 'antd-mobile';
import {
    connect
} from 'react-redux'
const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

class BrandUI extends React.Component {
    render() {
        return (
            <div>
                <Grid data={data1}
                  columnNum={3}
                  renderItem={dataItem => (
                    <div style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <img src={dataItem.icon} style={{ width: '1.5rem', height: '1.5rem' }} alt="icon" />
                      
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