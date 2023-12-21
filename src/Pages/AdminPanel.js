import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input, Table, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const AdminPanel = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Burada, sayfa yüklendiğinde localStorage'dan kullanıcıları yükleme işlemleri yapılabilir.
    const loadedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(loadedUsers);
  }, []);

  useEffect(() => {
    // Burada, kullanıcılar değiştiğinde localStorage'a kaydetme işlemleri yapılabilir.
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const columns = [
    {
      title: 'İsim',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Soyisim',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Görevi',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'İşlemler',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="danger" icon={<DeleteOutlined />} onClick={() => handleDelete(record.key)}>
            Sil
          </Button>
        </Space>
      ),
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        setUsers([...users, { key: users.length, ...values }]);
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch(errorInfo => {
        console.log('Validation Failed:', errorInfo);
      });
  };

  const handleDelete = key => {
    const updatedUsers = users.filter(user => user.key !== key);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Yeni Kullanıcı Ekle
      </Button>
      <Modal title="Yeni Kullanıcı Ekle" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical" name="userForm">
          <Form.Item name="name" label="İsim" rules={[{ required: true, message: 'Lütfen ismi girin!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="surname" label="Soyisim" rules={[{ required: true, message: 'Lütfen soyismi girin!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Görevi" rules={[{ required: true, message: 'Lütfen görevi girin!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={users} />
    </div>
  );
};

export default AdminPanel;
