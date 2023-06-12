import axios from 'axios';
import Config from 'react-native-config';

const baseService = axios.create({
  baseURL: `${Config.HOST}`,
  headers: {
    accept: 'application/json',
  },
  timeout: 3000,
});

export default baseService;
