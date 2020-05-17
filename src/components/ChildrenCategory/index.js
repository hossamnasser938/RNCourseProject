import React from 'react';
import {View, Text, Image} from 'react-native';
import {IMAGES_URL} from '../../utils/constants';
import {cutLongName} from '../../utils/helperFunctions';
import styles from './styles';

export function ChildrenCategory(props) {
  const {category} = props;

  return (
    <View style={styles.wrappper}>
      <Image
        style={styles.image}
        source={{uri: IMAGES_URL + 'cat-thumbs/resized/' + category.image}}
      />
      <Text style={styles.title}>
        {category.parentId ? cutLongName(category.name) : 'All'}
      </Text>
    </View>
  );
}
