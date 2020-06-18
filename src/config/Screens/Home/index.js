import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default (focused) => (
  <FontAwesome
    name="rocket"
    size={24}
    color={focused ? '#f16a43' : '#5E5D5F'}
  />
);
