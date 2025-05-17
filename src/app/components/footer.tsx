import React from 'react';
import Image from 'next/image';
import { Button, Col, Row } from 'antd';
import { useRouter } from 'next/router';

import logo from '../assets/images/finace_logo_white.png';

const Footer = () => {
  const router = useRouter();

  const onLogo = () => {
    router.push('/');
  };

  return (
    <div className="sw-footer">
      <Row
        style={{
          margin: '100px 0px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <div className="sw-footer-logo">
            <Image src={logo} alt="logo" onClick={onLogo} />
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
          <a href="mailto:sales@ailab.mn" className="sw-footer-contact">
            <i className="fa-solid fa-envelope"></i>
            <span>sales@ailab.mn</span>
          </a>
          <div className="sw-footer-contact">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:77772210">7777-2210</a>
          </div>
          <div className="sw-footer-contact">
            <Button type="link">
              <i className="fa-brands fa-square-facebook"></i>
            </Button>
            <Button type="link">
              <i className="fa-brands fa-square-instagram"></i>
            </Button>
          </div>
        </Col>
      </Row>
      <div className="sw-footer-footer">
        <span>Үйлчилгээний нөхцөл | @2025</span>
      </div>
    </div>
  );
};

export default Footer;
