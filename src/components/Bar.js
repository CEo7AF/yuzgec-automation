import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const App = () => {
  return (
    <Layout>
      <Header
        style={{
          background: '#001529', // Arka plan rengi
          padding: '16px 48px', // Padding ayarları
          color: 'white', // Yazı rengi
        }}
      >
      <div style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '-15px' }}>YUZGEC AUTOMATİON</div>
      </Header>
    </Layout>
  );
};

export default App;
