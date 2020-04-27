import React from 'react';
import {View, Text} from 'react-native';
import {IonIcon} from '../../components/IonIcon';
import styles from './styles';

function renderInfoSection() {
  return (
    <View style={styles.infoSection}>
      <IonIcon name="person" style={styles.personIcon} />
      <View style={styles.verticalLine} />
      <View>
        <Text style={styles.infoText}>Some Person</Text>
        <Text style={styles.infoText}>010464747446</Text>
      </View>
    </View>
  );
}

function renderButton(iconName, title) {
  return (
    <View style={styles.button}>
      <View style={styles.iconTitleWrapper}>
        <IonIcon name={iconName} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.horizontalLine} />
    </View>
  );
}

function renderButtonsSection() {
  return (
    <View>
      {renderButton('person', 'Profile')}
      {renderButton('locate', 'Shipping Address')}
      {renderButton('cart', 'Previous Orders')}
      {renderButton('log-out', 'Log Out')}
    </View>
  );
}

export function AccountScreen(props) {
  return (
    <View style={styles.container}>
      {renderInfoSection()}
      {renderButtonsSection()}
    </View>
  );
}
