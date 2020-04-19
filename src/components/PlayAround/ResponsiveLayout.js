import React, {useEffect} from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export function Input(props) {
  return (
    <TextInput
      style={{
        height: 40,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
      }}
      placeholder={props.placeholder}
    />
  );
}

export function SignUpScreen(props) {
  const [realtimeWidth, setWidth] = React.useState(width);

  useEffect(() => {
    Dimensions.addEventListener('change', ({window}) => {
      setWidth(window.width);
    });

    return () => {
      Dimensions.removeEventListener('change');
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 50}}>
      <Input placeholder="Email" />
      <View style={realtimeWidth > 500 ? {flexDirection: 'row'} : null}>
        <View style={realtimeWidth > 500 ? {flex: 1, marginEnd: 10} : null}>
          <Input placeholder="Password" />
        </View>
        <View style={realtimeWidth > 500 ? {flex: 1, marginStart: 10} : null}>
          <Input placeholder="Confirm" />
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text>Sign Up</Text>
      </View>
    </View>
  );
}
