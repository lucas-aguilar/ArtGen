import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import {
  FrameContainer,
  FrameControls,
  Shape1,
  CustomLogo,
  CustomImg,
  Shape2,
  ShapePent,
  PostTitleWord1,
  PostTitleWord2,
  PostTitleWord3,
  PostTitleWord4,
  PostTitleCta,
  Postlink,
} from './styles';

import logo from '../../assets/images/mcdonalds-logo.png';

interface AppProps {}

export const FoodBanner: React.FC<AppProps> = () => {
  // Banner data
  const [postTitleWord1, setPostTitleWord1] = useState('60%');
  const [postTitleWord2, setPostTitleWord2] = useState('OFF');
  const [postTitleWord3, setPostTitleWord3] = useState('Premium');
  const [postTitleWord4, setPostTitleWord4] = useState('Burguer');
  const [postTitleCta, setPostTitleCta] = useState('peça delivery!');
  const [postLink, setPostLink] = useState('www.zelo.com.vc/burguer-premium');
  const [postLogo, setPostLogo] = useState(logo);

  // Banner settings
  const [logoSize, setLogoSize] = useState('75px');
  const [logoXPosition, setLogoXPosition] = useState('-15px');
  const [logoYPosition, setLogoYPosition] = useState('-125px');

  const handleLogoFile = (event: any) => {
    setPostLogo(URL.createObjectURL(event.target.files[0]));
  };
  const handleLogoSize = (event: any) => {
    setLogoSize(event.target.value + 'px');
  };
  const handleLogoXPos = (event: any) => {
    setLogoXPosition(event.target.value + 'px');
  };
  const handleLogoYPos = (event: any) => {
    setLogoYPosition(event.target.value + 'px');
  };

  return (
    <Container>
      <Row>
        <Col className="p-4">
          <h1> The Food Banner Generator </h1>
          <Row>
            <Col md={8}>
              <FrameContainer className="mt-3">
                <Shape1>
                  <CustomLogo
                    logoSize={logoSize}
                    logoYPosition={logoYPosition}
                    logoXPosition={logoXPosition}
                  >
                    <img src={postLogo} alt="Burguer logo" />
                  </CustomLogo>
                </Shape1>
                <CustomImg />
                <Shape2>
                  <PostTitleWord1>{postTitleWord1}</PostTitleWord1>
                  <PostTitleWord2>{postTitleWord2}</PostTitleWord2>
                  <PostTitleWord3>{postTitleWord3}</PostTitleWord3>
                  <PostTitleWord4>{postTitleWord4}</PostTitleWord4>
                  <PostTitleCta>{postTitleCta}</PostTitleCta>
                  <ShapePent />
                </Shape2>
                <Postlink>{postLink}</Postlink>
              </FrameContainer>
            </Col>
            <Col md={4}>
              <FrameControls className="mt-3 p-3">
                <Form>
                  <h3 className="text-center text-uppercase">Settings</h3>
                  <h4>Logo</h4>
                  <Form.Group controlId="logoFile">
                    <Form.File
                      id="LogoFile"
                      label="Select a file to replace the logo"
                      onChange={handleLogoFile}
                      accept="image/*"
                    />
                  </Form.Group>
                  <Form.Group controlId="logoSize">
                    <Form.Label>
                      <b>Size</b>
                    </Form.Label>
                    <Form.Control
                      type="range"
                      min="50"
                      max="200"
                      step="1"
                      onChange={handleLogoSize}
                    />
                  </Form.Group>
                  <Form.Group controlId="logoXPosition">
                    <Form.Label>
                      <b>X Position</b>
                    </Form.Label>
                    <Form.Control
                      type="range"
                      min="-75"
                      max="75"
                      step="1"
                      onChange={handleLogoXPos}
                    />
                  </Form.Group>
                  <Form.Group controlId="logoYPosition">
                    <Form.Label>
                      <b>Y Position</b>
                    </Form.Label>
                    <Form.Control
                      type="range"
                      min="-145"
                      max="0"
                      step="1"
                      onChange={handleLogoYPos}
                    />
                  </Form.Group>
                </Form>
              </FrameControls>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
