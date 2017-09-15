import React from 'react'
import  '../styles/Cart.css';
import { List, Checkbox, Flex } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
class Cart extends React.Component{
    render(){
        return(
            <div id="cart">
                <div className="cart_content">
                    <ul className="cart_content_ul">
                        <li className="cart_content_li">
                            <div className="ipt_checkbox"><CheckboxItem></CheckboxItem></div>
                            <div className="c_good_right">
                                <div className="c_good_pic">
                                    <img src="https://pic2.zhen.com/uploadimg1/240_204a776af6534bff927c0c708358cc02.jpg" alt=""/>
                                </div>
                                <div className="c_good_detail">
                                     <div className="c_good_name">乔治·阿玛尼 混纺 男士单排扣西装上衣啦啦啦啦</div>
                                     <div className="c_good_size">深蓝死 46</div>
                                     <div className="c_good_price">￥5899</div>
                                </div>
                            </div> 
                           
                        </li>
                        <li className="cart_content_li"></li>
                    </ul>
                </div>
            </div>
        )
        
    }
}

export default Cart;