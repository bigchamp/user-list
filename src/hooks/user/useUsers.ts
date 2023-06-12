import {getUsers} from '@services/api/user';
import {useInfiniteQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {showMessage} from 'react-native-flash-message';

export default function useUsers() {
  return useInfiniteQuery(
    ['getUsers'],
    ({pageParam = 1}) => {
      return getUsers(pageParam);
    },
    {
      getNextPageParam: lastPage => lastPage.info.page + 1,
      onError: (err: AxiosError) => {
        showMessage({
          message: err?.message,
          type: 'danger',
        });
      },
    },
  );
}
