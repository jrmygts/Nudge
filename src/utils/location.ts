import * as Location from 'expo-location';
import { sendLocationNotification } from './notifications';

// Define types
interface StoredLocation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

// Constants
const LOCATION_TASK_NAME = 'background-location-task';
const DISTANCE_THRESHOLD = 100; // meters

// Helper function to calculate distance between two points
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
};

// Check if user is near any stored locations
const checkNearbyLocations = async (
  currentLocation: Location.LocationObject,
  storedLocations: StoredLocation[]
) => {
  for (const location of storedLocations) {
    const distance = calculateDistance(
      currentLocation.coords.latitude,
      currentLocation.coords.longitude,
      location.latitude,
      location.longitude
    );

    if (distance <= DISTANCE_THRESHOLD) {
      await sendLocationNotification(location.name);
      break; // Only send one notification at a time
    }
  }
};

export const requestLocationPermissions = async () => {
  try {
    const { status: foregroundStatus } = 
      await Location.requestForegroundPermissionsAsync();
    
    if (foregroundStatus !== 'granted') {
      console.log('Foreground location permission denied');
      return false;
    }

    const { status: backgroundStatus } = 
      await Location.requestBackgroundPermissionsAsync();
    
    if (backgroundStatus !== 'granted') {
      console.log('Background location permission denied');
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error requesting location permissions:', error);
    return false;
  }
};

export const startLocationTracking = async (storedLocations: StoredLocation[]) => {
  try {
    // Start location updates
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.Balanced,
      timeInterval: 60000, // Update every 1 minute
      distanceInterval: 50, // Or when device moves 50 meters
      foregroundService: {
        notificationTitle: "Nudge is active",
        notificationBody: "Tracking spending locations",
      },
    });

    // Define the background task
    Location.TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
      if (error) {
        console.error('Location task error:', error);
        return;
      }
      
      if (data) {
        const { locations } = data as { locations: Location.LocationObject[] };
        const currentLocation = locations[0]; // Get most recent location
        
        await checkNearbyLocations(currentLocation, storedLocations);
      }
    });

  } catch (error) {
    console.error('Error starting location tracking:', error);
  }
};

export const stopLocationTracking = async () => {
  try {
    await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
  } catch (error) {
    console.error('Error stopping location tracking:', error);
  }
}; 