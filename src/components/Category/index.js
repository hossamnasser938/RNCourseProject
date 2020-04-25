import React from 'react';
import {View, Image, Text} from 'react-native';
import {Card} from '../Card';
import styles from './styles';

export function Category(props) {
  const {category} = props;

  return (
    <View style={styles.container}>
      <Card>
        <Image source={{uri: category.imageUrl}} style={styles.image} />
      </Card>
      <Text style={styles.title}>{category.title}</Text>
    </View>
  );
}
