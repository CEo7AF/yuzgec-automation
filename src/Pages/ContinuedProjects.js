import React, { useState, useEffect } from "react";
import { Button, Modal, Input, Form, Card, Row, Col } from "antd";

const ContinuedProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

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
    if (selectedProject) {
      // Güncelleme işlemi
      const updatedProjects = projects.map((project) =>
        project === selectedProject ? form.getFieldsValue() : project
      );
      setProjects(updatedProjects);
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
    } else {
      // Yeni proje ekleme işlemi
      const newProject = form.getFieldsValue();
      const updatedProjects = [...projects, newProject];
      setProjects(updatedProjects);
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
    }

    form.resetFields();
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleDelete = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  const handleUpdate = (project) => {
    setSelectedProject(project);
    form.setFieldsValue(project);
    showModal();
  };

  const handleView = (project) => {
    // Görüntüleme işlemi
    // Buraya proje görüntülemeyle ilgili kodları ekleyebilirsiniz
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Yeni Proje Ekle
      </Button>
      <Modal
        title={selectedProject ? "Proje Güncelle" : "Yeni Proje Ekle"}
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
                backgroundColor: "#164e63",
                color: "white",
                width: 300,
                height: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>Personel Sayısı: {project.personelSayisi}</p>
              <p>Makine Sayısı: {project.makineSayisi}</p>
              <Button type="primary" danger onClick={() => handleDelete(index)}>
                Sil
              </Button>
              <Button type="primary" onClick={() => handleUpdate(project)}>
                Güncelle
              </Button>
              <Button type="primary" onClick={() => handleView(project)}>
                Projeye git
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ContinuedProjects;
