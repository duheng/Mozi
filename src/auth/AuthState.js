import { AsyncStorage, } from 'react-native';
import { LOGIN_KEY, } from '../app/constants/apiConfig';
// sigin status detection
export const authState = async (callback) => {
  const __login = await AsyncStorage.getItem(LOGIN_KEY);
  const __switchRoute = __login ? 'App' : 'Auth';
  typeof callback === 'function' && callback(__switchRoute);
};
