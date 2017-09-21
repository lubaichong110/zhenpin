import React from 'react';
import '../styles/Detail.css';
import {
    Carousel,
    Tabs,
    Toast
}
from 'antd-mobile';
import {
    connect
} from 'react-redux'
import {
    Link
}
from 'react-router-dom'
const tabs = [{
    title: "图文详情"
}, {
    title: "参数规格"
}, ];

class DetailUI extends React.Component {
    constructor() {
        super();
        this.state = {
            good_id: "",
            good_id_arr: [],
            good_info: [],
            totalcount: 0
        }
        this.addCart = this.addCart.bind(this)
    }
    componentDidMount() {
        var that = this;
        fetch("/api/getgooddata").then((res) => {
            return res.json()
        }).then((data) => {
            for (var i = 0; i < data.length; i++) {
                that.state.good_id_arr.push(data[i].goods_id);
            }
            var goodid = that.props.match.params.id;
            that.setState({
                good_id: goodid
            })
            var good_index = this.state.good_id_arr.indexOf(this.state.good_id);
            this.state.good_info.push(data[good_index])
            that.setState({
                good_id_arr: this.state.good_id_arr,
                good_info: this.state.good_info
            })
        })
    }
    selectedSize(index, e) {
        for (let i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].className = "choose_size_span"
        }

        e.target.className = "choose_size_span c_active";
        this.selectSize = index;
    }
    selectedColor(index, e) {
        for (let i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].className = "choose_color_span"
        }

        e.target.className = "choose_color_span c_active"
        this.selectColor = index;
    }
    addCart() {
        var lsId = [];
        var lscolor = [];
        var lssize = []
        for (var i = 0; i < this.props.detail_list.length; i++) {
            lsId.push(this.props.detail_list[i].info_id)
            lscolor.push(this.props.detail_list[i].info_selectColor)
            lssize.push(this.props.detail_list[i].info_selectSize)
        }
        var isIndex = lsId.indexOf(this.state.good_info[0].goods_id);
        var isColor = lscolor.indexOf(this.state.good_info[0].goods_color[this.selectColor]);
        var isSize = lssize.indexOf(this.state.good_info[0].goods_size[this.selectSize]);

        if (isIndex != -1 && isColor != -1 && isSize != -1) {
            this.props.detail_list[isIndex].info_count++
        } else {
            var infoToCart = {
                info_title: this.state.good_info[0].goods_title,
                info_price: this.state.good_info[0].goods_price,
                info_id: this.state.good_info[0].goods_id,
                info_img: this.state.good_info[0].goods_img[0],
                info_selectSize: this.state.good_info[0].goods_size[this.selectSize],
                info_selectColor: this.state.good_info[0].goods_color[this.selectColor],
                info_count: "1"
            }
            this.props.intoCart(infoToCart);
        }
        Toast.success('已添加到购物袋', 1);
    }
    render() {
        return (
            <div>
            {
                this.state.good_info.map((item, index) => {
                    return (
                    <div key={"z"+index} id="detail">
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
                                {
                                    item.goods_img.map((item_img,index) => {
                                        return(
                                             <div key={"a"+index} className="img_div"><img src={item_img} alt=""/></div>
                                        )
                                    })
                                   
                                }
                                </Carousel>
                            </div>
                            <div className="good_title_price">
                                <div className="good_title">
                                    {item.goods_title}
                                </div>
                                <div className="good_price"><span className="rmb">¥</span>{item.goods_price}</div>
                            </div>    
                        </div>
                        <div className="good_choose">
                            <div className="good_color">
                                <span className="color_title">颜色</span>
                                <ul className="choose_color">
                                 {
                                    item.goods_color.map((item_color,index) => {
                                        return(
                                            <li key={"b" + index} 
                                                onClick={(e) => this.selectedColor(index,e)} 
                                                className="choose_color_span"

                                            >
                                                {item_color}
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                            <div className="good_size">
                                <span className="size_title">尺码</span>
                                <ul className="choose_size">
                                {
                                    item.goods_size.map((item_size,index) => {
                                        return(
                                            <li key={"c" + index} 
                                                onClick={(e) => this.selectedSize(index,e)} 
                                                className="choose_size_span"

                                            >
                                                {item_size}
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
                                    <img src={item.goods_brand} alt=""/>
                                </div>
                                <div className="brand_content_text">麦蔻 (McQ) 是亚历山大·麦昆 (Alexander McQueen) 的副线品牌，由创意总监莎拉•伯顿 (Sarah Burton) 掌舵，与主线品牌并驾齐驱，将当代个性设计与麦昆 (McQueen) 丰富的品牌历史完美结合，融合英国“街头风尚”和设计师诙谐睿智，男女成衣系列传递的精神是保持年轻的心和开放的态度。</div>
                            </div>
                        </div>
                        <div className="to_pic_detail">
                                点击查看图文详情
                                <i className = "iconfont icon-xiangyou" > </i>
                        </div>
                        <Tabs tabs={tabs}
                                initialPage={0}
                                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                              >
                          <div className="childBox">
                              <div className="detail_content">
                              {
                                  item.goods_img.map((item_detail_img,index)=>{
                                    return(
                                        <img key={"n" + index} src={item_detail_img}/>
                                    )
                                  })
                                }</div>
                          </div>
                          <div className="childBox childBox2" >
                              <div className="info_content">
                                  <ul>
                                    <li>
                                      <span className="info_title">货号</span>
                                      <span className="info_value">FY0551 K8F F0D9U</span>
                                    </li>
                                    <li>
                                      <span className="info_title">商品编码</span>
                                      <span className="info_value">3115516</span>
                                    </li>
                                    <li>
                                      <span className="info_title">品牌</span>
                                      <span className="info_value">Fendi</span>
                                    </li>
                                    <li>
                                      <span className="info_title">品牌属地</span>
                                      <span className="info_value">意大利</span>
                                    </li>
                                    <li>
                                      <span className="info_title">水洗方式</span>
                                      <span className="info_value">请依照水洗标签的提示进行洗涤</span>
                                    </li>
                                    <li>
                                      <span className="info_title">备注</span>
                                      <span className="info_value">请按照保养说明进行保养</span>
                                    </li>
                                    <li>
                                      <span className="info_title">配件</span>
                                      <span className="info_value">无</span>
                                    </li>
                                    <li>
                                      <span className="info_title">材质</span>
                                      <span className="info_value">100%棉</span>
                                    </li>
                                  </ul>
                              </div>
                          </div>
                      </Tabs> 
                      <div className="d_footer">
                           <div className='d_collect'>
                                <div className="d_collection">
                                    <i className="iconfont icon-shoucang"></i>
                                    <span>收藏</span>
                                </div>
                           </div> 
                           <div className='d_cart'>  
                                <div className="foot_cart">
                                    <Link to="/cart"> 
                                        <i className="iconfont icon-gouwudai"></i>
                                        <span>购物袋</span>
                                        <em className="icon_count" style={{display:"none"}}></em>
                                    </Link>
                                </div>

                           </div>
                           <div className='add_cart' onClick={this.addCart}>                                       
                                    加入购物袋
                           </div>  
                           <div className="buynow">
                                <Link to="/cart">    
                                    立即购买  
                                </Link>
                            </div>
                      </div>
                    </div>
                    )
                })
            }

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        detail_list: state.detail_list,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        intoCart: (obj) => {
            return dispatch({
                type: "ADD_CART",
                payload: obj
            })
        }
    }
}
const Detail = connect(mapStateToProps, mapDispatchToProps)(DetailUI);
export default Detail