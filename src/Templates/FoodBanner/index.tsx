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
  PostTitle,
  PostDueDate,
  Shape3,
  Postlink,
} from './styles';

interface AppProps {}

export const FoodBanner: React.FC<AppProps> = ({}) => {
  const [postTitle, setPostTitle] = useState('60% OFF Tasty Food');
  const [postDueDate, setPostDueDate] = useState('22/06/2019');
  const [postLink, setPostLink] = useState('https://zelo.com.vc/promo-food');
  return (
    <Container>
      <Row>
        <Col className="p-4">
          <h1> The Food Banner Generator </h1>
          <Row>
            <Col md={8}>
              <BannerFrame className="mt-3">
                <Shape1>
                  <CustomLogo />
                </Shape1>
                <CustomImg />
                <Shape2>
                  <PostTitle>{postTitle}</PostTitle>
                  <PostDueDate>{postDueDate}</PostDueDate>
                </Shape2>
                <Shape3>
                  <Postlink>{postLink}</Postlink>
                </Shape3>
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
