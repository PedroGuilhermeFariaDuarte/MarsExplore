import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

export const MenuContainer = styled.View`
  width: 70px;
  height: 110px;
  background-color: #2d2236;
  align-self: flex-end;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 50px;
  border-bottom-left-radius: 40px;
  flex-flow: column;
  align-items: center;
`;

export const Bar = styled.View`
  width: ${(prop) => prop.widthBar ?? '60%'};
  height: 2px;
  background-color: #fff;
  margin-top: 7px;
  align-self: ${(prop) => prop.alignBar ?? 'flex-end'};
`;

export const ExploreTitle = styled.View`
  width: 100%;
  height: 230px;
  padding: 30px;
`;

export const TitlePrincipal = styled.Text`
  font-size: 27px;
  font-weight: bold;
  color: #251f2a;
`;

export const TitleSecundary = styled.Text`
  color: #f16a43;
`;

export const Description = styled.Text`
  font-size: 15px;
  font-weight: 600;
  line-height: 30px;
  margin-top: 40px;
  color: #251f2a;
`;

export const ExploreList = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: #251f2a;
  padding: 20px;
  border-top-right-radius: 50px;
  flex: 1;
`;

export const Card = styled.TouchableOpacity`
  width: 220px;
  height: 270px;
  border-radius: 15px;
  background-color: #f16a43;
  overflow: hidden;
  flex-flow: column;
`;

export const CardBackground = styled.Image`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CardContent = styled.View`
  width: 200px;
  height: 270px;
  padding: 10px;
  position: absolute;
`;

export const MoreInfo = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  margin-top: 50px;
  margin-bottom: 150px;
  border-radius: 15px;
  padding: 10px;
  background-color: white;

  flex-flow: column;
`;

export const MoreInfoHeader = styled.View`
  width: 100%;
  height: 30px;
`;

export const MoreInfoHeader_Title = styled.Text`
  font-weight: bold;
  color: #f16a43;
`;

export const MoreInfoContent = styled.View`
  width: 100%;
  height: auto;

  flex-flow: row;
  align-items: center;
`;

export const MoreInfoContent_Description = styled.View`
  width: 70%;
  height: 100%;
  padding-top: 10px;
`;

export const MoreInfoContent_Image = styled.View`
  width: 30%;
  height: 100%;
  padding-bottom: 50px;
  justify-content: center;
  align-items: center;
`;
