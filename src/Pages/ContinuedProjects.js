import React, { useState, useEffect } from "react";
import { Button, Modal, Input, Form, Card, Row, Col } from "antd";

const ContinuedProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const [form] = Form.useForm();

  useEffect(() => {
    // Sayfa yüklendiğinde local storage'dan verileri al
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(storedProjects);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const newProject = form.getFieldsValue();
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);

    // Local storage'a verileri kaydet
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    form.resetFields();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
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
              <Button type="primary" danger onClick={() => handleDelete(index)}>
                Sil
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ContinuedProjects;
