import React, { useState, useEffect } from 'react';
import { Button, Modal, Input, Form, Table, Space, Menu, Layout } from 'antd';
import { DeleteOutlined, TeamOutlined, AppstoreAddOutlined, DashboardOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const AdminPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const loadedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(loadedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        setUsers([...users, { key: users.length, ...values }]);
        form.resetFields();
        setIsModalOpen(false);
      })
      .catch(errorInfo => {
        console.log('Validation Failed:', errorInfo);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleDelete = key => {
    const updatedUsers = users.filter(user => user.key !== key);
    setUsers(updatedUsers);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={80} theme="dark">
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Menu.Item key="1" icon={<TeamOutlined />} onClick={() => {}}>
            Personel Listesi
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreAddOutlined />} onClick={() => {}}>
            Aktif Projeler
          </Menu.Item>
          <Menu.Item key="3" icon={<DashboardOutlined />} onClick={() => {}}>
            Dashboard
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: '24px', background: '#fff', minHeight: 280 }}>
          <div>
            <Button type="primary" onClick={showModal}>
              Yeni Kullanıcı Ekle
            </Button>
            <Modal
              title="Yeni Kullanıcı Ekle"
              visible={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              okText="Kaydet"
              cancelText="Kapat"
            >
              <Form layout="vertical" form={form}>
                <Form.Item label="İsim" name="name" rules={[{ required: true, message: 'İsim giriniz!' }]}>
                  <Input placeholder="İsim" />
                </Form.Item>
                <Form.Item label="Soyisim" name="surname" rules={[{ required: true, message: 'Soyisim giriniz!' }]}>
                  <Input placeholder="Soyisim" />
                </Form.Item>
                <Form.Item label="Görevi" name="role" rules={[{ required: true, message: 'Görevi giriniz!' }]}>
                  <Input placeholder="Görevi" />
                </Form.Item>
              </Form>
            </Modal>
            <Table dataSource={users} columns={[
              { title: 'İsim', dataIndex: 'name', key: 'name' },
              { title: 'Soyisim', dataIndex: 'surname', key: 'surname' },
              { title: 'Görevi', dataIndex: 'role', key: 'role' },
              {
                title: 'İşlemler',
                key: 'action',
                render: (_, record) => (
                  <Space size="middle">
                    <Button type="danger" icon={<DeleteOutlined />} onClick={() => handleDelete(record.key)}>
                      Sil
                    </Button>
                  </Space>
                ),
              },
            ]} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPanel;
