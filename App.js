import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import music_data from './src/music_data.json';
import SongCard from './src/components/SongCard';
import SearchBar from './src/components/Searchbar';

const App = () => {
  const [songs, setSongs] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperetor_container} />;
  const searchBar = text => {
    const filterSongs = music_data.filter(song => {
      const inputText = text.toLowerCase();
      const songName = song.title.toLowerCase();

      return songName.indexOf(inputText) > -1;
    });
    setSongs(filterSongs);
  };

  return (
    <SafeAreaView style={styles.container_view}>
      <View style={styles.container_view}>
        <SearchBar onSearch={searchBar} />
        <FlatList
          keyExtractor={item => item.id}
          data={songs}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container_view: {
    flex: 1,
  },
  seperetor_container: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
