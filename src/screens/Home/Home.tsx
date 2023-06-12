import * as React from 'react';
import {ActivityIndicator, ListRenderItem, View} from 'react-native';

import {styles} from './styles';
import {useUsers} from '@hooks';
import {Item, List} from '@components';
import {getItemLayout} from '@utils';

const HomeScreen = () => {
  const {
    isLoading,
    error,
    data,
    isRefetching,
    hasNextPage,
    refetch,
    fetchNextPage,
  } = useUsers();

  if (isLoading && !error) {
    return <ActivityIndicator />;
  }

  if (!data) {
    return null;
  }

  const users = data.pages.map(page => page.results).flat();

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const onRefetch = () => {
    refetch();
  };

  const renderItem: ListRenderItem<any> = ({item}) => <Item item={item} />;

  return (
    <View style={styles.screen}>
      {users.length > 0 && (
        <List
          refreshing={isRefetching}
          onRefresh={onRefetch}
          onEndReached={loadMore}
          data={users}
          initialNumToRender={10}
          getItemLayout={getItemLayout}
          renderItem={renderItem}
          onEndReachedThreshold={0.2}
        />
      )}
    </View>
  );
};

export default HomeScreen;
