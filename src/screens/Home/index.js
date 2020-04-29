import React from 'react';
import {View, ScrollView, Text, FlatList} from 'react-native';
import {Category} from '../../components/Category';
import {ProductsList} from '../../components/ProductsList';
import {dummyCategories, dummyProducts} from '../../utils/dummyData';
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
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Categories</Text>
      {renderCategoriesList(dummyCategories)}

      <Text style={styles.headerText}>Products</Text>
      <ProductsList data={dummyProducts} />
    </ScrollView>
  );
}
