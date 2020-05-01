import React from 'react';
import {SafeAreaView} from 'react-native';
import {Input} from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

function renderSearchIcon() {
  return <Icon name="search" style={styles.searchIcon} />;
}

export function SearchScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Input
        placeholder="Type Here ..."
        bordered
        renderIconRight={renderSearchIcon}
      />
    </SafeAreaView>
  );
}
