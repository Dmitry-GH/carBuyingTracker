interface NavigationComponentProps {
  componentId: string;
}
interface NavigationComponentOptions {
  options?: (passProps?: Record<string, any>) => object;
}

type NavigationComponent<P> = React.FC<P & NavigationComponentProps> &
  NavigationComponentOptions;

interface HomeComponentProps {}
type HomeComponentType = NavigationComponent<HomeComponentProps>;

interface SignInComponentProps {}
type SignInComponentType = NavigationComponent<SignInComponentProps>;

interface SignUpComponentProps {}
type SignUpComponentType = NavigationComponent<SignUpComponentProps>;

interface OverlayComponentProps {
  title: string;
  userCar: UserInfo['userCar'];
}
type OverlayComponentType = NavigationComponent<OverlayComponentProps>;

interface InitialisingComponentProps {}
type InitialisingComponentType = NavigationComponent<
  InitialisingComponentProps
>;
