import { createContext, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { vh } from "@styles/theme";

export const UserContext = createContext();

export const ContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    return (
      <UserContext.Provider 
      value={{ 
        loading,
        setLoading, 
    }}
    >
        {loading ? (
          <View
            style={styles.loaderContainer}>
              <ActivityIndicator size={65} color="#348" />
            </View>
          ) : null}
        {children}
      </UserContext.Provider>
    );
  };

const styles = StyleSheet.create({
    loaderContainer :{
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,1)',
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        height: vh * 104,
        width: '100%',
        zIndex: 20000,
    },
});
