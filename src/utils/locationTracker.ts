// Location-based service tracking utilities
export interface UserLocation {
  latitude: number;
  longitude: number;
  accuracy?: number;
  timestamp: number;
}

export interface ServiceSearch {
  id: string;
  serviceType: string;
  serviceName: string;
  location: UserLocation;
  searchQuery: string;
  timestamp: number;
  userAgent: string;
  ipAddress?: string;
  radius: number; // in KM
}

export interface LocationNotification {
  id: string;
  serviceSearch: ServiceSearch;
  distance: number; // distance from your location in KM
  priority: 'high' | 'medium' | 'low';
  timestamp: number;
  status: 'new' | 'viewed' | 'contacted' | 'completed';
}

// Your business location (you can update this to your actual location)
export const BUSINESS_LOCATION: UserLocation = {
  latitude: 19.0760, // Mumbai coordinates (update to your location)
  longitude: 72.8777,
  timestamp: Date.now()
};

// Calculate distance between two coordinates using Haversine formula
export function calculateDistance(
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Get user's current location
export async function getUserLocation(): Promise<UserLocation | null> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      console.warn('Geolocation is not supported by this browser');
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location: UserLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: Date.now()
        };
        resolve(location);
      },
      (error) => {
        console.warn('Error getting location:', error);
        resolve(null);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  });
}

// Track service search with location
export function trackServiceSearch(
  serviceType: string,
  serviceName: string,
  searchQuery: string,
  userLocation?: UserLocation
): ServiceSearch {
  const serviceSearch: ServiceSearch = {
    id: `search_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    serviceType,
    serviceName,
    location: userLocation || { latitude: 0, longitude: 0, timestamp: Date.now() },
    searchQuery,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    radius: 100 // 100KM radius
  };

  // Store in localStorage for now (in production, send to your server)
  storeServiceSearch(serviceSearch);
  
  // Check if within 100KM radius and create notification
  if (userLocation) {
    const distance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      BUSINESS_LOCATION.latitude,
      BUSINESS_LOCATION.longitude
    );

    if (distance <= 100) {
      createLocationNotification(serviceSearch, distance);
    }
  }

  return serviceSearch;
}

// Store service search in localStorage
function storeServiceSearch(serviceSearch: ServiceSearch): void {
  try {
    const searches = getStoredServiceSearches();
    searches.push(serviceSearch);
    
    // Keep only last 1000 searches to prevent storage bloat
    if (searches.length > 1000) {
      searches.splice(0, searches.length - 1000);
    }
    
    localStorage.setItem('service_searches', JSON.stringify(searches));
  } catch (error) {
    console.error('Error storing service search:', error);
  }
}

// Get stored service searches
export function getStoredServiceSearches(): ServiceSearch[] {
  try {
    const stored = localStorage.getItem('service_searches');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error retrieving service searches:', error);
    return [];
  }
}

// Create location notification
function createLocationNotification(
  serviceSearch: ServiceSearch, 
  distance: number
): void {
  const notification: LocationNotification = {
    id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    serviceSearch,
    distance: Math.round(distance * 100) / 100, // Round to 2 decimal places
    priority: distance <= 25 ? 'high' : distance <= 50 ? 'medium' : 'low',
    timestamp: Date.now(),
    status: 'new'
  };

  // Store notification
  storeLocationNotification(notification);
  
  // Show browser notification if permission granted
  showBrowserNotification(notification);
}

// Store location notification
function storeLocationNotification(notification: LocationNotification): void {
  try {
    const notifications = getStoredLocationNotifications();
    notifications.unshift(notification); // Add to beginning
    
    // Keep only last 500 notifications
    if (notifications.length > 500) {
      notifications.splice(500);
    }
    
    localStorage.setItem('location_notifications', JSON.stringify(notifications));
  } catch (error) {
    console.error('Error storing location notification:', error);
  }
}

// Get stored location notifications
export function getStoredLocationNotifications(): LocationNotification[] {
  try {
    const stored = localStorage.getItem('location_notifications');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error retrieving location notifications:', error);
    return [];
  }
}

// Show browser notification
async function showBrowserNotification(notification: LocationNotification): Promise<void> {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications');
    return;
  }

  if (Notification.permission === 'granted') {
    const notificationObj = new Notification(
      `🔔 New Service Search Nearby!`,
      {
        body: `${notification.serviceSearch.serviceName} search within ${notification.distance}KM`,
        icon: '/icon.png',
        tag: notification.id,
        requireInteraction: true
      }
    );

    notificationObj.onclick = () => {
      window.focus();
      notificationObj.close();
    };
  } else if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      showBrowserNotification(notification);
    }
  }
}

// Request notification permission
export async function requestNotificationPermission(): Promise<boolean> {
  if (!('Notification' in window)) {
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
}

// Get nearby searches within radius
export function getNearbySearches(radius: number = 100): ServiceSearch[] {
  const searches = getStoredServiceSearches();
  return searches.filter(search => {
    if (!search.location.latitude || !search.location.longitude) {
      return false;
    }
    
    const distance = calculateDistance(
      search.location.latitude,
      search.location.longitude,
      BUSINESS_LOCATION.latitude,
      BUSINESS_LOCATION.longitude
    );
    
    return distance <= radius;
  });
}

// Get notification statistics
export function getNotificationStats() {
  const notifications = getStoredLocationNotifications();
  const now = Date.now();
  const last24Hours = now - (24 * 60 * 60 * 1000);
  const last7Days = now - (7 * 24 * 60 * 60 * 1000);

  return {
    total: notifications.length,
    new: notifications.filter(n => n.status === 'new').length,
    last24Hours: notifications.filter(n => n.timestamp >= last24Hours).length,
    last7Days: notifications.filter(n => n.timestamp >= last7Days).length,
    highPriority: notifications.filter(n => n.priority === 'high').length,
    mediumPriority: notifications.filter(n => n.priority === 'medium').length,
    lowPriority: notifications.filter(n => n.priority === 'low').length
  };
}

// Update notification status
export function updateNotificationStatus(
  notificationId: string, 
  status: LocationNotification['status']
): void {
  try {
    const notifications = getStoredLocationNotifications();
    const notification = notifications.find(n => n.id === notificationId);
    
    if (notification) {
      notification.status = status;
      localStorage.setItem('location_notifications', JSON.stringify(notifications));
    }
  } catch (error) {
    console.error('Error updating notification status:', error);
  }
}

// Clear old notifications (older than 30 days)
export function clearOldNotifications(): void {
  try {
    const notifications = getStoredLocationNotifications();
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
    
    const recentNotifications = notifications.filter(n => n.timestamp >= thirtyDaysAgo);
    localStorage.setItem('location_notifications', JSON.stringify(recentNotifications));
  } catch (error) {
    console.error('Error clearing old notifications:', error);
  }
}
