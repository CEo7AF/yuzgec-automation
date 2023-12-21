import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

const endpoints = [
  { title: 'Dashboard', path: '/dashboard' },
  { title: 'Dosyalar', path: '/files' },
  { title: 'Makine Park', path: '/machinery-park' },
  { title: 'Makine Puantaj', path: '/machinery-attendance' },
  { title: 'Muhasebe', path: '/accounting' },
  { title: 'Personel', path: '/personnel' },
  { title: 'Personel Puantaj', path: '/personnel-attendance' },
  { title: 'Resimler', path: '/images' },
  { title: 'Yakıt Durumu', path: '/fuel-status' },
];

const EndpointPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        {endpoints.map((endpoint, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Link to={endpoint.path}>
              <Card title={endpoint.title} style={{ margin: '16px', textAlign: 'center' }}>
                Git
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EndpointPage;
