import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.steyles';

const SearchBar = props => {
  return (
    <View style={styles.bar_container}>
      <TextInput placeholder="Ara..." onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;
