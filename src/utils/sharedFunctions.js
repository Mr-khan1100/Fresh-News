import NetInfo from '@react-native-community/netinfo';
import { Alert } from 'react-native';

export const checkInternetConnection = async () => {
  const state = await NetInfo.fetch();
  if(state.isConnected && state.isInternetReachable){
    return true;
  }else{
    return false;
  }
};


export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
};

export const generateArticleId = (article) => {
    return `${article.title}-${article.publishedAt}`.replace(/[^a-zA-Z0-9]/g, '-');
};


export const Alerts = (header, message) =>{
  Alert.alert(
      header,  
      message,
      [
          { 
          text: 'OK', 
          onPress: () => console.log('OK Pressed'),
          style: 'cancel' ,
          },
      ],
      { cancelable: true }
  );
};
