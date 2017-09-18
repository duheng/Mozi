import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TYPES = {
  fontawesome: FontAwesome,
  ionicons: Ionicons,
};

const iStyle = {
  height: 42,
  paddingTop: 11,
  paddingBottom: 11,
  paddingLeft: 6,
  paddingRight: 6,
};

export default props => {
  const { source = 'ionicons', ...others } = props;
  const Icon = TYPES[source.toLowerCase()];
  return <Icon {...others} style={iStyle} />;
};
