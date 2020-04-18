import React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../AppButton';
import styles from './styles';

export function AddToCartButton(props) {
  const [quantity, setQuantity] = React.useState(0);

  const incrementQuantityHandler = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantityHandler = () => {
    setQuantity(quantity - 1);
  };

  const renderInitialButton = () => {
    return (
      <AppButton
        onPress={incrementQuantityHandler}
        title="ADD TO CART"
        wrapperStyle={styles.button}
      />
    );
  };

  const renderIncreaseDecreaseButton = () => {
    return (
      <View style={[styles.increaseDecreaseContainer, styles.button]}>
        <Text style={styles.plusMinus} onPress={decrementQuantityHandler}>
          -
        </Text>
        <Text>{quantity}</Text>
        <Text style={styles.plusMinus} onPress={incrementQuantityHandler}>
          +
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      {quantity === 0 ? renderInitialButton() : renderIncreaseDecreaseButton()}
    </View>
  );
}
