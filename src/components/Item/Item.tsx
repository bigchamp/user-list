import React, {memo} from 'react';
import FastImage from 'react-native-fast-image';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {styles} from './styles';

export const Item = memo(({item}: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPressItem = () => {
    navigation?.navigate('Details', {
      uuid: item.login?.uuid,
    });
  };

  return (
    <Pressable key={item.login?.uuid} onPress={onPressItem} style={styles.item}>
      <FastImage
        style={styles.avatar}
        source={{
          uri: item?.picture?.thumbnail,
          priority: FastImage.priority.normal,
        }}
      />
      <View>
        <Text key="name" style={styles.text}>
          {item.name?.first}
          {item.name?.last}
        </Text>
        <Text key="email">{item?.email}</Text>
      </View>
    </Pressable>
  );
});
