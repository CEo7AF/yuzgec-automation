<<<<<<< HEAD
import React from "react";

const AdminPanel = () => {
  return (
    <div>
      <h1>ADMİN PANEL</h1>
     
    </div>
  );
}

export default AdminPanel;
=======
import React, { useState } from "react";
import { Button, Modal, Input, Form, Select } from "antd";

function AdminPanel() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
            <Input placeholder="İsim" />
          </Form.Item>
          <Form.Item label="Soyisim">
            <Input placeholder="Soyisim" />
          </Form.Item>
          <Form.Item label="Görevi">
            <Select placeholder="Görevi Seçiniz">
              <Select.Option value="yönetici">Yönetici</Select.Option>
              <Select.Option value="muhasebe">Muhasebe</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AdminPanel;
>>>>>>> f8f38b752027d0429f994b4a12e2da0d65c09cd2
