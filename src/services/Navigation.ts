import get from 'lodash/get';
import isString from 'lodash/isString';

import {Navigation, Layout, LayoutRoot, Options} from 'react-native-navigation';
import {stack, component} from './Layouts';

interface Self {
  props: {
    componentId: string;
  };
}

const push = (
  selfOrCompId: string | object,
  screen: string | object,
  options: object,
) =>
  Navigation.push(
    compId(selfOrCompId),
    isString(screen) ? component(screen, options) : screen,
  );

const pushExternalComponent = (self: Self, name: string, passProps: object) =>
  Navigation.push(self.props.componentId, {
    externalComponent: {
      name,
      passProps,
    },
  });

const pop = (selfOrCompId: string | object) =>
  Navigation.pop(compId(selfOrCompId));

const showModal = (screen: string | object, options?: object) =>
  Navigation.showModal(
    isString(screen) ? stack(component(screen, options)) : screen,
  );

const dismissModal = (selfOrCompId: string | object) =>
  Navigation.dismissModal(compId(selfOrCompId));

const dismissAllModals = () => Navigation.dismissAllModals();

const showOverlay = (name: string | object, options: object) =>
  Navigation.showOverlay(component(name, options));

const dismissOverlay = (name: string) => Navigation.dismissOverlay(name);

const popToRoot = (self: Self) => Navigation.popToRoot(self.props.componentId);

const mergeOptions = (selfOrCompId: string | object, options: Options) =>
  Navigation.mergeOptions(compId(selfOrCompId), options);

const setStackRoot = (selfOrCompId: string | object, root: Layout) =>
  Navigation.setStackRoot(compId(selfOrCompId), root);

const setRoot = (root: LayoutRoot) =>
  Navigation.setRoot(root.root ? root : {root: component(root, {})});

const compId = (selfOrCompId: string | object) => {
  return get(selfOrCompId, 'props.componentId', selfOrCompId);
};

const constants = Navigation.constants;

export default {
  mergeOptions,
  updateProps: Navigation.updateProps.bind(Navigation),
  push,
  pushExternalComponent,
  pop,
  popToRoot,
  showModal,
  dismissModal,
  dismissAllModals,
  showOverlay,
  dismissOverlay,
  events: Navigation.events.bind(Navigation),
  popTo: Navigation.popTo.bind(Navigation),
  setDefaultOptions: Navigation.setDefaultOptions.bind(Navigation),
  setRoot,
  TouchablePreview: Navigation.TouchablePreview,
  setStackRoot,
  constants,
};
