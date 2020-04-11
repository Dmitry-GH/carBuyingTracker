import analytics from '@react-native-firebase/analytics';
import {GoogleSignin} from '@react-native-community/google-signin';
import {GOOGLE_OAUTH_CLIENT_ID} from '../configs/APIKeys';

export const googleAuthConfig = async (): Promise<void> => {
  GoogleSignin.configure({
    webClientId: GOOGLE_OAUTH_CLIENT_ID,
  });
};

export const logLogin = async (method: string): Promise<void> => {
  await analytics().logLogin({method});
};

export const logSignUp = async (method: string): Promise<void> => {
  await analytics().logSignUp({method});
};
