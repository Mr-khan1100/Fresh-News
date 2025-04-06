import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { countryCodeList } from '@constants/appContants';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCountry } from '@redux/slices/userSlice';


const CountryFilter = ({selectedCountry}) => {
    // const selectedCountry = useSelector(state => state.user.selectedCountry);
    const dispatch = useDispatch();
    console.log(selectedCountry,'selected country');
    
    const [modalVisible, setModalVisible] = useState(false);
    const [search, setSearch] = useState('');

    const openModal = () => {
        setSearch('');
        setModalVisible(true);
    };

    const selectCountry = async(country) => {
        const newCountry = {
        name: country.name,
        flag: country.flag,
        code: country.code,
        };
        dispatch(setSelectedCountry(newCountry));
        setModalVisible(false);
    };



  const filteredCountries = countryCodeList.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.filterBox} onPress={() => openModal()}>
            <Text style={styles.flag}>{selectedCountry?.flag}</Text>
            <Text style={styles.countryText}>{selectedCountry?.code}</Text>
        </TouchableOpacity>
      <Modal visible={modalVisible} transparent animationType={'fade'} onRequestClose={() => setModalVisible(false)}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.searchInput}
              placeholder={'search '}
              placeholderTextColor={'#ccc'}
              value={search}
              onChangeText={setSearch}
            />
            <FlatList
              data={filteredCountries}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.countryItem} onPress={() => selectCountry(item)}>
                  <Text style={styles.flag}>{item.flag}</Text>
                  <Text style={styles.countryName}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     margin: 0, 
    },
  flag: { 
    fontSize: 24, 
    marginRight: 8, 
    },
  modalContainer: { 
    position:'absolute',
    top:0,
    width:'100%',
    height:'100%',
    // flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center', 
},
  modalContent: { 
    backgroundColor: '#fff', 
    padding: 20, 
    borderRadius: 16, 
    margin: 20,
    width:'70%',
    maxWidth:'90%',
    height:'95%',
    justifyContent:'center',
    alignSelf:'center',
    // alignItems:'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    color:'#2E2E2E',
    borderRadius: 8,
    marginBottom: 20,
  },
  countryItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  countryName: { flex: 1, fontSize: 16 },
  filterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    backgroundColor:'white',  
    borderColor: '#ccc',
    borderRadius: 8,
  },
  countryText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CountryFilter;
