import React from 'react';
import { Card, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Tamamlanan Projeler" bordered={false}>
            <Link to="/complated-projects">
              <Button type="primary">Detayları Görüntüle</Button>
            </Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Devam Eden Projeler" bordered={false}>
            <Link to="/continued-projects">
              <Button type="primary">Detayları Görüntüle</Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;