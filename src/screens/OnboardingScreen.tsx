import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

// Define the navigation types
type RootStackParamList = {
  Onboarding: undefined;
  AddLocations: undefined;
};

export const OnboardingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Onboarding'>>();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log({ username, email, password });
    // Navigate to AddLocations screen
    navigation.navigate('AddLocations');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Welcome to Nudge</Title>
      
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
      />

      <Button 
        mode="contained" 
        onPress={handleSignup}
        style={styles.button}
      >
        Sign Up
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
