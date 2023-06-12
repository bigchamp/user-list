import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {styles} from './styles';
import {useUsers} from '@hooks';
import {Item, List} from '@components';

const HomeScreen = () => {
  const {isLoading, error, data: users} = useUsers();

  if (isLoading && !error) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.screen}>
      <List renderItem={({item}) => <Item item={item} />} data={users} />
    </View>
  );
};

export default HomeScreen;
