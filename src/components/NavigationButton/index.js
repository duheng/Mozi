import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'components/Icon';

const typeMap = {
  share: 'md-share-alt',
  search: 'ios-search',
  back: 'ios-arrow-back',
  refresh: 'refresh',
  delete: 'ios-trash-outline',
};
const runCallback = options => {
  const {
    name,
    size = 30,
    color = 'white',
    usename = false,
    callback,
  } = options;
  const names = usename ? name : typeMap[name];
  const buttons =
    callback && typeof callback === 'function' ? (
      <TouchableOpacity onPress={callback}>
        <Icon name={names} size={size} color={color} />
      </TouchableOpacity>
    ) : (
      <Icon name={names} size={size} color={color} />
    );
  return buttons;
};

const NavigationButton = props => {
  const propsLength = props.length;
  let Buttons = null;
  if (propsLength >= 1) {
    props.map(item => {
      Buttons = runCallback(item);
      return null;
    });
  } else {
    Buttons = runCallback(props);
  }
  return Buttons;
};
export default NavigationButton;
