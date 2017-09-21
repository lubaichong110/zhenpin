import React from 'react';
import '../styles/Setting.css';
import {
    List,
    Switch
}
from 'antd-mobile';
import {
    createForm
}
from 'rc-form';
const Item = List.Item;


class Setting extends React.Component {
    state = {
        disabled: false,
        value: 1
    }
    componentDidMount() {
        var isLogin = localStorage.getItem("userName");
        if (isLogin) {
            this.refs.user_exit.style.display = "block"
        } else {
            this.refs.user_exit.style.display = "none";
        }
    }
    userExit() {
        localStorage.removeItem("userName");
        window.location.href("/my")
    }
    render() {
        const {
            getFieldProps
        } = this.props.form;
        return (
            <div id="setting">
                <div className="localCache">
                  <List className="my-list">
                    <Item
                      extra={<Switch {...getFieldProps('1', { initialValue: true, valuePropName: 'checked' })} />}
                    >商品详情页弹幕</Item>
                    <Item extra="0.00B" arrow="horizontal" onClick={() => {}}>清除本地缓存</Item>
                  </List>
                </div>
                <div className="new_vervion">
                  <List className="my-list">
                    <Item extra="已是最新版" arrow="horizontal" onClick={() => {}}>新版本检测</Item>
                    <Item arrow="horizontal" onClick={() => {}}>推荐珍品给好友</Item>
                    <Item extra="v3.9.2" arrow="horizontal" onClick={() => {}}>关于珍品</Item>
                  </List>
                </div>
                <div ref="user_exit" className="user_exit" onClick={this.userExit}>
                    退出登录
                </div>
            </div>

        )

    }
}
const SettingW = createForm()(Setting);
export default SettingW