import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {IonIcon} from '../../components/IonIcon';
import {Price} from '../../components/Price';
import {AddToCartButton} from '../../components/AddToCartButton';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProduct} from '../../redux/actions';
import {IMAGES_URL} from '../../utils/constants';
import {getActualPrice} from '../../utils/helperFunctions';
import styles from './styles';

export function ProductScreen(props) {
  const {productId} = props.route.params;
  const {navigation} = props;
  const [product, setProduct] = React.useState();
  const isFetchingProduct = useSelector(
    state => state.home.fetchProductLoading,
  );
  const dispatch = useDispatch();

  const reduxProduct = useSelector(state => state.home.product);

  React.useEffect(() => {
    if (reduxProduct && reduxProduct._id === productId) {
      setProduct(reduxProduct);
    }
  }, [reduxProduct]);

  React.useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);

  return product ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={{uri: IMAGES_URL + 'products/' + product.images[0]}}
            style={styles.image}
          />
          <View style={styles.productTitleWrapper}>
            <IonIcon
              name={'arrow-back'}
              style={styles.icon}
              onPress={() => navigation.goBack()}
            />
            <View style={styles.titleWrapper}>
              <Text numberOfLines={1} style={styles.title}>
                {product.title}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.wrapper}>
          <Price price={product.price} discount={product.discount} />
          <Text style={styles.descriptionText}>Description</Text>
          <Text>{product.details}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <AddToCartButton
          productId={productId}
          cost={getActualPrice(product.price, product.discount)}
          count={product.increaseCount}
        />
      </View>
    </SafeAreaView>
  ) : isFetchingProduct ? (
    <ActivityIndicator />
  ) : null;
}
