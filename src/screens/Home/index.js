import React from 'react';
import {ScrollView, Text, FlatList} from 'react-native';
import {Category} from '../../components/Category';
import {ProductsList} from '../../components/ProductsList';
import {useDispatch, useSelector} from 'react-redux';
import {fetchHomeData} from '../../redux/actions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import styles from './styles';
import {showError} from '../../utils/helperFunctions';

function renderCategory({item}) {
  return <Category category={item} />;
}

function renderCategoriesList(categories) {
  return (
    <FlatList data={categories} renderItem={renderCategory} horizontal={true} />
  );
}

export function HomeScreen(props) {
  const dispatch = useDispatch();
  const fetchCategoriesError = useSelector(
    state => state.home.getHomeCategoriesError,
  );
  const fetchProductsError = useSelector(
    state => state.home.fetchHomeProductsError,
  );

  const categories = useSelector(state => state.home.home.categories);
  const products = useSelector(state => state.home.home.products);

  useUpdateEffect(() => {
    showError(fetchCategoriesError.errorCode);
  }, [fetchCategoriesError]);

  useUpdateEffect(() => {
    showError(fetchProductsError.errorCode);
  }, [fetchProductsError]);

  React.useEffect(() => {
    dispatch(fetchHomeData());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Categories</Text>
      {renderCategoriesList(categories)}

      <Text style={styles.headerText}>Products</Text>
      <ProductsList data={products} />
    </ScrollView>
  );
}
