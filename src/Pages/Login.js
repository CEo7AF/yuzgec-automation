// Login.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Form, Input, Button, Space, Typography, Popover } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Text } = Typography;

const demoCredentials = {
  username: 'yuzgecdemo@gmail.com',
  password: 'YuzgecDemo123!',
};

const Login = ({ onLogin }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onFinish = (values) => {
    if (
      (values.username === demoCredentials.username && values.password === demoCredentials.password) ||
      (values.username.toLowerCase() === 'admin' && values.password === 'password')
    ) {
      onLogin(); // Ana uygulamada giriş durumunu güncelle
      setLoggedIn(true); // Giriş durumunu lokal olarak güncelle
    } else {
      alert('Mail veya şifre hatalı');
    }
  };

  // Eğer kullanıcı giriş yaptıysa ana sayfaya yönlendir
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  const demoContent = (
    <div>
      <Text>Giriş Bilgileri:</Text>
      <p>
        <Text type="secondary">Mail:</Text> {demoCredentials.username}
      </p>
      <p>
        <Text type="secondary">Şifre:</Text> {demoCredentials.password}
      </p>
    </div>
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>YUZGEC OTOMASYON DEMO</h1>
      <Form
        onFinish={onFinish}
        style={{ maxWidth: '350px', margin: 'auto', marginTop: '20px' }}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          label="Mail"
          name="username"
          rules={[{ required: true, message: 'Lütfen bir mail girin !' }]}
        >
          <Input prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          label="Şifre"
          name="password"
          rules={[{ required: true, message: 'Lütfen bir şifre girin !' }]}
        >
          <Input.Password prefix={<LockOutlined />} />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Giriş Yap
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <div style={{ width: '30%', margin: '20px auto', borderBottom: '1px solid #001529' }}></div>
      <Popover content={demoContent} title="Demo Sürümü">
        <Text type="secondary" style={{ cursor: 'pointer' }}>
          Demo Sürümü için Giriş Bilgileri
        </Text>
      </Popover>
    </div>
  );
};

export default Login;
