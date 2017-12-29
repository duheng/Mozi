import React from 'react';
import { StyleSheet, View } from 'react-native';

import Placeholder from 'rn-placeholder';

const styles = StyleSheet.create({
  title: {
    marginBottom: 12,
  },
  item: {
    margin: 12,
  },
});
const Title = hasTitle => {
  return hasTitle ? (
    <View style={styles.title}>
      <Placeholder.Line />
    </View>
  ) : null;
};
const Placeholders = props => {
  const { ParagraphLength, ParagraphType, hasTitle, ...others } = props;
  const PlaceholderItem = Placeholder[ParagraphType];
  const PlaceholderContent = [];
  for (let key = 0; key < ParagraphLength; key++) {
    PlaceholderContent.push(
      <View style={styles.item} key={`PlaceholderContentKey${key}`}>
        {Title(hasTitle)}
        <PlaceholderItem {...others} />
      </View>,
    );
  }
  return <View>{PlaceholderContent}</View>;
};

const ListParagraph = props => {
  const baseOption = {
    ParagraphLength: 5,
    ParagraphType: 'ImageContent',
    hasTitle: false,
    size: 60,
    animate: 'fade',
    lineNumber: 3,
    lineSpacing: 12,
    lastLineWidth: '60%',
  };
  const options = { ...baseOption, ...props };
  const { isLoading, list } = props;
  if (isLoading) {
    return Placeholders(options);
  }
  return typeof list === 'function' && list();
};

export default Placeholder.connect(ListParagraph);
