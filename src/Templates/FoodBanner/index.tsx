import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

import { SketchPicker } from 'react-color';

import {
  FrameContainer,
  FrameControls,
  Shape1,
  CustomLogo,
  CustomImg,
  Shape2,
  ShapePent,
  PostTextLine1,
  PostTextLine2,
  PostTextLine3,
  PostTextLine4,
  PostTitleCta,
  Postlink,
} from './styles';

import logo from '../../assets/images/mcdonalds-logo.png';
import productImg from '../../assets/images/burguer.jpg';

interface AppProps {}

export const FoodBanner: React.FC<AppProps> = () => {
  // Banner data
  const [postTextLine1, setPostTextLine1] = useState('60%');
  const [postTextLine2, setPostTextLine2] = useState('OFF');
  const [postTextLine3, setPostTextLine3] = useState('Premium');
  const [postTextLine4, setPostTextLine4] = useState('Burguer');
  const [postTitleCta, setPostTitleCta] = useState('peça delivery!');
  const [postLink, setPostLink] = useState('www.zelo.com.vc/burguer-premium');

  // Logo settings
  const [postLogo, setPostLogo] = useState(logo);
  const [displayLogoSettings, setDisplayLogoSettings] = useState(false);
  const [logoSize, setLogoSize] = useState('75px');
  const [logoXPosition, setLogoXPosition] = useState('-15px');
  const [logoYPosition, setLogoYPosition] = useState('-125px');
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

  // Image settings
  const [postImage, setPostImage] = useState(productImg);
  const [displayImageSettings, setDisplayImageSettings] = useState(false);
  const [imgSize, setImgSize] = useState('cover');
  const [imgPositionX, setImgPositionX] = useState('right');
  const [imgPositionY, setImgPositionY] = useState('');
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

  // Shape color
  const [displayShapesColor, setDisplayShapesColor] = useState(false);
  const [shapesColor, setShapesColor] = useState('#fe0000');
  const toggleShapesColor = () => {
    setDisplayShapesColor(!displayShapesColor);
  };
  const handleShapesColorChange = (color: any) => {
    setShapesColor(color.hex);
  };

  // Text Settings
  const [displayTextSettings, setDisplayTextSettings] = useState(true);
  // LINE 1
  const [textLine1Color, setTextLine1Color] = useState('#fff');
  const [textLine1FontSize, setTextLine1FontSize] = useState('42px');
  const [textLine1FontWeight, setTextLine1FontWeight] = useState('normal');
  const [textLine1Right, setTextLine1Right] = useState('30px');
  const [textLine1Top, setTextLine1Top] = useState('105px');
  // LINE 2
  const [textLine2Color, setTextLine2Color] = useState('#000');
  const [textLine2FontSize, setTextLine2FontSize] = useState('34px');
  const [textLine2FontWeight, setTextLine2FontWeight] = useState('normal');
  const [textLine2Right, setTextLine2Right] = useState('42px');
  const [textLine2Top, setTextLine2Top] = useState('150px');
  // LINE 3
  const [textLine3Color, setTextLine3Color] = useState('#fff');
  const [textLine3FontSize, setTextLine3FontSize] = useState('40px');
  const [textLine3FontWeight, setTextLine3FontWeight] = useState('bold');
  const [textLine3Right, setTextLine3Right] = useState('14px');
  const [textLine3Top, setTextLine3Top] = useState('192px');
  // LINE 4
  const [textLine4Color, setTextLine4Color] = useState('#fff');
  const [textLine4FontSize, setTextLine4FontSize] = useState('52px');
  const [textLine4FontWeight, setTextLine4FontWeight] = useState('bold');
  const [textLine4Right, setTextLine4Right] = useState('15px');
  const [textLine4Top, setTextLine4Top] = useState('230px');
  // CTA
  const [textCtaColor, setTextCtaColor] = useState('#fff');
  const [textCtaFontSize, setTextCtaFontSize] = useState('18px');
  const [textCtaFontWeight, setTextCtaFontWeight] = useState('bold');
  const [textCtaRight, setTextCtaRight] = useState('45px');
  const [textCtaTop, setTextCtaTop] = useState('310px');

  const toggleTextSettings = () => {
    setDisplayTextSettings(!displayTextSettings);
  };

  return (
    <Container>
      <Row>
        <Col className="p-4">
          <h1> The Food Banner Generator </h1>
          <Row>
            <Col md={8}>
              <FrameContainer className="mt-3">
                <Shape1 color={shapesColor}>
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
                <Shape2 color={shapesColor}>
                  <PostTextLine1
                    color={textLine1Color}
                    fontSize={textLine1FontSize}
                    fontWeight={textLine1FontWeight}
                    right={textLine1Right}
                    top={textLine1Top}
                  >
                    {postTextLine1}
                  </PostTextLine1>
                  <PostTextLine2
                    color={textLine2Color}
                    fontSize={textLine2FontSize}
                    fontWeight={textLine2FontWeight}
                    right={textLine2Right}
                    top={textLine2Top}
                  >
                    {postTextLine2}
                  </PostTextLine2>
                  <PostTextLine3
                    color={textLine3Color}
                    fontSize={textLine3FontSize}
                    fontWeight={textLine3FontWeight}
                    right={textLine3Right}
                    top={textLine3Top}
                  >
                    {postTextLine3}
                  </PostTextLine3>
                  <PostTextLine4
                    color={textLine4Color}
                    fontSize={textLine4FontSize}
                    fontWeight={textLine4FontWeight}
                    right={textLine4Right}
                    top={textLine4Top}
                  >
                    {postTextLine4}
                  </PostTextLine4>
                  <PostTitleCta
                    color={textCtaColor}
                    fontSize={textCtaFontSize}
                    fontWeight={textCtaFontWeight}
                    right={textCtaRight}
                    top={textCtaTop}
                  >
                    {postTitleCta}
                  </PostTitleCta>
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
                  <h4>
                    Shapes color
                    <Button
                      variant="light"
                      size="sm"
                      className="float-right"
                      onClick={toggleShapesColor}
                    >
                      {displayShapesColor ? <FaChevronUp /> : <FaChevronDown />}
                    </Button>
                  </h4>
                  {displayShapesColor ? (
                    <>
                      <SketchPicker
                        color={shapesColor}
                        onChangeComplete={handleShapesColorChange}
                      />
                    </>
                  ) : (
                    ''
                  )}
                  <h4>
                    Text Settings
                    <Button
                      variant="light"
                      size="sm"
                      className="float-right"
                      onClick={toggleTextSettings}
                    >
                      {displayTextSettings ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </Button>
                  </h4>
                  {displayTextSettings ? <></> : ''}
                </Form>
              </FrameControls>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
