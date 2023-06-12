import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '@navigators/appNavigator';
import {ActivityIndicator, View} from 'react-native';
import {Profile} from '@components';

import {useUser} from '@hooks';

// styles
import {styles} from './styles';

const DetailsScreen: FC<
  NativeStackScreenProps<MainStackParamList, 'Details'>
> = ({route}) => {
  const {uuid} = route.params;

  const {isLoading, data: user} = useUser(uuid);

  console.log('isLoading', isLoading);
  if (isLoading) {
    return <ActivityIndicator />;
  }

  console.log('user', user);

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Profile user={user} />
    </View>
  );
};

export default DetailsScreen;
