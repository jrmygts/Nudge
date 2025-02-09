import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppNavigator } from './src/navigation/AppNavigator';
import { useEffect } from 'react';
import { requestNotificationsPermissions, sendTestNotification } from './src/utils/notifications';

export default function App() {
  useEffect(() => {
    const initializeNotifications = async () => {
      const hasPermission = await requestNotificationsPermissions();
      if (hasPermission) {
        await sendTestNotification();
      }
    };

    initializeNotifications();
  }, []);

  return (
    <PaperProvider>
      <AppNavigator />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
