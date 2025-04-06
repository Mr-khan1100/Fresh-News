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
import backIcon from '@assets/icons/back_icon.png';
import bookmarkIcon from '@assets/icons/Bookmarked.jpg';
import unBookmarkIcon from '@assets/icons/UnBookmarked.jpg'

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
                source={backIcon}
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
                  ? bookmarkIcon
                  : unBookmarkIcon}
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
    backgroundColor: COLORS.defaultBackground,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: SPACING.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderBottomColor,
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
    backgroundColor: COLORS.buttonBackground,
    borderRadius: 5,
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    color: COLORS.defaultBackground,
    fontSize: 16,
  },
  rightSideContainer:{
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
