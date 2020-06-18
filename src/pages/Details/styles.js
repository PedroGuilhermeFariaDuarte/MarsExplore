import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  flex-flow: column;
`;

export const ImageAstrounat = styled.Image`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Footer = styled.View`
  width: 100%;
  height: 40%;
  background-color: #251f2a;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  position: absolute;
  padding: 50px 30px 00px 30px;
  bottom: 0px;
`;

export const FooterAction = styled.View`
  width: 100%;
  height: 40%;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

export const SliderContainer = styled.View`
  width: 50%;
  height: auto;
  flex-flow: row;
`;

export const SliderOption = styled.TouchableOpacity`
         width: ${(prop) => (prop.sliderWidth ? prop.sliderWidth : '10px')};
         height: 10px;
         border-radius: 10px;
         background-color: ${(prop) =>
           prop.sliderBackground ? prop.sliderBackground : '#5e5d5f;'} 
         margin-left: 3px;
       `;

export const Button = styled.TouchableOpacity`
  width: 60px;
  height: 70px;
  padding: 10px;

  border-top-left-radius: 40px;
  background-color: #f16a43;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;
