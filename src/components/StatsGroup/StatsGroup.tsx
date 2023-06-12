import React from 'react';
import {Text} from '@components';
import {View} from 'react-native';
import {styles} from './styles';

interface StatGroup {
  number: string;
  label: string;
}

export const StatsGroup = ({number, label}: StatGroup) => (
  <View style={styles.card}>
    <Text style={styles.number}>{number}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>
);
