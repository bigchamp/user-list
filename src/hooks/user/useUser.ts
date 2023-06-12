import {getUserById} from '@services/api/user';
import {useQuery} from '@tanstack/react-query';

export default function useUser(uuid: string) {
  return useQuery(['getUser'], () => getUserById(uuid), {
    cacheTime: 0,
  });
}
