import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const Item = ({item}: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPressItem = () => {
    navigation?.navigate('Details', {
      uuid: item.login.uuid,
    });
  };

  return (
    <Pressable key={item.login.uuid} onPress={onPressItem} style={styles.item}>
      <Image
        style={styles.avatar}
        source={{
          uri: item.picture.thumbnail,
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
};
