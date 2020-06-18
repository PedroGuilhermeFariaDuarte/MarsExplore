import React from 'react';
import { Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

// Styles
import {
  Container,
  ImageAstrounat,
  Footer,
  FooterAction,
  SliderContainer,
  SliderOption,
  Button,
} from './styles';

// Data
import DetailsBackground from '../../data/details';

function Details({ navigation }) {
  return (
    <Container>
      <ImageAstrounat source={DetailsBackground} />
      <Footer>
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#ffff' }}>
          Explore Mars in VR
        </Text>
        <Text
          style={{
            fontWeight: 'normal',
            fontSize: 15,
            color: '#ffff',
            marginTop: 50,
          }}
        >
          Tired of watching Musk's sattelites?
        </Text>
        <Text
          style={{
            fontWeight: 'normal',
            fontSize: 15,
            color: '#ffff',
            marginTop: 15,
          }}
        >
          Then its time to put on your VR!
        </Text>

        <FooterAction>
          <SliderContainer>
            <SliderOption sliderWidth="25px" sliderBackground="#fff" />
            <SliderOption />
            <SliderOption />
            <SliderOption />
          </SliderContainer>
          <Button>
            <SimpleLineIcons name="arrow-right" size={24} color="white" />
          </Button>
        </FooterAction>
      </Footer>
    </Container>
  );
}

export default Details;
