import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Text, FAB, List, Surface } from 'react-native-paper';

interface SpendingEntry {
  id: string;
  description: string;
  amount: number;
  date: string;
}

export const SpendingTrackerScreen = () => {
  const [spendingEntries] = useState<SpendingEntry[]>([
    {
      id: '1',
      description: 'Groceries',
      amount: 25.00,
      date: 'Feb 9, 2024',
    },
    {
      id: '2',
      description: 'Coffee Shop',
      amount: 4.50,
      date: 'Feb 8, 2024',
    },
    {
      id: '3',
      description: 'Gas Station',
      amount: 35.20,
      date: 'Feb 7, 2024',
    },
  ]);

  const totalSpending = spendingEntries.reduce((sum, entry) => sum + entry.amount, 0);

  const renderItem = ({ item }: { item: SpendingEntry }) => (
    <Surface style={[styles.listItem ]} elevation={1}>
      <View style={{ overflow: 'hidden' }}>
        <List.Item
          title={item.description}
          description={item.date}
          right={() => (
            <Text style={styles.amount}>
              ${item.amount.toFixed(2)}
            </Text>
          )}
        />
      </View>
    </Surface>
  );

  return (
    <View style={styles.container}>
      <Title style={styles.screenTitle}>Spending Tracker</Title>
      
      <Card style={styles.totalCard}>
        <Card.Content>
          <Text variant="titleMedium">Total Monthly Spending</Text>
          <Text variant="headlineLarge" style={styles.totalAmount}>
            ${totalSpending.toFixed(2)}
          </Text>
        </Card.Content>
      </Card>

      <FlatList
        data={spendingEntries}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('Add new spending entry')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  screenTitle: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 24,
  },
  totalCard: {
    margin: 16,
    backgroundColor: 'white',
  },
  totalAmount: {
    textAlign: 'center',
    marginTop: 8,
    color: '#2196F3',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  listItem: {
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  amount: {
    alignSelf: 'center',
    marginRight: 16,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default SpendingTrackerScreen; 