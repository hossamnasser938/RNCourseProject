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

function renderChildrenCategory(item, selectedCategory, setSelectedCategory) {
  return (
    <ChildrenCategory
      category={item}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );
}

const keyExtractor = item => item._id;

function renderChildrenCategories(
  childrenCategories,
  selectedCategory,
  setSelectedCategory,
) {
  const renderItem = React.useCallback(
    ({item}) =>
      renderChildrenCategory(item, selectedCategory, setSelectedCategory),
    [selectedCategory, setSelectedCategory],
  );

  return (
    <FlatList
      horizontal={true}
      data={childrenCategories}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}

export function CategoryScreen(props) {
  const {category} = props.route.params;
  const [selectedCategory, setSelectedCategory] = React.useState(category);
  const dispatch = useDispatch();

  const isFetchingProducts = useSelector(
    state => state.home.isFetchingCategoryProducts[selectedCategory._id],
  );

  const childrenCategories = useSelector(
    state => state.home.childrenCategories[category._id] || [],
  );

  const products =
    useSelector(state => state.home.categoryProducts[selectedCategory._id]) ||
    [];

  React.useEffect(() => {
    products.length === 0 && dispatch(fetchChildrenCategroies(category._id));
  }, []);

  React.useEffect(() => {
    products.length === 0 && dispatch(fetchCategoryProducts(selectedCategory));
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      {renderChildrenCategories(
        [category, ...childrenCategories],
        selectedCategory,
        setSelectedCategory,
      )}
      <Text style={styles.headerText}>Products</Text>
      <ProductsList
        isLoading={isFetchingProducts}
        contentContainerStyle={styles.list}
        data={products}
        onEndReachedThreshold={0.5}
        onEndReached={() => dispatch(fetchCategoryProducts(category))}
      />
    </View>
  );
}
