import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card_container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  image_container: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  info_container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  text_title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  sub_container: {
    flexDirection: 'row',
    flex: 1,
  },
  text_year: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  about_container: {
    flexDirection: 'row',
  },
  soludation_text: {
    color: 'red',
  },
  soludation_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
});
