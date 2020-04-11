import {INITIALIZING, HOME, SIGNIN, SIGNUP} from './index';
import Initializing from './init';
import Home from './home';
import SignIn from './signIn';
import SignUp from './signUp';

const Screens = new Map<string, React.FC<any>>();

Screens.set(INITIALIZING, Initializing);
Screens.set(SIGNIN, SignIn);
Screens.set(SIGNUP, SignUp);
Screens.set(HOME, Home);

export default Screens;
