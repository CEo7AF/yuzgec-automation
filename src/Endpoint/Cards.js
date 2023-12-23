// EndpointPage.js
import React from 'react';
import { Row, Col, Card, Button,Space } from 'antd';
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
  const cardStyle = {
    margin: '16px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#164e63',
  };

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        {endpoints.map((endpoint, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Link to={endpoint.path}>
              <Card title={endpoint.title} style={cardStyle}>
                Git
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

      <Space direction="vertical" style={{ marginTop: '290px'}}>
  <Link to="/completed-projects">
    <Button type="primary" block>
      Projeyi Bitir
    </Button>
  </Link>
</Space>
      
    </div>
  );
};

export default EndpointPage;
