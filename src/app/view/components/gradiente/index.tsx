import React from 'react';
import { StyleSheet, View } from 'react-native';

const GradientBackground = ({ colors, style }: any) => {
  return (
    <View style={[styles.gradient, style]}>
      <View style={[styles.gradientLayer, { backgroundColor: colors[0] }]} />
      <View style={[styles.gradientLayer, { backgroundColor: colors[1] }]} />
    </View>
  );
};

const styles = StyleSheet.create({
    gradient: {
      flex: 1,
    },
    gradientLayer: {
      flex: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  });
  
  export default GradientBackground;