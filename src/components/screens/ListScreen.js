// screens/ListScreen.js
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, RefreshControl } from 'react-native';
import { getSelectedCategoryList } from '@api/services';
import CustomHeader from '@utils/CustomHeader';
import ListCard from '@components/sharedComponents/ListCard';
import { COLORS } from '@styles/theme';
import { checkInternetConnection } from '@utils/sharedFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategoryList } from '@redux/slices/userSlice';
import { UserContext } from '@components/navigation/ContextProvider';

const ListScreen = ({ route, navigation }) => {
  const { category, country } = route.params;
  const dispatch = useDispatch();
  const {setLoading} = useContext(UserContext);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const articles = useSelector(state => state.user.selectedCategoryList);

  const categoryList = async() =>{

    const checkInternet = await checkInternetConnection();
    if(checkInternet){
    try {
      const result = await getSelectedCategoryList(category, country.code);
      dispatch(setSelectedCategoryList(result));
      setLoading(false);
      setIsRefreshing(false);
    } catch (error) {
      navigation.goBack();
      Alert.alert('Oops!', error.toString());
    }finally{
      setLoading(false);
      setIsRefreshing(false);
    }
    }else{
      navigation.goBack();
      Alert.alert('No Internet', 'Please check your internet connection and try again');
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    categoryList();
  }, [category,country]);

  const onRefresh = () => {
    setIsRefreshing(true);
    categoryList();
    setIsRefreshing(false);
  };

  return (
    <>
    <CustomHeader title={(`${category}  list`).toLocaleUpperCase()} onBackPress={() => navigation.goBack()}/>
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ListCard
          item={item}
          onPress={() => navigation.navigate('Detail', { article: item })}
        />
        )}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            colors={[COLORS.primary]}
          />
        }
        ListEmptyComponent={() => (
          <Text style={styles.noResultText}>No results found for {country?.name} in {category} category</Text> 
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

export default ListScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#fff',
  },
  noResultText:{
    alignSelf:'center',
    fontSize:16,
    color:COLORS.semiDarkText,
  },
});
