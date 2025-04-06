// screens/DetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import CustomHeader from '@utils/CustomHeader';
import FormBlueButton from '@utils/FormBlueButton';
import FastImage from 'react-native-fast-image';
import defaultImage from '@assets/images/default-image.jpg';
import { formatDate, generateArticleId } from '@utils/sharedFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '@redux/slices/bookmarkSlice';
import { vw } from '@styles/theme';

const DetailScreen = ({ route, navigation }) => {
    const { article } = route.params;
    const [showWebView, setShowWebView] = useState(false);
    const dispatch = useDispatch();
    const bookmarkedArticles = useSelector(state => state.bookmarks.bookmarked);


    const articleId = generateArticleId(article);

    const isBookmarked = bookmarkedArticles.some(item => item.id === articleId);

    const handleBookmarkPress = () => {
      dispatch(toggleBookmark({
        ...article,
        id: articleId,
        isBookmarked: !isBookmarked,
      }));
    };

    useEffect(() => {
      const backAction = () => {
        if (showWebView) {
          setShowWebView(false);
          return true;
        } else {
          navigation.goBack();
          return true;
        }
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      );
      return () => backHandler.remove();
    }, [showWebView, navigation]);

    if (showWebView) {
      return (
        <>
          <View style={styles.webViewContainer}>
            <CustomHeader title={'FUll ARTICLE'} showBackIcon = {false} showBlueBackButton={true} onBlueButtonPress={()=> setShowWebView(false)}/>
            <WebView source={{ uri: article.url }} style={styles.webViewContainer} />
          </View>
        </>
      );
    }

    return (
      <>
        <CustomHeader title={'DETAIL'} 
            onBackPress={() => navigation.goBack()}
            showBookMark = {true}
            isBookmarked={isBookmarked}
            onBookmarkPress={handleBookmarkPress}
        />
        <View style={styles.scrollViewcontainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <FastImage
            style={styles.image}
            source={
              article.urlToImage
                ? { uri: article.urlToImage }
                : defaultImage
            }
            resizeMode={FastImage.resizeMode.cover}
            priority={FastImage.priority.high}
          />
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.date} numberOfLines={1}>Date: {formatDate(article.publishedAt)}</Text>
          <Text style={styles.content}>{(article.content || article.description)?.replace(/\[\+\d+ chars\]/, '').trim()}</Text>
          <FormBlueButton
                onPress={() => setShowWebView(true)}
                title={'Read Full Article'}
              />
        </ScrollView>
        </View>
      </>
    );
  };

export default DetailScreen;

const styles = StyleSheet.create({
  scrollViewcontainer: { 
    flex: 1, 
    backgroundColor: '#fff', 
  },
  scrollContainer:{
    padding: 16 ,
  },
  webViewContainer:{ 
    flex: 1 
  },
  image: { 
    width: '100%', 
    height: vw * 80,
    resizeMode:'contain',
    borderRadius: 8, 
    marginBottom: 16 
  },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 12 
  },
  content: { 
    fontSize: 16, 
    lineHeight: 22 
  },
  date:{
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 6,
    color: '#2E2E2E',
  },
});
