import React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../AppButton';
import styles from './styles';

export class AddToCartButton extends React.Component {
  state = {
    quantity: 0,
  };

  incrementQuantityHandler = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}));
  };

  decrementQuantityHandler = () => {
    this.setState(prevState => ({quantity: prevState.quantity - 1}));
  };

  renderInitialButton = () => {
    return (
      <AppButton
        onPress={this.incrementQuantityHandler}
        title="ADD TO CART"
        wrapperStyle={styles.button}
      />
    );
  };

  renderIncreaseDecreaseButton = () => {
    return (
      <View style={[styles.increaseDecreaseContainer, styles.button]}>
        <Text onPress={this.decrementQuantityHandler}>-</Text>
        <Text>{this.state.quantity}</Text>
        <Text onPress={this.incrementQuantityHandler}>+</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.wrapper}>
        {this.state.quantity === 0
          ? this.renderInitialButton()
          : this.renderIncreaseDecreaseButton()}
      </View>
    );
  }
}
