import {
  INITIALIZING,
  HOME,
  HOME_EDIT,
  SIGNIN,
  SIGNUP,
  SETTINGS,
  MODAL,
  OVERLAY,
  ACTIVITY_INDICATOR,
  ABOUT,
} from './index';
import Initializing from './init';
import Home from './home';
import HomeEdit from './home/edit';
import SignIn from './signIn';
import SignUp from './signUp';
import Settings from './settings';
import Modal from './modal';
import Overlay from './overlay';
import ActivityIndicator from '../components/activityIndicator';
import About from './about';

const Screens = new Map<string, React.FC<any>>();

Screens.set(INITIALIZING, Initializing);
Screens.set(SIGNIN, SignIn);
Screens.set(SIGNUP, SignUp);
Screens.set(HOME, Home);
Screens.set(HOME_EDIT, HomeEdit);
Screens.set(SETTINGS, Settings);
Screens.set(MODAL, Modal);
Screens.set(OVERLAY, Overlay);
Screens.set(ACTIVITY_INDICATOR, ActivityIndicator);
Screens.set(ABOUT, About);

export default Screens;
