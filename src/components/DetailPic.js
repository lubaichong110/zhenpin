import React from 'react';
import Tabs, {
    TabPane
}
from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

class DetailPic extends React.Component {
    callback(key) {

    }
    render() {
        return (
            <div id="detailpic">
                 <Tabs
                      defaultActiveKey="1"
                      onChange={this.callback}
                      renderTabBar={()=><ScrollableInkTabBar />}
                      renderTabContent={()=><TabContent />}
                      pageSize={3}
                    >
                      <TabPane tab='图文详情' key="1">first</TabPane>
                      <TabPane tab='参数规格' key="2">second</TabPane>
                      <TabPane tab='尺码说明' key="3">third</TabPane>
                    </Tabs>
            </div>

        )
    }
}
export default DetailPic