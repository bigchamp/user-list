import {getUserById} from '@services/api/user';
import {useQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {showMessage} from 'react-native-flash-message';

export default function useUser(uuid: string) {
  return useQuery(['getUser'], () => getUserById(uuid), {
    cacheTime: 0,
    onError: (err: AxiosError) => {
      showMessage({
        message: err?.message,
        type: 'danger',
      });
    },
  });
}
