// src/Pages/Error.js
import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Result
        status="404"
        title="Sayfa Bulunamadı"
        subTitle="Üzgünüz, aradığınız sayfa bulunamadı."
      />
      <Link to="/">
        <Button type="primary" style={{ marginTop: '20px' }}>
          Lütfen Giriş Yapın
        </Button>
      </Link>
    </div>
  );
};

export default Error;
