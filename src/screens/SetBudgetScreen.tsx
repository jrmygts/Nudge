import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SetBudget: undefined;
  SpendingTracker: undefined;
};

export const SetBudgetScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'SetBudget'>>();
  const [budget, setBudget] = useState('');

  const handleSetBudget = () => {
    const budgetAmount = parseFloat(budget);
    if (isNaN(budgetAmount)) return;

    console.log('Budget set to:', budgetAmount);
    navigation.navigate('SpendingTracker');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Set Your Monthly Budget</Title>
      
      <TextInput
        label="Budget Amount"
        value={budget}
        onChangeText={setBudget}
        keyboardType="numeric"
        style={styles.input}
        mode="outlined"
        placeholder="Enter amount"
      />

      <Button 
        mode="contained" 
        onPress={handleSetBudget}
        style={styles.button}
        disabled={!budget.trim()}
      >
        Set Budget
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
    paddingVertical: 8,
  },
});

