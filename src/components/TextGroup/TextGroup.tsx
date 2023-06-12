import React from 'react';
import {View} from 'react-native';
import {Text} from '@components';

import {styles} from './styles';

interface TextGroupProps {
  label: string;
  text: string;
}

export const TextGroup = ({label, text}: TextGroupProps) => (
  <View style={styles.textGroup}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);
