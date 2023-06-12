import React from 'react';
import {FlatList, FlatListProps, View} from 'react-native';

import {styles} from './styles';

export const List = ({data, renderItem}: FlatListProps<any>) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={({}, index) => String(index)}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};
