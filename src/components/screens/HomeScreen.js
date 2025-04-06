import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import CategoryCard from '@components/sharedComponents/CategoryCard';
import CountryFilter from '@utils/CountryFilter';
import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import bookMarkedIcon from '@assets/icons/Bookmarked.jpg';
import { categories, generalConstants, navigate } from '@constants/appContants';
import searchIcon from '@assets/icons/search-icon.png';
import { COLORS } from '@styles/theme';


const HomeScreen = ({ navigation }) => {
  const selectedCountry = useSelector(state => state.user.selectedCountry);

  return (
    <View style={styles.container}>
      <View style={styles.searchAndFilter}>
      <TouchableOpacity
          style={styles.searchContainer}
          onPress={() => {
            navigation.navigate(navigate.SEARCH);
          }}>
          <Image
            source={searchIcon}
            style={styles.searchIcon}
          />
          <Text style={[styles.searchInput]}>{generalConstants.SEARCH}</Text>
        </TouchableOpacity>
        <CountryFilter selectedCountry = {selectedCountry}/>
        <TouchableOpacity style={styles.filterBox} onPress={() => navigation.navigate(navigate.BOOKMARKED)}>
            <FastImage
            style={styles.image}
            source={ bookMarkedIcon}
            resizeMode={FastImage.resizeMode.cover}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            title={item.title}
            image={item.image}
            onPress={() => navigation.navigate(navigate.LIST, { category: item.id, country : selectedCountry })}
          />
        )}
        showsVerticalScrollIndicator={false}
        initialNumToRender={7}
        maxToRenderPerBatch={7}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: COLORS.defaultBackground 
  },
  searchAndFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom:10,
    padding: 5,
    zIndex: 1,
    gap:8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.defaultBackground,
    borderRadius: 8,
    paddingHorizontal: 10,
    height:'100%',
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.placeholderTextColor,
  },
  searchIcon: {
    width: 30,
    height: 30,
    tintColor: COLORS.placeholderTextColor,
    marginRight: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.placeholderTextColor,
  },
  filterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height:'100%',
    borderWidth: 1,
    backgroundColor:COLORS.defaultBackground,
    borderColor: COLORS.placeholderTextColor,
    borderRadius: 8,
  },
  image: {
    width: 20,
    height: 35,
  },
});
