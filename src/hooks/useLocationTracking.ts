import { useState, useEffect, useCallback } from 'react';
import { 
  getUserLocation, 
  trackServiceSearch, 
  getStoredLocationNotifications,
  updateNotificationStatus,
  getNotificationStats,
  requestNotificationPermission as requestNotificationPermissionUtil,
  type UserLocation,
  type ServiceSearch,
  type LocationNotification
} from '../utils/locationTracker';

export interface LocationTrackingState {
  userLocation: UserLocation | null;
  locationPermission: 'granted' | 'denied' | 'prompt' | 'unknown';
  notifications: LocationNotification[];
  stats: ReturnType<typeof getNotificationStats>;
  isLoading: boolean;
  error: string | null;
}

export function useLocationTracking() {
  const [state, setState] = useState<LocationTrackingState>({
    userLocation: null,
    locationPermission: 'unknown',
    notifications: [],
    stats: {
      total: 0,
      new: 0,
      last24Hours: 0,
      last7Days: 0,
      highPriority: 0,
      mediumPriority: 0,
      lowPriority: 0
    },
    isLoading: true,
    error: null
  });

  // Load initial data
  useEffect(() => {
    loadInitialData();
  }, []);

  // Set up periodic refresh
  useEffect(() => {
    const interval = setInterval(() => {
      refreshNotifications();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const loadInitialData = async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));

      // Get user location
      const location = await getUserLocation();
      
      // Load notifications
      const notifications = getStoredLocationNotifications();
      
      // Get stats
      const stats = getNotificationStats();

      setState(prev => ({
        ...prev,
        userLocation: location,
        locationPermission: location ? 'granted' : 'denied',
        notifications,
        stats,
        isLoading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to load location data'
      }));
    }
  };

  const refreshNotifications = useCallback(() => {
    const notifications = getStoredLocationNotifications();
    const stats = getNotificationStats();
    
    setState(prev => ({
      ...prev,
      notifications,
      stats
    }));
  }, []);

  const requestLocationPermission = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true }));
      
      const location = await getUserLocation();
      setState(prev => ({
        ...prev,
        userLocation: location,
        locationPermission: location ? 'granted' : 'denied',
        isLoading: false
      }));
      
      return location;
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to get location'
      }));
      return null;
    }
  }, []);

  const requestNotificationPermission = useCallback(async (): Promise<boolean> => {
    try {
      const granted = await requestNotificationPermissionUtil();
      return granted;
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
  }, []);

  const trackService = useCallback((
    serviceType: string,
    serviceName: string,
    searchQuery: string
  ) => {
    try {
      const serviceSearch = trackServiceSearch(
        serviceType,
        serviceName,
        searchQuery,
        state.userLocation || undefined
      );
      
      // Refresh notifications after tracking
      setTimeout(refreshNotifications, 1000);
      
      return serviceSearch;
    } catch (error) {
      console.error('Error tracking service:', error);
      return null;
    }
  }, [state.userLocation, refreshNotifications]);

  const markNotificationAsViewed = useCallback((notificationId: string) => {
    updateNotificationStatus(notificationId, 'viewed');
    refreshNotifications();
  }, [refreshNotifications]);

  const markNotificationAsContacted = useCallback((notificationId: string) => {
    updateNotificationStatus(notificationId, 'contacted');
    refreshNotifications();
  }, [refreshNotifications]);

  const markNotificationAsCompleted = useCallback((notificationId: string) => {
    updateNotificationStatus(notificationId, 'completed');
    refreshNotifications();
  }, [refreshNotifications]);

  return {
    ...state,
    requestLocationPermission,
    requestNotificationPermission,
    trackService,
    markNotificationAsViewed,
    markNotificationAsContacted,
    markNotificationAsCompleted,
    refreshNotifications
  };
}
