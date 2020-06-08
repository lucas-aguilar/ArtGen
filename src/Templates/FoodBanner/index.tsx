import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {
  BannerFrame,
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
  const [postTitleWord1, setPostTitleWord1] = useState('60%');
  const [postTitleWord2, setPostTitleWord2] = useState('OFF');
  const [postTitleWord3, setPostTitleWord3] = useState('Premium');
  const [postTitleWord4, setPostTitleWord4] = useState('Burguer');
  const [postTitleCta, setPostTitleCta] = useState('peça delivery!');
  const [postLink, setPostLink] = useState('www.zelo.com.vc/burguer-premium');
  return (
    <Container>
      <Row>
        <Col className="p-4">
          <h1> The Food Banner Generator </h1>
          <Row>
            <Col md={8}>
              <BannerFrame className="mt-3">
                <Shape1>
                  <CustomLogo>
                    <img src={logo} alt="Burguer logo" />
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
              </BannerFrame>
            </Col>
            <Col md={4}>
              <FrameControls className="mt-3" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
