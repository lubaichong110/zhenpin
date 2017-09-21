import React from 'react'
import '../styles/Cart.css';
import {
  List,
  Checkbox,
  Flex
} from 'antd-mobile';
import {
  connect
} from 'react-redux'
const CheckboxItem = Checkbox.CheckboxItem;
class CartUI extends React.Component {
  constructor() {
    super();
    this.state = {
      good_count: 1,
      cart_count: [],
      totalprice: 0,
      totalcount: 0
    };
  }
  componentDidMount() {
    for (var i = 0; i < this.props.detail_list.length; i++) {
      this.state.cart_count.push(this.props.detail_list[i]);
    }
    this.setState({
      cart_count: this.state.cart_count,
    })
    this.calc()
  }
  calc() {
    var onegoodprice = [];
    var allcount = [];
    var totalp = 0;
    var totalc = 0;

    for (var i = 0; i < this.props.detail_list.length; i++) {

      onegoodprice.push(this.props.detail_list[i].info_price * this.props.detail_list[i].info_count)
      allcount.push(this.props.detail_list[i].info_count)
    }
    for (var i = 0; i < onegoodprice.length; i++) {
      totalp += onegoodprice[i]
    }
    //console.log(allcount)
    for (var i = 0; i < allcount.length; i++) {
      totalc += parseInt(allcount[i])
    }
    //console.log(totalc)
    this.setState({
      totalprice: totalp,
      totalcount: totalc
    })
  }
  removethis(index, e) {
    this.props.detail_list.splice(index, 1);
    this.calc();
    this.refs.cart_content_ul.removeChild(e.target.parentNode.parentNode.parentNode)
  }
  changcount(index, e) {
    // var id = this.this.props.detail_list[index].info_id;

    if (e.target.innerHTML == "+") {
      ++e.target.parentNode.children[1].innerHTML
    }
    if (e.target.innerHTML == "-") {
      if (e.target.parentNode.children[1].innerHTML < 2) {
        e.target.parentNode.children[1].innerHTML = 1
      } else {
        --e.target.parentNode.children[1].innerHTML;
      }

    }
    var count = e.target.parentNode.children[1].innerHTML;
    this.props.detail_list[index].info_count = count
    this.calc();
    //console.log(this.props.detail_list)
    // this.props.changeCount(count);
  }
  render() {
    return (
      <div id="cart">
                <div className="cart_content">
                    <ul className="cart_content_ul" ref="cart_content_ul">
                    { 
                      this.state.cart_count.map((item,index) =>{
                        return(
                          <li key={"h" + index} className="cart_content_li">
              
                            <div className="c_good_right">
                                <div className="c_good_pic">
                                    <img src={item.info_img} alt=""/>
                                </div>
                                <div className="c_good_detail">
                                    <section>
                                        <div className="c_good_name">{item.info_title}</div>
                                        <div className="c_good_size">{item.info_selectColor}  {item.info_selectSize}</div>
                                    </section>
                                    <div ref="info_price" className="c_good_price">￥{item.info_price}</div>
                                    <div className="count_stepper">
                                        <span className="discount" onClick={(e)=>this.changcount(index,e)}>-</span> 
                                        <span className="c_good_count">{item.info_count}</span>
                                        <span className="plus" onClick={(e)=>this.changcount(index,e)}>+</span>
                                    </div>
                                    <div className="remove" onClick={(e)=>this.removethis(index,e)}>
                                       移除
                                    </div>
                                </div>
                            </div> 
                           
                        </li>
                        )
                      })
                      }
                    </ul>
                </div>
                <div className="d_footer1">
                      <div className="buyright">
                          应付￥{this.state.totalprice} 去结算({this.state.totalcount})
                      </div>
                </div>
            </div>
    )

  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    detail_list: state.detail_list
  }

}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
const Cart = connect(mapStateToProps, mapDispatchToProps)(CartUI);
export default Cart;