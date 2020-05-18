import React from 'react';
import {SafeAreaView} from 'react-native';
import {Input} from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {ProductsList} from '../../components/ProductsList';
import styles from './styles';
import {searchForProduct} from '../../redux/actions/searchActionCreators';

function renderSearchIcon() {
  return <Icon name="search" style={styles.searchIcon} />;
}

export function SearchScreen(props) {
  const [input, setInput] = React.useState('');
  const [products, setProducts] = React.useState([]);
  const dispatch = useDispatch();
  const toBeAppendedProducts = useSelector(state => state.search.products);

  useUpdateEffect(() => {
    setProducts(products.concat(toBeAppendedProducts));
  }, [toBeAppendedProducts]);

  const fetchProducts = () => {
    dispatch(searchForProduct(input, true));
  };

  const continueFetchProducts = () => {
    dispatch(searchForProduct(input));
  };

  useUpdateEffect(() => {
    setProducts([]);
    fetchProducts();
  }, [input]);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <Input
        placeholder="Type Here ..."
        bordered
        renderIconRight={renderSearchIcon}
        onChangeText={setInput}
        wrapperStyle={styles.input}
      />
      <ProductsList
        data={products}
        onEndReachedThreshold={0.5}
        onEndReached={continueFetchProducts}
      />
    </SafeAreaView>
  );
}
