import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { getSearchResults } from "@api/services";
import { setDate, setSearchResult } from "@redux/slices/userSlice";
import { Alert, FlatList, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { UserContext } from "@components/navigation/ContextProvider";
import { checkInternetConnection, formatDate } from "@utils/sharedFunctions";
import CustomHeader from "@utils/CustomHeader";
import { COLORS } from "@styles/theme";
import calendarIconSource from '@assets/icons/date_input.png';

const SearchScreen = ({navigation}) => {
    const [searchText, setSearchText] = useState('');
    const date = useSelector(state => state.user.date);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const {setLoading} = useContext(UserContext);
    const dispatch = useDispatch();
    const searchResults = useSelector(state => state.user.searchResult);
    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = selectedDate => {
        console.log('here');
        
        const formattedDate = formatDate(selectedDate);
        console.log(formattedDate,'formatted date');
        
        dispatch(setDate(formattedDate));
        hideDatePicker();
    };
  
    useEffect(() => {
        return () => {
            dispatch(setSearchResult(null));
            setHasSearched(false); // Reset search tracking
        };
    }, [dispatch]);

    const handleSearch = async () => {
        setHasSearched(true);
        Keyboard.dismiss();
        setLoading(true);
        const checkInternet = await checkInternetConnection();
        if(checkInternet){
        try {
          const result = await getSearchResults(searchText, date);
          if(result.length === 0){
            dispatch(setSearchResult([]));
            setLoading(false);
          }else{
            dispatch(setSearchResult(result));
            setLoading(false);
          }
        } catch (error) {
            console.log(error, 'error');
            dispatch(setSearchResult([]));
          Alert.alert('Oops!', error.toString());
        }finally{
          setLoading(false);
        }
        }else{
          Alert.alert('No Internet', 'Please check your internet connection and try again');
          setLoading(false);
        }
    };

    const handleSearchSelect = (item) => {
        navigation.navigate('Detail', { article: item });
    };
  
    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.itemContainer} onPress={() => handleSearchSelect(item)}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>
    );
  
    return (
        <>
    <CustomHeader title={('search').toLocaleUpperCase()} onBackPress={() => navigation.goBack()}/>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
            <TouchableOpacity
                style={styles.dateContainer}
                onPress={showDatePicker}>
                <Image source={calendarIconSource} style={styles.dateImg} />
            </TouchableOpacity>
            <TextInput
            style={styles.input}
            placeholder="Search articles..."
            placeholderTextColor={COLORS.lavaGrey}
            value={searchText}
            onChangeText={setSearchText}
            autoFocus
            autoCorrect={false}
            spellCheck={false}
            autoCapitalize="none"
            keyboardType="visible-password"
            maxLength={50}
            />
            <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={handleSearch}>
                <View>
                    <Text style={styles.TextStyle}>
                        Search
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        {date && (<Text style={styles.date}>showing result till {date}</Text>)}
  
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item) => item.title + item.publishedAt}
          ListEmptyComponent={
            hasSearched && searchResults?.length === 0 && (
                <Text style={styles.emptyText}>No results found</Text>
            )
          }
        />
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode={'date'}
            maximumDate={new Date()}
            minimumDate={new Date(2025, 2, 5)}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        />
      </View>
     </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    searchContainer: {
        // backgroundColor:'red',
      flexDirection: 'row',
      marginBottom: 16,
      gap:10,
    },
    input: {
      flex: 1,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      padding: 12,
      color:COLORS.semiDarkText,
    //   marginRight: 8,
    },
    itemContainer: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: '#666',
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 20,
      color: '#999',
    },
    ButtonStyle: {
        backgroundColor: '#4582e6',
        borderRadius: 5,
        padding:10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      TextStyle: {
        color: '#FFFFFF',
        fontSize: 16,
      },
      dateContainer:{
        justifyContent:'center',
        alignItems:'center',

      },
      dateImg:{
        width: 50,
        height: 50,
      },
      date:{
        color: COLORS.semiDarkText,
        fontSize: 16,
        marginBottom:10,
      },
  });

  export default SearchScreen;
