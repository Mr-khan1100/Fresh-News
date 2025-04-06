import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import CategoryCard from '@components/sharedComponents/CategoryCard';
import CountryFilter from '@utils/CountryFilter';
import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import bookMarkedIcon from '@assets/icons/Bookmarked.jpg';
import { categories } from '@constants/appContants';



const HomeScreen = ({ navigation }) => {
  const selectedCountry = useSelector(state => state.user.selectedCountry);

  return (
    <View style={styles.container}>
      <View style={styles.searchAndFilter}>
      <TouchableOpacity
          style={styles.searchContainer}
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <Image
            source={require('../../assets/icons/search-icon.png')}
            style={styles.searchIcon}
          />
          <Text style={[styles.searchInput]}>Search</Text>
        </TouchableOpacity>
        <CountryFilter selectedCountry = {selectedCountry}/>
        <TouchableOpacity style={styles.filterBox} onPress={() => navigation.navigate('BookMarked')}>
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
            onPress={() => navigation.navigate('List', { category: item.id, country : selectedCountry })}
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
    backgroundColor: '#fff' 
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
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    // paddingVertical: 14,
    height:'100%',
    flex: 1,
    // height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchIcon: {
    width: 30,
    height: 30,
    tintColor: '#B0B0B0',
    marginRight: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#999290',
  },
  filterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    // paddingVertical: 8,
    height:'100%',
    borderWidth: 1,
    backgroundColor:'white',
    borderColor: '#ccc',
    borderRadius: 8,
  },
  image: {
    width: 20,
    height: 35,
  },
});
