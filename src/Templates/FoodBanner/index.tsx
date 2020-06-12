import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { FaChevronUp, FaChevronDown, FaShareAltSquare } from 'react-icons/fa';

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

  // Banner text data
  const [postTextLine1, setPostTextLine1] = useState('60%');
  const handleTextLine1Change = (event: any) => {
    setPostTextLine1(event.target.value);
  };
  const [postTextLine2, setPostTextLine2] = useState('OFF');
  const handleTextLine2Change = (event: any) => {
    setPostTextLine2(event.target.value);
  };
  const [postTextLine3, setPostTextLine3] = useState('Premium');
  const handleTextLine3Change = (event: any) => {
    setPostTextLine3(event.target.value);
  };
  const [postTextLine4, setPostTextLine4] = useState('Burguer');
  const handleTextLine4Change = (event: any) => {
    setPostTextLine4(event.target.value);
  };
  const [postTitleCta, setPostTitleCta] = useState('peça delivery!');
  const handleTextCtaChange = (event: any) => {
    setPostTitleCta(event.target.value);
  };
  const [postLink, setPostLink] = useState('www.zelo.com.vc/burguer-premium');
  const handlePostLinkChange = (event: any) => {
    setPostLink(event.target.value);
  };

  // Text Settings
  const [displayTextSettings, setDisplayTextSettings] = useState(true);
  const toggleTextSettings = () => {
    setDisplayTextSettings(!displayTextSettings);
  };
  // LINE 1
  const [displayTextLine1, setDisplayTextLine1] = useState(false);
  const toggleTextLine1 = () => {
    setDisplayTextLine1(!displayTextLine1);
  };
  const [textLine1Color, setTextLine1Color] = useState('#fff');
  const [textLine1FontSize, setTextLine1FontSize] = useState('42px');
  const handleLine1FontSize = (event: any) => {
    setTextLine1FontSize(event.target.value + 'px');
  };
  const [textLine1FontWeight, setTextLine1FontWeight] = useState('normal');
  const [textLine1Right, setTextLine1Right] = useState('30px');
  const handleLine1Right = (event: any) => {
    setTextLine1Right(event.target.value + 'px');
  };
  const [textLine1Top, setTextLine1Top] = useState('105px');
  const handleLine1Top = (event: any) => {
    setTextLine1Top(event.target.value + 'px');
  };
  // LINE 2
  const [displayTextLine2, setDisplayTextLine2] = useState(false);
  const toggleTextLine2 = () => {
    setDisplayTextLine2(!displayTextLine2);
  };
  const [textLine2Color, setTextLine2Color] = useState('#000');
  const [textLine2FontSize, setTextLine2FontSize] = useState('34px');
  const [textLine2FontWeight, setTextLine2FontWeight] = useState('normal');
  const [textLine2Right, setTextLine2Right] = useState('42px');
  const [textLine2Top, setTextLine2Top] = useState('150px');
  // LINE 3
  const [displayTextLine3, setDisplayTextLine3] = useState(false);
  const toggleTextLine3 = () => {
    setDisplayTextLine3(!displayTextLine3);
  };
  const [textLine3Color, setTextLine3Color] = useState('#fff');
  const [textLine3FontSize, setTextLine3FontSize] = useState('40px');
  const [textLine3FontWeight, setTextLine3FontWeight] = useState('bold');
  const [textLine3Right, setTextLine3Right] = useState('14px');
  const [textLine3Top, setTextLine3Top] = useState('192px');
  // LINE 4
  const [displayTextLine4, setDisplayTextLine4] = useState(false);
  const toggleTextLine4 = () => {
    setDisplayTextLine4(!displayTextLine4);
  };
  const [textLine4Color, setTextLine4Color] = useState('#fff');
  const [textLine4FontSize, setTextLine4FontSize] = useState('52px');
  const [textLine4FontWeight, setTextLine4FontWeight] = useState('bold');
  const [textLine4Right, setTextLine4Right] = useState('15px');
  const [textLine4Top, setTextLine4Top] = useState('230px');
  // CTA
  const [displayTextCta, setDisplayTextCta] = useState(false);
  const toggleTextCta = () => {
    setDisplayTextCta(!displayTextCta);
  };
  const [textCtaColor, setTextCtaColor] = useState('#fff');
  const [textCtaFontSize, setTextCtaFontSize] = useState('18px');
  const [textCtaFontWeight, setTextCtaFontWeight] = useState('bold');
  const [textCtaRight, setTextCtaRight] = useState('45px');
  const [textCtaTop, setTextCtaTop] = useState('310px');

  return (
    <Container>
      <Row>
        <Col className="px-4 pt-2">
          <h1>
            The Promo Banner Generator
            <Button className="float-right mt-2 p-2">
              <FaShareAltSquare className="mr-2" size="26" /> Share in Social
              Medias
            </Button>
          </h1>

          <Row>
            <Col md={7}>
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
            <Col md={5}>
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
                  {displayTextSettings ? (
                    <div className="pl-2">
                      <h5>
                        Line 1
                        <Button
                          variant="dark"
                          size="sm"
                          className="float-right"
                          onClick={toggleTextLine1}
                        >
                          {displayTextLine1 ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </Button>
                      </h5>
                      {displayTextLine1 ? (
                        <Form className="pl-2">
                          <Form.Group controlId="line1Text">
                            <Form.Control
                              type="text"
                              placeholder="Enter text of the 1st line"
                              value={postTextLine1}
                              onChange={handleTextLine1Change}
                            />
                          </Form.Group>
                          <Form.Group controlId="line1FontSize">
                            <Form.Label>
                              <b>Font Size</b>
                            </Form.Label>
                            <Form.Control
                              type="range"
                              min="12"
                              max="200"
                              step="1"
                              onChange={handleLine1FontSize}
                            />
                          </Form.Group>
                          <Form.Group controlId="line1Right">
                            <Form.Label>
                              <b>Position X</b>
                            </Form.Label>
                            <Form.Control
                              type="range"
                              min="0"
                              max="310"
                              step="1"
                              onChange={handleLine1Right}
                            />
                          </Form.Group>
                          <Form.Group controlId="line1Top">
                            <Form.Label>
                              <b>Position Y</b>
                            </Form.Label>
                            <Form.Control
                              type="range"
                              min="-205"
                              max="245"
                              step="1"
                              onChange={handleLine1Top}
                            />
                          </Form.Group>
                        </Form>
                      ) : (
                        ' '
                      )}
                      <h5>
                        Line 2
                        <Button
                          variant="dark"
                          size="sm"
                          className="float-right"
                          onClick={toggleTextLine2}
                        >
                          {displayTextLine2 ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </Button>
                      </h5>
                      {displayTextLine2 ? (
                        <Form className="pl-2">
                          <Form.Group controlId="line2Text">
                            <Form.Control
                              type="text"
                              placeholder="Enter text of the 2nd line"
                              value={postTextLine2}
                              onChange={handleTextLine2Change}
                            />
                          </Form.Group>
                        </Form>
                      ) : (
                        ' '
                      )}
                      <h5>
                        Line 3
                        <Button
                          variant="dark"
                          size="sm"
                          className="float-right"
                          onClick={toggleTextLine3}
                        >
                          {displayTextLine3 ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </Button>
                      </h5>
                      {displayTextLine3 ? (
                        <Form className="pl-2">
                          <Form.Group controlId="line3Text">
                            <Form.Control
                              type="text"
                              placeholder="Enter text of the 3rd line"
                              value={postTextLine3}
                              onChange={handleTextLine3Change}
                            />
                          </Form.Group>
                        </Form>
                      ) : (
                        ' '
                      )}
                      <h5>
                        Line 4
                        <Button
                          variant="dark"
                          size="sm"
                          className="float-right"
                          onClick={toggleTextLine4}
                        >
                          {displayTextLine4 ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </Button>
                      </h5>
                      {displayTextLine4 ? (
                        <Form className="pl-2">
                          <Form.Group controlId="line4Text">
                            <Form.Control
                              type="text"
                              placeholder="Enter text of the 4th line"
                              value={postTextLine4}
                              onChange={handleTextLine4Change}
                            />
                          </Form.Group>
                        </Form>
                      ) : (
                        ' '
                      )}
                      <h5>
                        CTA
                        <Button
                          variant="dark"
                          size="sm"
                          className="float-right"
                          onClick={toggleTextCta}
                        >
                          {displayTextCta ? <FaChevronUp /> : <FaChevronDown />}
                        </Button>
                      </h5>
                      {displayTextCta ? (
                        <Form className="pl-2">
                          <Form.Group controlId="ctaText">
                            <Form.Control
                              type="text"
                              placeholder="Enter text of the CTA"
                              value={postTitleCta}
                              onChange={handleTextCtaChange}
                            />
                          </Form.Group>
                        </Form>
                      ) : (
                        ' '
                      )}
                      <h5>Post Link</h5>
                      <Form className="pl-2">
                        <Form.Group controlId="ctaText">
                          <Form.Control
                            type="text"
                            placeholder="Enter the post link"
                            value={postLink}
                            onChange={handlePostLinkChange}
                          />
                        </Form.Group>
                      </Form>
                    </div>
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
