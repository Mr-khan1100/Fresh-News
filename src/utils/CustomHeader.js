import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import {calHeight, calWidth, COLORS, SPACING, vw} from '@styles/theme';

const CustomHeader = ({
  title,
  onBackPress,
  showBackIcon = true,
  showBlueBackButton = false,
  showBookMark = false,
  isBookmarked = false,
  onBookmarkPress,
  onBlueButtonPress,
  containerStyle,
  titleStyle,
}) => {


  return (
    <>
      <StatusBar backgroundColor={COLORS.background} barStyle="dark-content" />
      <View style={[styles.container, containerStyle]}>
        <View style={styles.sideContainer}>
          {showBackIcon && (
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
               <Image
                source={require('../assets/icons/back_icon.png')}
                style={styles.backArrow}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.titleContainer}>
          <Text style={[styles.title, titleStyle]} numberOfLines={1}>
            {title}
          </Text>
        </View>

        <View style={styles.rightSideContainer}>
        {showBlueBackButton && (
            <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={onBlueButtonPress}>
                <View>
                    <Text style={styles.TextStyle}>
                        GO BACK
                    </Text>
                </View>
            </TouchableOpacity>
          )}
          {showBookMark && (
            <TouchableOpacity
              onPress={onBookmarkPress}
              style={styles.bookmarkButton}
            >
              <Image
                source={isBookmarked
                  ? require('../assets/icons/Bookmarked.jpg')
                  : require('../assets/icons/UnBookmarked.jpg')}
                style={styles.bookmarkIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: calHeight(6),
    backgroundColor: COLORS.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: SPACING.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.background,
  },
  sideContainer: {
    width: calWidth(10),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    padding: SPACING.small,
    marginLeft: -SPACING.small,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    color: COLORS.text,
  },
  backArrow: {
    width: 24,
    height: 24,
  },
  ButtonStyle: {
    backgroundColor: '#4582e6',
    borderRadius: 5,
    padding:10,
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 15,
    // marginBottom:50,
  },
  TextStyle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  rightSideContainer:{
    // width: calWidth(18),
    alignItems: 'flex-end',
    alignSelf:'center',
    justifyContent: 'flex-end',
  },
  bookmarkButton: {
    padding: 10,
    marginRight: 10,
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default CustomHeader;
