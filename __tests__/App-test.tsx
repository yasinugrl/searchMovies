/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { render, fireEvent, shallow } from '@testing-library/react-native'

import { Provider } from 'react-redux'
import store from '../src/reducers/Store';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MovieItem from '../src/components/MovieItem';
import Storage from '../src/utils/Storage';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('The list contains all the favorites', () => {
  const { getAllByTestId } = render(<Provider store={store}><MovieItem /></Provider>)
  const itm = getAllByTestId('dataItem');
  Storage.FavoritesData.get().then(response => {
    expect(itm.length).toBe(response.length)
  });
})
