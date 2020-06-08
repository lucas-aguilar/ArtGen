import styled from 'styled-components';
import productImg from '../../assets/images/burguer.jpg';

interface StyleProps {
  logoSize: any;
  logoYPosition: any;
  logoXPosition: any;
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
  width: 100%;
`;
export const Shape1 = styled.div`
  border-left: 105px solid transparent;
  border-right: 255px solid transparent;
  border-top: 135px solid #fe0000;
  height: 0;
  position: absolute;
  width: 0;
  z-index: 10;
`;
export const CustomLogo = styled.span<StyleProps>`
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
export const CustomImg = styled.div`
  background-image: url(${productImg});
  background-size: cover;
  background-position: right;
  height: 540px;
  position: absolute;
  width: 540px;
  z-index: 1;
`;
export const Shape2 = styled.div`
  border-bottom: 385px solid #fe0000;
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
export const PostTitleWord1 = styled(PostText)`
  font-size: 42px;
  right: 30px;
  top: 105px;
`;
export const PostTitleWord2 = styled(PostText)`
  color: #000;
  font-size: 34px;
  right: 42px;
  top: 150px;
`;
export const PostTitleWord3 = styled(PostText)`
  font-size: 40px;
  font-weight: bold;
  right: 14px;
  top: 192px;
`;
export const PostTitleWord4 = styled(PostText)`
  font-size: 52px;
  font-weight: bold;
  right: 15px;
  top: 230px;
`;
export const PostTitleCta = styled(PostText)`
  align-items: center;
  background-color: #000;
  border-radius: 40px;
  color: #fff;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  height: 40px;
  position: absolute;
  right: 45px;
  text-transform: uppercase;
  top: 310px;
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
