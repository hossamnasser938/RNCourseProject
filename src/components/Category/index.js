import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

export function Category(props) {
  const {category} = props;

  return (
    <View>
      <Image source={{uri: category.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{category.title}</Text>
    </View>
  );
}
