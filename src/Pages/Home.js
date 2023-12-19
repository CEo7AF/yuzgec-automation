import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Row gutter={16}>
<<<<<<< HEAD
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
=======
    <Col span={8}>
      <Card title="Admin Panel" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Projeler" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Ajanda" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
>>>>>>> f8f38b752027d0429f994b4a12e2da0d65c09cd2
    </div>
  )
}

export default Home;