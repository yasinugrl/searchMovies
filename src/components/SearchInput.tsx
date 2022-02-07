import * as React from 'react';
import { StyleSheetProperties, Text, View, StyleSheet } from 'react-native';
import Input from './Input';


interface SearchInputProps {
  containerStyle?: StyleSheetProperties
  onChangeText?: () => string;
  value?: string,
  inputConatiner?: StyleSheetProperties,
  onFocus?: () => boolean
  placeholder: string
}

const SearchInput = (props: SearchInputProps) => {
  return (
    <Input value={props.value} onChangeText={props.onChangeText} iconType='search' placeholder={props.placeholder} />
  );
};

export default SearchInput;


const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  inputConatiner: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingLeft: 10,
  }
});
