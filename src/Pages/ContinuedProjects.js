import React, { useState } from "react";
import { Button, Modal, Input, Form, Card, Row, Col, Tooltip } from "antd";
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

const ContinuedProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [setProjectData] = useState(null);
  const [projects, setProjects] = useState([]);

  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const newProject = form.getFieldsValue();
    setProjects([...projects, newProject]);
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleCardClick = (project) => {
    setProjectData(project);
  };

  const renderCardContent = (project) => (
    <div>
      <p>Personel Sayısı: {project.personelSayisi}</p>
      <p>Makine Sayısı: {project.makineSayisi}</p>
    </div>
  );

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
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={project.projeIsmi}
              style={{ 
                marginTop: 16, 
                backgroundColor: '#164e63', 
                color: 'white',
                width: '100%',
                height: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}
              onClick={() => handleCardClick(project)}
            >
              {renderCardContent(project)}
              <div
                style={{
                  position: 'absolute',
                  bottom: 16,
                  right: 16,
                  display: 'flex',
                  gap: 8,
                  color: 'white',
                }}
              >
                <Tooltip title="Bilgileri Görüntüle">
                  <InfoCircleOutlined />
                </Tooltip>
                <Tooltip title="Düzenle">
                  <EditOutlined />
                </Tooltip>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ContinuedProjects;
