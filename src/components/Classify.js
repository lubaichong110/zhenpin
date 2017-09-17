import React from 'react'
import "../styles/Classify.css"
import IScroll from "iscroll-react"
import iscroll from "iscroll"
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
    componentDidMount() {

    }
    render() {
        var menu_arr = ["服装",
            "箱包",
            "鞋履",
            "腕表",
            "服饰内衣",
            "首饰眼镜",
            "生活家居",
            "个护美妆",
            "情趣用品",
            "数码产品",
            "运动户外"

        ]
        var kind_arr = [
            "男装",
            "女装",
            "童装"
        ]
        var goods_arr = [
            "长袖T恤",
            "长袖衬衫",
            "卫衣",
            "针织衫",
            "长袖polo衫",
            "长袖T恤",
            "长袖衬衫",
            "卫衣",
            "针织衫",
            "长袖polo衫",
            "长袖T恤",
            "长袖衬衫",
            "卫衣",
            "针织衫",
            "长袖polo衫"
        ]
        return (
            <div className="classify_box">
                <div className="classify_container">
                <div className="class_left">
                <IScroll iScroll={iscroll}>
                    <ul>
                        {
                            menu_arr.map((item,index)=>{
                                console.log(item)
                                return (
                                    <li key={"m"+index}>{item}</li>
                                    )  
                            })
                        }
                    </ul>
                </IScroll>
                </div>  
                <div className="class_right">
                    {

                        kind_arr.map((item,index)=>{
                            return(
                                    <div key={"k"+index}>
                                        <div className="kind_title"><span>{item}</span></div>
                                        <div className="goods">
                                            <ul>
                                               {
                                                 goods_arr.map((g_item,index)=>{
                                                    return(
                                                        <li key={"g"+index}>
                                                            <Link to="/list">
                                                                <img src="https://pic2.zhen.com/uploadimg1/9d1e868743aaf9839449577b5dcecd74.jpg" />
                                                                <div className="g_name">{g_item}</div>
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
    click: true,
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