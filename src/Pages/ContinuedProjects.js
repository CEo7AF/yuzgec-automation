import React, { useState } from "react";
import { Button, Modal, Input, Form, Card } from "antd";

const ContuniedProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectData, setProjectData] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setProjectData(form.getFieldsValue());
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Yeni Proje Ekle
      </Button>
      <Modal
        title="Yeni Proje Ekle"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Kaydet"
        cancelText="Kapat"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="projeIsmi" label="Proje İsmi">
            <Input placeholder="Proje ismini giriniz" />
          </Form.Item>
          <Form.Item name="personelSayisi" label="Personel Sayısı">
            <Input placeholder="Personel sayısını giriniz" type="number" />
          </Form.Item>
          <Form.Item name="makineSayisi" label="Makine Sayısı">
            <Input placeholder="Makine sayısını giriniz" type="number" />
          </Form.Item>
        </Form>
      </Modal>
      {projectData && (
        <Card
          title={projectData.projeIsmi}
          style={{ 
            marginTop: 16, 
            backgroundColor: '#164e63', 
            color: 'white',
            width: 300, // Kartın genişliği
            height: 300, // Kartın yüksekliği
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <p>Personel Sayısı: {projectData.personelSayisi}</p>
          <p>Makine Sayısı: {projectData.makineSayisi}</p>
        </Card>
      )}
    </>
  );
};

export default ContuniedProjects;
