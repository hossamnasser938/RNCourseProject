import React from 'react';
import {View} from 'react-native';

export function Box(props) {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        backgroundColor: props.color,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: props.color,
      }}
    />
  );
}

export function Layout1(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginStart: 50,
        marginEnd: 50,
      }}>
      <Box color="blue" />
      <Box color="green" />
      <Box color="yellow" />
      <Box color="red" />
      <Box color="orange" />
    </View>
  );
}

export function Layout2(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 120,
        marginBottom: 120,
      }}>
      <Box color="blue" />
      <Box color="green" />
      <Box color="yellow" />
      <Box color="red" />
      <Box color="orange" />
    </View>
  );
}

export function Layout3(props) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginStart: 60,
          marginEnd: 60,
        }}>
        <Box color="blue" />
        <Box color="green" />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginStart: 60,
          marginEnd: 60,
        }}>
        <Box color="yellow" />
        <Box color="red" />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box color="orange" />
      </View>
    </View>
  );
}

export function Layout4(props) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginStart: 70,
          marginEnd: 70,
        }}>
        <Box color="blue" />
        <Box color="green" />
        <Box color="yellow" />
        <Box color="red" />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box color="orange" />
      </View>
    </View>
  );
}
