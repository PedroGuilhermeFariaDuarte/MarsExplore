import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

function System() {
  return (
    <SafeAreaView style={{ width: '100%', height: '100%' }}>
      <WebView
        source={{ uri: 'https://www.nasa.gov/mission_pages/msl/index.html' }}
      />
    </SafeAreaView>
  );
}

export default System;
