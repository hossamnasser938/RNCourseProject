import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {
  fetchChildrenCategroies,
  fetchCategoryProducts,
} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {ChildrenCategory} from '../../components/ChildrenCategory';
import {ProductsList} from '../../components/ProductsList';
import styles from './styles';

function renderChildrenCategory({item}) {
  return <ChildrenCategory category={item} />;
}

const keyExtractor = item => item._id;

function renderChildrenCategories(childrenCategories) {
  return (
    <FlatList
      horizontal={true}
      data={childrenCategories}
      renderItem={renderChildrenCategory}
      keyExtractor={keyExtractor}
    />
  );
}

export function CategoryScreen(props) {
  const {category} = props.route.params;
  const dispatch = useDispatch();

  const childrenCategories = useSelector(
    state => state.home.childrenCategories[category._id] || [],
  );

  const products = useSelector(
    state => state.home.categoryProducts[category._id],
  );

  React.useEffect(() => {
    dispatch(fetchChildrenCategroies(category._id));
    dispatch(fetchCategoryProducts(category));
  }, []);

  return (
    <View style={styles.container}>
      {renderChildrenCategories([category, ...childrenCategories])}
      <Text style={styles.headerText}>Products</Text>
      <ProductsList
        data={products}
        onEndReachedThreshold={0.5}
        onEndReached={() => dispatch(fetchCategoryProducts(category))}
      />
    </View>
  );
}
