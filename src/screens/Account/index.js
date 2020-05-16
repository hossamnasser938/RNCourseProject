import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {PlatformTouchable} from '../../components/PlatformTouchable';
import {IonIcon} from '../../components/IonIcon';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../redux/actions';
import styles from './styles';

function renderInfoSection(user, navigation) {
  return (
    <View style={styles.infoSection}>
      <IonIcon name="person" style={styles.personIcon} />
      <View style={styles.verticalLine} />
      <View>
        <Text
          onPress={() => {
            !user.name && navigation.navigate('UpdateAccountScreen');
          }}
          style={[styles.infoText, !user.name && styles.hitToEnterNameButton]}>
          {user.name || 'HIT to enter name'}
        </Text>
        <Text style={styles.infoText}>{user.phone}</Text>
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

function renderButtonsSection(navigation, onDispatchLogout) {
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
      {renderButton('log-out', 'Log Out', onDispatchLogout)}
    </View>
  );
}

export function AccountScreen(props) {
  const {navigation} = props;
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const onDispatchLogout = () => dispatch(logout());

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.container}>
        {renderInfoSection(user, navigation)}
        {renderButtonsSection(navigation, onDispatchLogout)}
      </View>
    </SafeAreaView>
  );
}
