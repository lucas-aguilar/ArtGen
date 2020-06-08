import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

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
import productImg from '../../assets/images/burguer.jpg';

interface AppProps {}

export const FoodBanner: React.FC<AppProps> = () => {
  // Banner data
  const [postTitleWord1, setPostTitleWord1] = useState('60%');
  const [postTitleWord2, setPostTitleWord2] = useState('OFF');
  const [postTitleWord3, setPostTitleWord3] = useState('Premium');
  const [postTitleWord4, setPostTitleWord4] = useState('Burguer');
  const [postTitleCta, setPostTitleCta] = useState('peça delivery!');
  const [postLink, setPostLink] = useState('www.zelo.com.vc/burguer-premium');

  // Logo settings
  const [postLogo, setPostLogo] = useState(logo);
  const [displayLogoSettings, setDisplayLogoSettings] = useState(true);
  const [logoSize, setLogoSize] = useState('75px');
  const [logoXPosition, setLogoXPosition] = useState('-15px');
  const [logoYPosition, setLogoYPosition] = useState('-125px');

  // Image settings
  const [postImage, setPostImage] = useState(productImg);
  const [displayImageSettings, setDisplayImageSettings] = useState(true);
  const [imgSize, setImgSize] = useState('cover');
  const [imgPositionX, setImgPositionX] = useState('right');
  const [imgPositionY, setImgPositionY] = useState('');

  const toggleLogoSettings = () => {
    setDisplayLogoSettings(!displayLogoSettings);
  };
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

  const toggleImageSettings = () => {
    setDisplayImageSettings(!displayImageSettings);
  };
  const handleImageFile = (event: any) => {
    setPostImage(URL.createObjectURL(event.target.files[0]));
  };
  const handleImgSize = (event: any) => {
    setImgSize(event.target.value + '%');
  };
  const handleImgPositionX = (event: any) => {
    setImgPositionX(event.target.value + '%');
  };
  const handleImgPositionY = (event: any) => {
    setImgPositionY(event.target.value + '%');
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
                <CustomImg
                  productImg={postImage}
                  imgSize={imgSize}
                  imgPositionX={imgPositionX}
                  imgPositionY={imgPositionY}
                />
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
                  <h4>
                    Logo
                    <Button
                      variant="light"
                      size="sm"
                      className="float-right"
                      onClick={toggleLogoSettings}
                    >
                      {displayLogoSettings ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </Button>
                  </h4>
                  {displayLogoSettings ? (
                    <>
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
                    </>
                  ) : (
                    ''
                  )}
                  <h4>
                    Product Image
                    <Button
                      variant="light"
                      size="sm"
                      className="float-right"
                      onClick={toggleImageSettings}
                    >
                      {displayImageSettings ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </Button>
                  </h4>
                  {displayImageSettings ? (
                    <>
                      <Form.Group controlId="imageFile">
                        <Form.File
                          id="ImageFile"
                          label="Select a file to replace the product image"
                          onChange={handleImageFile}
                          accept="image/*"
                        />
                      </Form.Group>
                      <Form.Group controlId="imgSize">
                        <Form.Label>
                          <b>Size</b>
                        </Form.Label>
                        <Form.Control
                          type="range"
                          min="1"
                          max="200"
                          step="1"
                          onChange={handleImgSize}
                        />
                      </Form.Group>
                      <Form.Group controlId="imgXPosition">
                        <Form.Label>
                          <b>X Position</b>
                        </Form.Label>
                        <Form.Control
                          type="range"
                          min="-100"
                          max="150"
                          step="1"
                          onChange={handleImgPositionX}
                        />
                      </Form.Group>
                      <Form.Group controlId="imgYPosition">
                        <Form.Label>
                          <b>Y Position</b>
                        </Form.Label>
                        <Form.Control
                          type="range"
                          min="-100"
                          max="150"
                          step="1"
                          onChange={handleImgPositionY}
                        />
                      </Form.Group>
                    </>
                  ) : (
                    ''
                  )}
                </Form>
              </FrameControls>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
