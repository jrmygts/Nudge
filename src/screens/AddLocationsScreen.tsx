import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextInput, Button, List, Surface } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import * as Location from 'expo-location';

// Add navigation type
type RootStackParamList = {
  AddLocations: undefined;
  SetBudget: undefined;
};

interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

export const AddLocationsScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'AddLocations'>>();
  const [locationName, setLocationName] = useState('');
  const [locations, setLocations] = useState<Location[]>([]);

  const handleSaveLocation = async () => {
    if (!locationName.trim()) return;
    
    try {
      // Get current location when saving a place
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission denied');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      
      const newLocation: Location = {
        id: Date.now().toString(),
        name: locationName.trim(),
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      };
      
      setLocations(currentLocations => [...currentLocations, newLocation]);
      setLocationName('');
    } catch (error) {
      console.error('Error saving location:', error);
    }
  };

  const handleRemoveLocation = (id: string) => {
    setLocations(currentLocations => 
      currentLocations.filter(location => location.id !== id)
    );
  };

  const renderItem = ({ item }: { item: Location }) => (
    <Surface style={styles.listItem} elevation={1}>
      <View style={{ overflow: 'hidden' }}>
        <List.Item
          title={item.name}
        right={props => (
          <Button
            {...props}
            mode="text"
            onPress={() => handleRemoveLocation(item.id)}
            textColor="red"
          >
            Remove
            </Button>
          )}
        />
      </View>
    </Surface>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="Location Name"
          placeholder="Search places..."
          value={locationName}
          onChangeText={setLocationName}
          mode="outlined"
          style={styles.input}
        />
        <Button
          mode="contained"
          onPress={handleSaveLocation}
          style={styles.button}
          disabled={!locationName.trim()}
        >
          Save
        </Button>
      </View>

      <FlatList
        data={locations}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <List.Item
            title="No locations added yet"
            description="Add your first location above"
            titleStyle={styles.emptyText}
            descriptionStyle={styles.emptyText}
          />
        }
      />

      {/* Add Next button */}
      <Button
        mode="contained"
        onPress={() => navigation.navigate('SetBudget')}
        style={styles.nextButton}
        disabled={locations.length === 0}
      >
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
  },
  button: {
    padding: 4,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
  listItem: {
    marginBottom: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
  },
  nextButton: {
    marginTop: 16,
    marginBottom: 16,
    padding: 8,
  },
});

export default AddLocationsScreen; 