// components/CategoryCard.js
import { COLORS } from '@styles/theme';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

const CategoryCard = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <FastImage
        style={styles.image}
        source={image}
        resizeMode={FastImage.resizeMode.cover}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </FastImage>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    height: 140,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.defaultBackground,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
