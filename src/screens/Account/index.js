import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {PlatformTouchable} from '../../components/PlatformTouchable';
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

function renderButton(iconName, title, onPress) {
  return (
    <PlatformTouchable style={styles.button} onPress={onPress}>
      <View style={styles.iconTitleWrapper}>
        <IonIcon name={iconName} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.horizontalLine} />
    </PlatformTouchable>
  );
}

function renderButtonsSection(navigation) {
  return (
    <View>
      {renderButton('person', 'Profile', () =>
        navigation.navigate('UpdateAccountScreen'),
      )}
      {renderButton('locate', 'Shipping Address', () =>
        navigation.navigate('AddAddressScreen'),
      )}
      {renderButton('cart', 'Previous Orders', () =>
        navigation.navigate('OrdersScreen'),
      )}
      {renderButton('log-out', 'Log Out', () => {})}
    </View>
  );
}

export function AccountScreen(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      {renderInfoSection()}
      {renderButtonsSection(navigation)}
    </SafeAreaView>
  );
}
