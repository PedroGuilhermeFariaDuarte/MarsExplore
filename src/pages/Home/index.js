import React from 'react';
import { Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Ionicons } from '@expo/vector-icons';

// Data
import CarrouselData from '../../data/carrousel';

// Style
import {
  Container,
  MenuContainer,
  Bar,
  ExploreTitle,
  TitlePrincipal,
  TitleSecundary,
  MoreInfoHeader_Title,
  MoreInfoContent_Description,
  MoreInfoContent_Image,
  Description,
  ExploreList,
  MoreInfo,
  MoreInfoHeader,
  MoreInfoContent,
  Card,
  CardBackground,
  CardContent,
} from './styles';

function Home({ navigation }) {
  return (
    <Container>
      <MenuContainer>
        <Bar widthBar="50%" alignBar="flex-start" />
        <Bar widthBar="100%" alignBar="center" />
        <Bar widthBar="50%" alignBar="flex-end" />
      </MenuContainer>
      <ExploreTitle>
        <TitlePrincipal>
          Ready to <TitleSecundary>explore ?</TitleSecundary>
        </TitlePrincipal>
        <Description>
          Connect your VR glasses, select a challange below and start exploring.
        </Description>
      </ExploreTitle>
      <ExploreList>
        <Carousel
          layout="default"
          data={CarrouselData}
          renderItem={({ item, index }) => (
            <Card>
              <CardBackground source={{ uri: item.background }} />
              <CardContent>
                <TitlePrincipal style={{ fontSize: 12, color: '#fff' }}>
                  {item.title}
                </TitlePrincipal>
                <TitleSecundary
                  style={{ fontSize: 27, color: '#fff', fontWeight: 'bold' }}
                >
                  {item.subtitle}
                </TitleSecundary>
              </CardContent>
            </Card>
          )}
          sliderWidth={520}
          itemWidth={220}
          containerCustomStyle={{
            marginLeft: -140,
            borderRadius: 15,
          }}
          slideStyle={{
            flex: 1,
            margin: 0,
          }}
        />
        <MoreInfo>
          <MoreInfoHeader>
            <MoreInfoHeader_Title>BORED 0F MARS?</MoreInfoHeader_Title>
          </MoreInfoHeader>
          <MoreInfoContent>
            <MoreInfoContent_Description>
              <Text>
                Tap to see all others planets that are available for free
              </Text>
            </MoreInfoContent_Description>
            <MoreInfoContent_Image>
              <Ionicons name="md-planet" size={74} color="#251f2a" />
            </MoreInfoContent_Image>
          </MoreInfoContent>
        </MoreInfo>
      </ExploreList>
    </Container>
  );
}

export default Home;
