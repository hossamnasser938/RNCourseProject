import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Category} from '../../components/Category';
import {Product} from '../../components/Product';
import {dummyCategories, dummyProductWithDiscount} from '../../utils/dummyData';
import styles from './styles';

function renderCategory({item}) {
  return <Category category={item} />;
}

function renderCategoriesList(categories) {
  return (
    <FlatList data={categories} renderItem={renderCategory} horizontal={true} />
  );
}

export function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Categories</Text>
      {renderCategoriesList(dummyCategories)}

      <Text style={styles.headerText}>Products</Text>
      <Product product={dummyProductWithDiscount} />
    </View>
  );
}
