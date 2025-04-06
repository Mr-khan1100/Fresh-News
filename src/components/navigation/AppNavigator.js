import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@components/screens/HomeScreen';
import ListScreen from '@components/screens/ListScreen';
import DetailScreen from '@components/screens/DetailScreen';
import SearchScreen from '@components/screens/SearchScreen';
import BookedMarkedScreen from '@components/screens/BookedMarkedScreen';

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="List" component={ListScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="BookMarked" component={BookedMarkedScreen} options={{ headerShown: false, }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default AppNavigator