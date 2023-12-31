import React from 'react';
import { Card, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Card title="Tamamlanan Projeler" bordered={false}>
            <Link to="/complated-projects">
              <Button type="primary">Detayları Görüntüle</Button>
            </Link>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Card title="Devam Eden Projeler" bordered={false}>
            <Link to="/continued-projects">
              <Button type="primary">Detayları Görüntüle</Button>
            </Link>
          </Card>
        </Col>
      </Row>

      {/* Geri Dön Butonu */}
      <div style={{ position: 'fixed', bottom: '70px', left: '16px', zIndex: '1000' }}>
        <Link to="/">
          <Button type="default" style={{ backgroundColor: '#ccc' }}>
            Geri Dön
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
