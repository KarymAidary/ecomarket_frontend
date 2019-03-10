import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {Link, withRouter } from 'react-router-dom';
import * as actions from "../store/actions/auth";
import connect from "react-redux/es/connect/connect";
const { Header, Content, Footer } = Layout;

class CustomLayout extends Component {
  render() {
    return (
      <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        {
          this.props.isAuthenticated ?
              <Menu.Item key="2" onClick={this.props.logout} >Выход</Menu.Item>
              :
              <Menu.Item key="2"><Link to="/login/">Вход</Link></Menu.Item>
        }

        <Menu.Item key="1">
          <Link to="/">Продукты</Link>
        </Menu.Item>

      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        {this. props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
    );
}
  }


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));


