import React from 'react';
import  '../styles/detail.css';
import { Carousel } from 'antd';

class Detail extends React.Component{
    render(){
        return (
            <div id="detail">
                <div className="good_scan">
                    <div className="good_scan_pic">
                       <Carousel
                          className="my-carousel"
                          autoplay={false}
                          infinite
                          selectedIndex={1}
                          swipeSpeed={35}
                        >
                            <div className="img_div"><img src="https://pic2.zhen.com/uploadimg1/450_c3b52036c720c5c4953de4e27ff866c0.jpg" alt=""/></div>
                            <div className="img_div"><img src="https://pic2.zhen.com/uploadimg1/450_c3b52036c720c5c4953de4e27ff866c0.jpg" alt=""/></div>
                            <div className="img_div"><img src="https://pic2.zhen.com/uploadimg1/450_c3b52036c720c5c4953de4e27ff866c0.jpg" alt=""/></div>
                        </Carousel>
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