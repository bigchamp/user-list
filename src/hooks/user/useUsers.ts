import {getUsers} from '@services/api/user';
import {useInfiniteQuery} from '@tanstack/react-query';

export default function useUsers() {
  return useInfiniteQuery(
    ['getUsers'],
    ({pageParam = 1}) => {
      return getUsers(pageParam);
    },
    {
      getNextPageParam: lastPage => lastPage.info.page + 1,
    },
  );
}
