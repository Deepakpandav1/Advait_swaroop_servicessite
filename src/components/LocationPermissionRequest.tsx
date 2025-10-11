import React, { useState, useEffect } from "react";
import { MapPin, Bell, X, CheckCircle, AlertCircle } from "lucide-react";
import { useLocationTracking } from "../hooks/useLocationTracking";

interface LocationPermissionRequestProps {
  onPermissionGranted?: () => void;
  onPermissionDenied?: () => void;
  className?: string;
}

export const LocationPermissionRequest: React.FC<
  LocationPermissionRequestProps
> = ({ onPermissionGranted, onPermissionDenied, className = "" }) => {
  const [showRequest, setShowRequest] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState<
    "unknown" | "granted" | "denied"
  >("unknown");
  const [isVisible, setIsVisible] = useState(false);

  const {
    requestLocationPermission,
    requestNotificationPermission,
    userLocation,
    locationPermission,
  } = useLocationTracking();

  useEffect(() => {
    // Check if permissions have been requested before
    const locationRequested = localStorage.getItem(
      "locationPermissionRequested"
    );
    const notificationRequested = localStorage.getItem(
      "notificationPermissionRequested"
    );

    if (!locationRequested || !notificationRequested) {
      setShowRequest(true);
      // Add a small delay for smooth animation
      setTimeout(() => setIsVisible(true), 100);
    }

    setPermissionStatus(locationPermission);
  }, [locationPermission]);

  // Auto-dismiss after 10 seconds if user doesn't interact
  useEffect(() => {
    if (showRequest && isVisible) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [showRequest, isVisible]);

  const handleRequestPermissions = async () => {
    setIsRequesting(true);

    try {
      // Request location permission
      const locationGranted = await requestLocationPermission();

      // Request notification permission
      const notificationGranted = await requestNotificationPermission();

      if (locationGranted) {
        localStorage.setItem("locationPermissionRequested", "true");
        setPermissionStatus("granted");
        onPermissionGranted?.();
      } else {
        setPermissionStatus("denied");
        onPermissionDenied?.();
      }

      if (notificationGranted) {
        localStorage.setItem("notificationPermissionRequested", "true");
      }

      setShowRequest(false);
    } catch (error) {
      console.error("Error requesting permissions:", error);
      setPermissionStatus("denied");
      onPermissionDenied?.();
    } finally {
      setIsRequesting(false);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowRequest(false);
      localStorage.setItem("locationPermissionRequested", "true");
      localStorage.setItem("notificationPermissionRequested", "true");
    }, 300); // Wait for animation to complete
  };

  if (!showRequest) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      <div className="bg-white rounded-lg max-w-sm w-80 p-4 shadow-xl border border-gray-200 transform transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h3 className="text-sm font-semibold text-gray-900">
              Location Access
            </h3>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          <p className="text-xs text-gray-600">
            Allow location access to get notified about service requests near
            you (within 100KM).
          </p>

          <div className="flex space-x-2">
            <button
              onClick={handleRequestPermissions}
              disabled={isRequesting}
              className="flex-1 bg-blue-600 text-white py-1.5 px-3 rounded text-xs font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-1"
            >
              {isRequesting ? (
                <>
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Requesting...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-3 h-3" />
                  <span>Allow</span>
                </>
              )}
            </button>

            <button
              onClick={handleDismiss}
              className="px-3 py-1.5 text-gray-600 hover:text-gray-800 text-xs font-medium transition-colors"
            >
              Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
