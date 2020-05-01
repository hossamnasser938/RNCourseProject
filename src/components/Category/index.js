import React from 'react';
import {View, Image, Text} from 'react-native';
import {PlatformTouchable} from '../PlatformTouchable';
import {Card} from '../Card';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

export function Category(props) {
  const {category} = props;
  const navigation = useNavigation();

  return (
    <PlatformTouchable
      style={styles.container}
      onPress={() => navigation.navigate('CategoryScreen')}>
      <Card>
        <Image source={{uri: category.imageUrl}} style={styles.image} />
      </Card>
      <Text style={styles.title}>{category.title}</Text>
    </PlatformTouchable>
  );
}
