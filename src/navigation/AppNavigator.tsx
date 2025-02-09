import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { AddLocationsScreen } from '../screens/AddLocationsScreen';
import { SetBudgetScreen } from '../screens/SetBudgetScreen';
import { SpendingTrackerScreen } from '../screens/SpendingTrackerScreen';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="AddLocations" 
          component={AddLocationsScreen}
          options={{ title: 'Add Locations' }}
        />
        <Stack.Screen 
          name="SetBudget" 
          component={SetBudgetScreen}
          options={{ title: 'Set Budget' }}
        />
        <Stack.Screen 
          name="SpendingTracker" 
          component={SpendingTrackerScreen}
          options={{ title: 'Spending Tracker' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 