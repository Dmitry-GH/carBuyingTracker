import isString from 'lodash/isString';
import isArray from 'lodash/isArray';

const stack = (rawChildren: [] | object, id?: string | number) => {
  const childrenArray = isArray(rawChildren) ? rawChildren : [rawChildren];
  const children = childrenArray.map(child => component(child));
  return {stack: {children, id}};
};

const component = (
  item: string | object,
  options?: object,
  passProps?: object,
) => {
  return isString(item) ? {component: {name: item, options, passProps}} : item;
};

export {stack, component};
