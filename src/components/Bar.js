import React, { useState } from 'react';
import { Layout, Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const App = () => {
  const [userName] = useState('Admin'); // Default olarak "Admin" kullanıcısını gösteriyoruz

  // Avatar menü içeriği
  const menu = (
    <Menu>
      <Menu.Item key="profile" onClick={() => console.log('Profile clicked')}>Profil</Menu.Item>
      <Menu.Item key="logout" onClick={() => console.log('Logout clicked')}>Çıkış Yap</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header
        style={{
          background: '#001529', // Arka plan rengi
          padding: '16px 48px', // Padding ayarları
          color: 'white', // Yazı rengi
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>
          <div style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '-5px' }}>YUZGEC</div>
        </Link>

        {/* Kullanıcı adını ve avatar'ı gösteren Dropdown */}
        <Dropdown overlay={menu} placement="bottomRight">
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <Avatar icon={<UserOutlined />} style={{ marginRight: '8px' }} />
            {userName}
          </div>
        </Dropdown>
      </Header>
    </Layout>
  );
};

export default App;
