import React from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
const TabPane = Tabs.TabPane;

console.log(Tabs)
function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
export default class Order extends React.Component {
    render() {
        return (
            <div>
	    <Tabs defaultActiveKey="2" onChange={callback} onTabClick={handleTabClick}>
	      <TabPane tab={<Badge text={'3'}>First Tab</Badge>} key="1">
	        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
	          Content of First Tab
	        </div>
	      </TabPane>
	      <TabPane tab={<Badge text={'今日(20)'}>Second Tab</Badge>} key="2">
	        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
	          Content of Second Tab
	        </div>
	      </TabPane>
	      <TabPane tab={<Badge dot>Third Tab</Badge>} key="3">
	        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
	          Content of Third Tab
	        </div>
	      </TabPane>
	    </Tabs>
	    <WhiteSpace />
	  </div>
        )
    }
}