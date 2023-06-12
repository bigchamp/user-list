import {getUsers} from '@services/api/user';
import {useQuery} from '@tanstack/react-query';

export default function useUsers() {
  return useQuery(['getUsers'], getUsers);
}
