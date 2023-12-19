import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Projeler" bordered={false}>
            <Link to="/projects">
              <Button type="primary">Projeleri Görüntüle</Button>
            </Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Ajanda" bordered={false}>
            <Link to="/calender">
              <Button type="primary">Ajandayı Görüntüle</Button>
            </Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Admin Panel" bordered={false}>
            <Link to="/admin-panel">
              <Button type="primary">Admin Paneli Aç</Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home;