import React from "react";
import { Button } from "antd";
import { Link } from 'react-router-dom';

const CompletedProjects = () => {
  return (
    <div>
      <h1>TAMAMLANAN PROJELER BU SAYFADA GÖRÜNTÜLENİR</h1>
      <div style={{ position: 'fixed', bottom: '70px', left: '16px', zIndex: '1000' }}>
        <Link to="/">
          <Button type="default" style={{ backgroundColor: '#ccc' }}>
            Ana Sayfaya Dön
          </Button>
        </Link>
      </div>
    </div>

  );

  
}

export default CompletedProjects;