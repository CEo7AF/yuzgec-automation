import React from 'react';
import { Card, Col, Row } from 'antd';

function Home() {
  return (
    <div>
      <Row gutter={16}>
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
    </div>
  )
}

export default Home