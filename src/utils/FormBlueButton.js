import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import { vh, COLORS } from '@styles/theme';

const FormBlueButton = ({disabled, style, onPress, title, titleStyle}) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.ButtonStyle, style]}
        disabled={disabled}
        onPress={onPress}>
        <View>
          <Text style={[styles.TextStyle, titleStyle]}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: COLORS.mfgBlue,
    borderRadius: 5,
    height: vh * 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh * 2,
  },
  TextStyle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default FormBlueButton;
