import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CustomHeader from '@utils/CustomHeader';
import ListCard from '@components/sharedComponents/ListCard';
import { COLORS } from '@styles/theme';
import { useSelector } from 'react-redux';
import { generalConstants, headerConstants, navigate } from '@constants/appContants';

const BookedMarkedScreen = ({ navigation }) => {
  const bookmarkedArticles = useSelector(state => state.bookmarks.bookmarked);

  return (
    <>
    <CustomHeader title={(headerConstants.BOOKMARKED_LIST).toLocaleUpperCase()} onBackPress={() => navigation.goBack()}/>
    <View style={styles.container}>
      <FlatList
        data={bookmarkedArticles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ListCard
          item={item}
          onPress={() => navigation.navigate(navigate.DETAIL, { article: item })}
        />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.noResultText}>{generalConstants.NO_BOOKMARKED}</Text> 
        )}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={7}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </View>
    </>
  );
};

export default BookedMarkedScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: COLORS.defaultBackground,
  },
  noResultText:{
    alignSelf:'center',
    fontSize:16,
    color:COLORS.semiDarkText,
  },
});
