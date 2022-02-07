import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import MovieItem from '../components/MovieItem';
import Storage from '../utils/Storage';

interface FavoriteProps { }

const Favorite = (props: FavoriteProps) => {
  const { favorites} = useSelector(state => state.moviesResponse)
  return (
    <FlatList
      data={favorites}
      ListEmptyComponent={() => <Text style={{ marginTop: 20, fontSize: 12, textAlign: 'center'}}>There is any favorite data</Text>}
      renderItem={({ item }) => <MovieItem item={item} {...props} />}
      keyExtractor={item => item.id}
      style={{ width: '90%', alignSelf: 'center' }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {}
});
