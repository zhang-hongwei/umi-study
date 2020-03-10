// import styles from './index.css';
import { Layout, ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale-provider/zh_CN';
const { Header, Footer, Sider, Content } = Layout;

window.addEventListener('load', function(e) {
  console.log('e====>', e);
});
function BasicLayout(props) {
  return (
    <ConfigProvider locale={zh_CN}>
      <Layout style={{ height: '100%' }}>
        <Sider></Sider>
        <Layout>
          <Header></Header>
          <Content className="z_main">
            <div className="z_main_wrap">{props.children}</div>
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default BasicLayout;
