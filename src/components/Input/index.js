import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export function Input(props) {
  const {
    underlined,
    underlineColor,
    underlineHeight,
    bordered,
    borderColor,
    borderWidth,
    borderRadius,
    placeholderPosition,
    renderIconLeft,
    renderIconRight,
    stacked,
    placeholder,
    style,
    wrapperStyle,
    iconWrapperStyle,
    ...rest
  } = props;

  return (
    <View
      style={[
        bordered && {
          borderWidth: borderWidth || 1,
          borderColor: borderColor || '#bbb',
          borderRadius: borderRadius || 5,
          padding: 5,
        },
        wrapperStyle,
      ]}>
      {stacked && <Text>{placeholder}</Text>}

      <View style={{flexDirection: 'row'}}>
        {renderIconLeft && (
          <View style={[styles.iconWrapper, iconWrapperStyle]}>
            {renderIconLeft()}
          </View>
        )}
        <TextInput
          {...rest}
          placeholder={stacked ? '' : placeholder}
          style={[
            {
              flex: 1,
              padding: 0,
              textAlign: placeholderPosition || 'left',
            },
            style,
          ]}
        />
        {renderIconRight && (
          <View style={[styles.iconWrapper, iconWrapperStyle]}>
            {renderIconRight()}
          </View>
        )}
      </View>

      {(underlined || stacked) && (
        <View
          style={{
            height: underlineHeight || 1,
            backgroundColor: underlineColor || '#bbb',
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});