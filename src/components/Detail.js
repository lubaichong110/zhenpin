import React from 'react';
import '../styles/detail.css';
import {
    Carousel,
}

from 'antd-mobile';
class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            arr: ["白", "黑", "黄", "红", "蓝", "从"]
        }
    }
    componentWillMount() {

    }
    selectedColor(index, e) {
        for (let i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].className = "choose_size_span"
        }

        e.target.className = "choose_size_span c_active"
    }
    render() {
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
                          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                          afterChange={index => console.log('slide to', index)}
                        >
                            <div className="img_div"><img src="https://pic2.zhen.com/uploadimg1/450_d8cf44550ee9609f6f1f970bdde7808b.JPG" alt=""/></div>
                            <div className="img_div"><img src="https://pic2.zhen.com/uploadimg1/450_d8cf44550ee9609f6f1f970bdde7808b.JPG" alt=""/></div>
                            <div className="img_div"><img src="https://pic2.zhen.com/uploadimg1/450_d8cf44550ee9609f6f1f970bdde7808b.JPG" alt=""/></div>
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
                        {
                            this.state.arr.map((item,index) => {
                                return(
                                    <li key={"x" + index} 
                                        onClick={(e) => this.selectedColor(index,e)} 
                                        className="choose_size_span"

                                    >
                                        {item}色
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                    <div className="good_send">
                        <span className="send_title">配送</span>
                        <ul className="send_ul">
                            <li className="send_li">由珍品特约合作商发货</li>
                        </ul>
                    </div>
                    
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
                <div className="brand_intro">
                    <div className="brand_title">
                        <span className="d_brand_name">品牌</span>
                        <i className="iconfont icon-xiangyou"></i> 
                    </div>
                    <div className="d_brand_content">
                        <div className="d_brand_pic">
                            <img src="https://pic2.zhen.com/brand/1e453506b8f732fbafcc84f0ebe9bbe8.png" alt=""/>
                        </div>
                        <div className="brand_content_text">麦蔻 (McQ) 是亚历山大·麦昆 (Alexander McQueen) 的副线品牌，由创意总监莎拉•伯顿 (Sarah Burton) 掌舵，与主线品牌并驾齐驱，将当代个性设计与麦昆 (McQueen) 丰富的品牌历史完美结合，融合英国“街头风尚”和设计师诙谐睿智，男女成衣系列传递的精神是保持年轻的心和开放的态度。</div>
                    </div>
                </div>
                <div className="to_pic_detail">
                    点击查看图文详情
                    <i className="iconfont icon-xiangyou"></i>
                </div>
            </div>

        )
    }
}
export default Detail