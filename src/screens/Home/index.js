import React from 'react';
import {ScrollView, Text, FlatList, ActivityIndicator} from 'react-native';
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

const keyExtractor = item => item._id;

function renderCategoriesList(categories, isFetchingCategories) {
  return isFetchingCategories ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={categories}
      renderItem={renderCategory}
      horizontal={true}
      keyExtractor={keyExtractor}
    />
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

  const isFetchingCategories = useSelector(
    state => state.home.getHomeCategoriesLoading,
  );
  const isFetchingProducts = useSelector(
    state => state.home.fetchHomeProductsLoading,
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
      {renderCategoriesList(categories, isFetchingCategories)}

      <Text style={styles.headerText}>Products</Text>
      {isFetchingProducts ? (
        <ActivityIndicator />
      ) : (
        <ProductsList data={products} />
      )}
    </ScrollView>
  );
}
