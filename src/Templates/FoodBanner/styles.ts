import styled from 'styled-components';
import prodImg from '../../assets/images/burguer.jpg';

interface CustomLogoProps {
  logoSize: any;
  logoYPosition: any;
  logoXPosition: any;
}

interface CustomImgProps {
  productImg: any;
  imgSize: any;
  imgPositionX: any;
  imgPositionY: any;
}

interface CustomShapeProps {
  color: any;
}

interface CustomTextProps {
  color: any;
  fontSize: any;
  fontWeight: any;
  right: any;
  top: any;
}

export const FrameContainer = styled.div`
  border: 1px solid #333;
  height: 540px;
  overflow: hidden;
  position: relative;
  width: 540px;
`;
export const FrameControls = styled.div`
  border: 1px solid #333;
  height: 640px;
  overflow: auto;
  width: 100%;
`;
export const Shape1 = styled.div<CustomShapeProps>`
  border-left: 105px solid transparent;
  border-right: 255px solid transparent;
  border-top: 135px solid ${(props) => props.color || '#fe0000'};
  height: 0;
  position: absolute;
  width: 0;
  z-index: 10;
`;
export const CustomLogo = styled.span<CustomLogoProps>`
  color: #fff;
  font-size: 46px;
  left: ${(props) => props.logoXPosition || '-15px'};
  position: absolute;
  text-transform: uppercase;
  top: ${(props) => props.logoYPosition || '-125px'};
  z-index: 11;
  img {
    height: auto;
    width: ${(props) => props.logoSize || '75px'};
  }
`;
export const CustomImg = styled.div<CustomImgProps>`
  background-image: url(${(props) => props.productImg || prodImg});
  background-size: ${(props) => props.imgSize || 'cover'};
  background-position: ${(props) =>
    props.imgPositionX + ' ' + props.imgPositionY};
  height: 540px;
  position: absolute;
  width: 540px;
  z-index: 1;
`;
export const Shape2 = styled.div<CustomShapeProps>`
  border-bottom: 385px solid ${(props) => props.color || '#fe0000'};
  border-left: 420px solid transparent;
  bottom: -2px;
  height: 0;
  position: absolute;
  right: -2px;
  width: 0;
  z-index: 11;
`;
export const ShapePent = styled.div`
  position: absolute;
  bottom: -385px;
  width: 80px;
  box-sizing: content-box;

  border-width: 0px 12px 17px;
  border-style: solid;
  border-color: #fff transparent;
  right: -20px;
`;
export const PostText = styled.span`
  color: #fff;
  position: absolute;
  text-transform: uppercase;
`;
export const PostTextLine1 = styled(PostText)<CustomTextProps>`
  color: ${(props) => props.color || '#fff'};
  font-size: ${(props) => props.fontSize || '42px'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  right: ${(props) => props.right || '30px'};
  top: ${(props) => props.top || '105px'};
`;
export const PostTextLine2 = styled(PostText)<CustomTextProps>`
  color: ${(props) => props.color || '#000'};
  font-size: ${(props) => props.fontSize || '34px'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  right: ${(props) => props.right || '42px'};
  top: ${(props) => props.top || '150px'};
`;
export const PostTextLine3 = styled(PostText)<CustomTextProps>`
  color: ${(props) => props.color || '#fff'};
  font-size: ${(props) => props.fontSize || '40px'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
  right: ${(props) => props.right || '14px'};
  top: ${(props) => props.top || '192px'};
`;
export const PostTextLine4 = styled(PostText)<CustomTextProps>`
  color: ${(props) => props.color || '#fff'};
  font-size: ${(props) => props.fontSize || '52px'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
  right: ${(props) => props.right || '15px'};
  top: ${(props) => props.top || '230px'};
`;
export const PostTitleCta = styled(PostText)<CustomTextProps>`
  align-items: center;
  background-color: #000;
  border-radius: 40px;
  color: ${(props) => props.color || '#fff'};
  display: flex;
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
  justify-content: center;
  height: 40px;
  position: absolute;
  right: ${(props) => props.right || '45px'};
  text-transform: uppercase;
  top: ${(props) => props.top || '310px'};
  width: 180px;
`;
export const Postlink = styled.div`
  align-items: center;
  background-color: #000;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  bottom: -2px;
  color: #fff;
  display: flex;
  font-size: 14px;
  justify-content: center;
  padding: 13px 20px;
  position: absolute;
  z-index: 12;
`;
