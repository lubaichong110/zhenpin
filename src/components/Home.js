import React from 'react'
import ReactDOM from 'react-dom';
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll';
import {
  Link
} from 'react-router-dom'
// import '../style/test.css'
import '../style/home.css'
import "../iconfont/iconfont.css"

import {
  RefreshControl,
  ListView
} from 'antd-mobile';
import Header from "./Header.js"

const data = [{

}];
let index = data.length - 1;

const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataArr = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
  }
  return dataArr;
}

class Test extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      refreshing: true,
      height: document.documentElement.clientHeight,
      list: [],
      listInfo: []
    };
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  componentDidMount() {
    // Set the appropriate height
    setTimeout(() => this.setState({
      height: this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop,
    }), 0);

    // handle https://github.com/ant-design/ant-design-mobile/issues/1588
    this.lv.getInnerViewNode().addEventListener('touchstart', this.ts = (e) => {
      this.tsPageY = e.touches[0].pageY;
    });
    this.lv.getInnerViewNode().addEventListener('touchmove', this.tm = (e) => {
      this.tmPageY = e.touches[0].pageY;
      if (this.tmPageY > this.tsPageY && this.st <= 0 && document.body.scrollTop > 0) {
        console.log('start pull to refresh');
        this.domScroller.options.preventDefaultOnTouchMove = false;
      } else {
        this.domScroller.options.preventDefaultOnTouchMove = undefined;
      }
    });
    this.getData();
  }

  componentWillUnmount() {
    this.lv.getInnerViewNode().removeEventListener('touchstart', this.ts);
    this.lv.getInnerViewNode().removeEventListener('touchmove', this.tm);
  }

  onScroll = (e) => {
    this.st = e.scroller.getValues().top;
    this.domScroller = e;
  };

  onRefresh = () => {
    console.log('onRefresh');
    if (!this.manuallyRefresh) {
      this.setState({
        refreshing: true
      });
    } else {
      this.manuallyRefresh = false;
    }

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        refreshing: false,
        showFinishTxt: true,
      });
      if (this.domScroller) {
        this.domScroller.scroller.options.animationDuration = 500;
      }
    }, 600);
  };

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.rData = [...this.rData, ...genData(++pageIndex)];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  };

  scrollingComplete = () => {
    if (this.st >= 0) {
      this.setState({
        showFinishTxt: false
      });
    }
  }

  renderCustomIcon() {
    return [
      <div key="0" className="am-refresh-control-pull">
        <span>{this.state.showFinishTxt ? '刷新完毕' : '下拉可以刷新'}</span>
      </div>,
      <div key="1" className="am-refresh-control-release">
        <span>松开立即刷新</span>
      </div>,
    ];
  }

  getData() {
    // console.log("1")
    fetch("/api/getbranddata").then((res) => {
      return res.json();

    }).then((data) => {
      console.log(data)

      this.setState({
        list: data[0].brand

      })


      // console.log(this.state.listInfo)
    })
  }

  render() {

    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div>
           <div className="shopList">
                    
                    <div className="shopInfo">
                      {
                        this.state.list.map((item,index)=>{
                          return(
                            <div key={item.brand_id}>
                        <div className="show">
                        <img src={item.brand_banner} alt=""/>
                        </div>
                        <div className="shopInfo2">
                        <ReactIScroll iScroll = {iScroll} options = {{scrollX : true,scrollbars : false,mouseWheel : false,click:false }} > 
                          <div className="isShop" style = {{width :'230%'}}>
                          {
                            item.brand_goods.map((items, indexs) => {
                              return(
                               

                                  <div key={items.goods_id} className="shopInfolist">
                                   <Link to={'/detail/' + items.goods_id}>
                                     <img src={items.goods_img[0]} alt=""/>
                                     <p className="shopName">{items.goods_title}</p>
                                     <p className="shopPrice">￥{items.goods_price}</p>
                                    </Link>
                                  </div>
                                
                                )
                            })
                            
                           }
                            </div>
                          </ReactIScroll >

                        </div>
                        </div>
                            )
                        })
                      }
                    </div>

                </div>
        </div>
      );
    };
    return ( < ListView ref = {
        el => this.lv = el
      }
      dataSource = {
        this.state.dataSource
      }
      renderHeader = {
        () => <div className="home">
           <Header></Header>
                <div className="logo"></div>
                <ul className="nav">
                    <li>
                        <i className="icon iconfont icon-qiandao"></i>
                        <p>签到</p>
                    </li>
                     <li>
                        <i className="icon iconfont icon-yaoyiyao"></i>
                        <p>摇一摇</p>
                    </li>
                     <li>
                        <i className="icon iconfont icon-feiji1"></i>
                        <p>全球购</p>
                    </li>
                     <li>
                        <i className="icon iconfont icon-new"></i>
                        <p>新品</p>
                    </li>
                </ul>
                <ul>
                <div className="seckill">
                    <div className="title">
                        <p>秒杀</p>
                        <i className="icon iconfont icon-xiangyou1"></i>
                    </div>
                    <div className="seckillShop" >
                    <ReactIScroll iScroll = {iScroll} options = {{scrollX : true,scrollbars : false,mouseWheel : false,click:false }} > 
                      <div className="ishot" style = {{width :'280%'}}>
                      {
                        this.state.list.map((item,index)=>{
                          return(
                             <Link key={"x" + index} to={'/detail/' + item.brand_goods[2].goods_id}>
                               <div  className="seckillList">
                                
                                    <img src={item.brand_goods[2].goods_img[0]} />
                                    <p className="seckillName">{item.brand_goods[2].goods_title} </p>
                                    <p className="seckillPrice">￥{item.brand_goods[2].goods_price} </p>
                                  
                              </div>
                              </Link>
                            )
                        })
                      }
                       
                      
                        </div>
                     </ReactIScroll >

                    </div>
                </div>
                <div className="active">
                    <img src="https://pic2.zhen.com/uploadimg1/c1969ee79a6c44544f278a738bd7f547.gif" alt=""/>
                    <img src="https://pic2.zhen.com/uploadimg1/c1969ee79a6c44544f278a738bd7f547.gif" alt=""/>
                </div>
              </ul>
            </div>
      }
      renderFooter = {
        () => (<div style={{ padding: '0.3rem', textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)
      }
      renderRow = {
        row
      }

      initialListSize = {
        3
      }
      pageSize = {
        3
      }
      style = {
        {
          height: this.state.height,
          border: '1px solid #ddd',
          margin: '0.1rem 0',
        }
      }
      scrollerOptions = {
        {
          scrollbars: true,
          scrollingComplete: this.scrollingComplete
        }
      }
      refreshControl = {
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          icon={this.renderCustomIcon()}
        />
      }
      onScroll = {
        this.onScroll
      }
      scrollRenderAheadDistance = {
        100
      }
      scrollEventThrottle = {
        20
      }
      onEndReached = {
        this.onEndReached
      }
      onEndReachedThreshold = {
        10
      }
      />
    );
  }
}

export default Test;