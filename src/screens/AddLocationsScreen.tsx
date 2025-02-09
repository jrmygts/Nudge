import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextInput, Button, List, Surface } from 'react-native-paper';

interface Location {
  id: string;
  name: string;
}

export const AddLocationsScreen = () => {
  const [locationName, setLocationName] = useState('');
  const [locations, setLocations] = useState<Location[]>([]);

  const handleSaveLocation = () => {
    if (!locationName.trim()) return;
    
    const newLocation: Location = {
      id: Date.now().toString(), // Simple unique ID for MVP
      name: locationName.trim(),
    };
    
    setLocations(currentLocations => [...currentLocations, newLocation]);
    setLocationName(''); // Clear input after saving
  };

  const handleRemoveLocation = (id: string) => {
    setLocations(currentLocations => 
      currentLocations.filter(location => location.id !== id)
    );
  };

  const renderItem = ({ item }: { item: Location }) => (
    <Surface style={styles.listItem} elevation={1}>
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
});

export default AddLocationsScreen; 