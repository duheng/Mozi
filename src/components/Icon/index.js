import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TYPES = {
  fontawesome: FontAwesome,
  ionicons: Ionicons,
};

export default props => {
  const { source = 'ionicons', ...others } = props;
  const Icon = TYPES[source.toLowerCase()];
  return <Icon {...others} />;
};
