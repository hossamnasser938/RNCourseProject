import {ScaledSheet} from 'react-native-size-matters';
import {Platform} from 'react-native';

const styles = ScaledSheet.create({
  container: Platform.select({
    android: {
      elevation: 3,
      backgroundColor: '#fff',
      padding: 5,
    },
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 3,
      shadowOffset: {width: 0, height: 3},
      padding: 5,
    },
  }),
});

export default styles;
