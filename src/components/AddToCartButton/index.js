import React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../AppButton';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../../redux/actions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperFunctions';
import styles from './styles';

export function AddToCartButton(props) {
  const {productId, cost, count} = props;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const matchingCartItem = cartItems.find(
    item => item.product._id === productId,
  );
  const cartItemCount = matchingCartItem ? matchingCartItem.count : 0;
  const isAddingToCart = useSelector(
    state => state.cart.isAddingProductToCart[productId],
  );
  const error = useSelector(state => state.cart.addProductToCartError);
  useUpdateEffect(() => {
    showError(error.errorCode);
  }, [error]);

  const [quantity, setQuantity] = React.useState(0);

  const incrementQuantityHandler = () => {
    dispatch(addToCart(productId, cost, count));
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
        wrapperStyle={styles.wrapper}
        isLoading={isAddingToCart}
      />
    );
  };

  const renderIncreaseDecreaseButton = () => {
    return (
      <View style={[styles.increaseDecreaseContainer, styles.wrapper]}>
        <Text style={styles.plusMinus} onPress={decrementQuantityHandler}>
          -
        </Text>
        <Text>{cartItemCount}</Text>
        <Text style={styles.plusMinus} onPress={incrementQuantityHandler}>
          +
        </Text>
      </View>
    );
  };

  return cartItemCount === 0
    ? renderInitialButton()
    : renderIncreaseDecreaseButton();
}
