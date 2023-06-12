import React from 'react';
import {Text as NativeText, TextProps} from 'react-native';
import {styles} from './styles';

export const Text = (props: TextProps) => (
  <NativeText style={styles.text} {...props}>
    {props.children}
  </NativeText>
);
