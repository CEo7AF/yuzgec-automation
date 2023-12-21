import React, { useState } from "react";
import { Button, Modal, Input, Form, Card, Row, Col } from "antd";

const ContinuedProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const [projects, setProjects] = useState([]); // Yeni bir state ekledik

  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const newProject = form.getFieldsValue();
    setProjects([...projects, newProject]); // Yeni projeyi ekleyerek projeleri güncelle
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Yeni Proje Ekle
      </Button>
      <Modal
        title="Yeni Proje Ekle"
        visible={isModalOpen}
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
      <Row gutter={16}>
        {/* Kartları yan yana sıralamak için Row ve Col kullanıldı */}
        {projects.map((project, index) => (
          <Col key={index} span={5}>
            <Card
              title={project.projeIsmi}
              style={{ 
                marginTop: 16, 
                backgroundColor: '#164e63', 
                color: 'white',
                width: 300,
                height: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p>Personel Sayısı: {project.personelSayisi}</p>
              <p>Makine Sayısı: {project.makineSayisi}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ContinuedProjects;
