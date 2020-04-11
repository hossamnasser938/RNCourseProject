import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

export class PlatformTouchable extends React.Component {
  render() {
    const Touchable =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    /* Another way
   const Touchable = Platform.select({
     android: TouchableNativeFeedback,
     ios: TouchableOpacity,
   });
   */

    return <Touchable {...this.props} />;
  }
}
