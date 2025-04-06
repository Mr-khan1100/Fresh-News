import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@components/screens/HomeScreen';
import ListScreen from '@components/screens/ListScreen';
import DetailScreen from '@components/screens/DetailScreen';
import SearchScreen from '@components/screens/SearchScreen';
import BookedMarkedScreen from '@components/screens/BookedMarkedScreen';
import { navigate } from '@constants/appContants';

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={navigate.HOME}>
            <Stack.Screen name={navigate.HOME} component={HomeScreen} options={{ headerShown: false, }} />
            <Stack.Screen name={navigate.LIST} component={ListScreen} options={{ headerShown: false, }} />
            <Stack.Screen name={navigate.DETAIL} component={DetailScreen} options={{ headerShown: false, }} />
            <Stack.Screen name={navigate.SEARCH} component={SearchScreen} options={{ headerShown: false, }} />
            <Stack.Screen name={navigate.BOOKMARKED} component={BookedMarkedScreen} options={{ headerShown: false, }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default AppNavigator