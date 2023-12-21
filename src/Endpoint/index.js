import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

const endpoints = [
  { title: 'Dashboard', path: '/dashboard' },
  { title: 'Dosyalar', path: '/dosyalar' },
  { title: 'Makine Park', path: '/makine-parki' },
  { title: 'Makine Puantaj', path: '/makine-puantaj' },
  { title: 'Muhasebe', path: '/muhasebe' },
  { title: 'Personel', path: '/personel' },
  { title: 'Personel Puantaj', path: '/personel-puantaj' },
  { title: 'Resimler', path: '/resimler' },
  { title: 'Yakıt Durumu', path: '/yakit-durum' },
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
