import AppNavigator from "@components/navigation/AppNavigator";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from "@redux/store/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "@styles/theme";
import { ContextProvider } from "@components/navigation/ContextProvider";

const App = () => {
  return(
    <SafeAreaProvider>
        <SafeAreaView style={styles.bgColor}>
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <ContextProvider>
                  <AppNavigator/>
                </ContextProvider>
            </PersistGate>
          </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  bgColor: {
    flex:1,
    backgroundColor: COLORS.background,
  },
});
export default App;
