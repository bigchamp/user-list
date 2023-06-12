import React from 'react';
import {FlatList, FlatListProps, View} from 'react-native';

import {styles} from './styles';

export const List = (props: FlatListProps<any>) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        keyExtractor={item => String(item.login?.uuid)}
        {...props}
      />
    </View>
  );
};
