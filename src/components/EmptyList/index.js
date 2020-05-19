import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export function EmptyList(props) {
  const {renderText, renderIcon} = props;

  return (
    <View style={styles.container}>
      {renderIcon ? (
        renderIcon()
      ) : (
        <Icon name="flask-empty-outline" style={styles.icon} />
      )}

      {renderText ? (
        renderText()
      ) : (
        <Text style={styles.text}>No Data Found</Text>
      )}
    </View>
  );
}
