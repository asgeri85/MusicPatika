import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Songcard.style';

const SongCard = ({song}) => {
  return (
    <View style={styles.card_container}>
      <Image source={{uri: song.imageUrl}} style={styles.image_container} />
      <View style={styles.info_container}>
        <Text style={styles.text_title}>{song.title}</Text>
        <View style={styles.about_container}>
          <View style={styles.sub_container}>
            <Text>{song.artist}</Text>
            <Text style={styles.text_year}>{song.year}</Text>
          </View>
          {song.isSoldOut && (
            <View style={styles.soludation_container}>
              <Text style={styles.soludation_text}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SongCard;
