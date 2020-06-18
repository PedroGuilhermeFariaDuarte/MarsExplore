import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default (focused) => (
  <FontAwesome5
    name="user-astronaut"
    size={24}
    color={focused ? '#f16a43' : '#5E5D5F'}
  />
);
