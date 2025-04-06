import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import defaultImage from '@assets/images/default-image.jpg';
import { formatDate } from '@utils/sharedFunctions';
const ListCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <FastImage
        style={styles.image}
        source={
          item.urlToImage
            ? { uri: item.urlToImage }
            : defaultImage
        }
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.date} numberOfLines={2}>{formatDate(item.publishedAt)}</Text>
        <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 3,
    marginBottom: 12,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 180,
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  date:{
    fontSize: 12,
    fontWeight: 400,
    marginBottom: 4,
    color: '#4E4E4E',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
