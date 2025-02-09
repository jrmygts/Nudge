import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

export const AddLocationsScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Add Spending Locations</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
}); 