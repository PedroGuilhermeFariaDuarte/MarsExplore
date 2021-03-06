import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default (focused) => (
  <MaterialCommunityIcons
    name="orbit"
    size={24}
    color={focused ? '#f16a43' : '#5E5D5F'}
  />
);
