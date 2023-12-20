import React, { useState, useEffect } from "react";
import { Button, Modal, Input, Form, Select, Card } from "antd";

function AdminPanel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', surname: '', role: '' });

  // Uygulama başladığında localStorage'dan kullanıcıları yükle
  useEffect(() => {
    const loadedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(loadedUsers);
  }, []);

  // Kullanıcılar değiştiğinde, localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setIsModalOpen(false);
    setNewUser({ name: '', surname: '', role: '' });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (key, value) => {
    setNewUser({ ...newUser, [key]: value });
  };

  const handleDelete = (index) => {
    const newUsers = users.filter((_, idx) => idx !== index);
    setUsers(newUsers);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Yeni Kullanıcı Ekle
      </Button>
      <Modal
        title="Yeni Kullanıcı Ekle"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Kapat"
        okText="Kaydet"
      >
        <Form layout="vertical">
          <Form.Item label="İsim">
            <Input placeholder="İsim" onChange={(e) => handleChange('name', e.target.value)} />
          </Form.Item>
          <Form.Item label="Soyisim">
            <Input placeholder="Soyisim" onChange={(e) => handleChange('surname', e.target.value)} />
          </Form.Item>
          <Form.Item label="Görevi">
            <Select placeholder="Görevi Seçiniz" onChange={(value) => handleChange('role', value)}>
              <Select.Option value="yönetici">Yönetici</Select.Option>
              <Select.Option value="muhasebe">Muhasebe</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <div>
        {users.map((user, index) => (
          <Card  key={index} title={user.name + ' ' + user.surname} >
            <p>Görevi: {user.role}</p>
            <Button type="primary" danger onClick={() => handleDelete(index)}>
              Sil
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}

export default AdminPanel;
