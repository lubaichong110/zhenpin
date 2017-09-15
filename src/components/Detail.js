import React from 'react';
import  '../styles/detail.css';

class Detail extends React.Component{
    render(){
        return (
            <div id="detail">
                <div className="good_scan">
                    <div className="good_scan_pic">
                       
                    </div>
                    <div className="good_title_price">
                        <div className="good_title">
                            Michael Kors/麦克·科尔斯 不锈钢表壳精钢表带石英女表 MK5491 玫瑰金
                        </div>
                        <div className="good_price"><span className="rmb">¥</span>899</div>
                    </div>
                </div>
                <div className="good_choose">
                    <div className="good_color">
                        <span className="color_title">颜色</span>
                        <ul className="choose_color">
                            <li className="choose_color_span c_active">白色</li>
                            <li className="choose_color_span">白色</li>
                            <li className="choose_color_span">白色</li>
                        </ul>
                    </div>
                    <div className="good_size">
                        <span className="size_title">颜色</span>
                        <ul className="choose_size">
                            <li className="choose_size_span c_active">白色</li>
                            <li className="choose_size_span">白色</li>
                            <li className="choose_size_span">白色</li>
                            <li className="choose_size_span">白色</li>
                            <li className="choose_size_span">白色</li>
                            <li className="choose_size_span">白色</li>
                            <li className="choose_size_span">白色</li>
                            <li className="choose_size_span">白色</li>
                            <li className="choose_size_span">白色</li>
                        </ul>
                    </div>
                    <div className="good_send">
                        <span className="send_title">配送</span>
                        <ul className="send_ul">
                            <li className="send_li">由珍品特约合作商发货</li>
                        </ul>
                    </div>
                    <div className="good_promise">
                        <section>
                            <i className="iconfont icon-duihao"></i>
                            正品保证
                        </section>
                        <section>
                            <i className="iconfont icon-duihao"></i>
                            正品保证
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail