import React, { useState, useEffect } from "react";
import {
  MapPin,
  Bell,
  Users,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle,
  Phone,
  Mail,
  Eye,
  Filter,
  Search,
  RefreshCw,
} from "lucide-react";
import { useLocationTracking } from "../hooks/useLocationTracking";
import type { LocationNotification } from "../utils/locationTracker";

interface LocationNotificationDashboardProps {
  className?: string;
}

export const LocationNotificationDashboard: React.FC<
  LocationNotificationDashboardProps
> = ({ className = "" }) => {
  const {
    notifications,
    stats,
    isLoading,
    error,
    markNotificationAsViewed,
    markNotificationAsContacted,
    markNotificationAsCompleted,
    refreshNotifications,
  } = useLocationTracking();

  const [filter, setFilter] = useState<
    "all" | "new" | "viewed" | "contacted" | "completed"
  >("all");
  const [priorityFilter, setPriorityFilter] = useState<
    "all" | "high" | "medium" | "low"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNotification, setSelectedNotification] =
    useState<LocationNotification | null>(null);

  // Filter notifications based on current filters
  const filteredNotifications = notifications.filter((notification) => {
    const matchesStatus = filter === "all" || notification.status === filter;
    const matchesPriority =
      priorityFilter === "all" || notification.priority === priorityFilter;
    const matchesSearch =
      searchQuery === "" ||
      notification.serviceSearch.serviceName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      notification.serviceSearch.searchQuery
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesStatus && matchesPriority && matchesSearch;
  });

  // Add a test notification if none exist
  const displayNotifications =
    filteredNotifications.length > 0
      ? filteredNotifications
      : [
          {
            id: "test-1",
            serviceSearch: {
              serviceType: "G2C",
              serviceName: "Aadhaar Card",
              searchQuery: "aadhaar card services",
              timestamp: Date.now(),
              userLocation: {
                latitude: 28.6139,
                longitude: 77.209,
                accuracy: 10,
                timestamp: Date.now(),
              },
            },
            distance: 5.2,
            priority: "high" as const,
            status: "new" as const,
            timestamp: Date.now(),
          },
        ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200";
      case "medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "low":
        return "text-green-600 bg-green-50 border-green-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "viewed":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "contacted":
        return "text-purple-600 bg-purple-50 border-purple-200";
      case "completed":
        return "text-green-600 bg-green-50 border-green-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const formatDistance = (distance: number) => {
    if (distance < 1) {
      return `${Math.round(distance * 1000)}m`;
    }
    return `${distance.toFixed(1)}km`;
  };

  const formatTimestamp = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <RefreshCw className="w-6 h-6 animate-spin text-blue-600" />
        <span className="ml-2 text-gray-600">Loading notifications...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <AlertCircle className="w-6 h-6 text-red-600" />
        <span className="ml-2 text-red-600">{error}</span>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Bell className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Location-Based Notifications
              </h2>
              <p className="text-gray-600">
                Track service searches within 100KM radius
              </p>
            </div>
          </div>
          <button
            onClick={refreshNotifications}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="p-6 border-b border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">
                Total Notifications
              </span>
            </div>
            <p className="text-2xl font-bold text-blue-900 mt-1">
              {stats.total}
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-600">
                New Alerts
              </span>
            </div>
            <p className="text-2xl font-bold text-green-900 mt-1">
              {stats.new}
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-600">
                Last 24h
              </span>
            </div>
            <p className="text-2xl font-bold text-yellow-900 mt-1">
              {stats.last24Hours}
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">
                High Priority
              </span>
            </div>
            <p className="text-2xl font-bold text-purple-900 mt-1">
              {stats.highPriority}
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-wrap gap-4">
          {/* Status Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="viewed">Viewed</option>
              <option value="contacted">Contacted</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Priority Filter */}
          <div className="flex items-center space-x-2">
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Priority</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>

          {/* Search */}
          <div className="flex items-center space-x-2 flex-1 min-w-64">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-h-96 overflow-y-auto">
        {displayNotifications.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <Bell className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No notifications found matching your filters</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {displayNotifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => setSelectedNotification(notification)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {formatDistance(notification.distance)} away
                      </span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        {formatTimestamp(notification.timestamp)}
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-1">
                      {notification.serviceSearch.serviceName}
                    </h3>

                    <p className="text-sm text-gray-600 mb-2">
                      {notification.serviceSearch.searchQuery}
                    </p>

                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                          notification.priority
                        )}`}
                      >
                        {notification.priority} priority
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          notification.status
                        )}`}
                      >
                        {notification.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 ml-4">
                    {notification.status === "new" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          markNotificationAsViewed(notification.id);
                        }}
                        className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded"
                        title="Mark as viewed"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    )}

                    {notification.status === "viewed" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          markNotificationAsContacted(notification.id);
                        }}
                        className="p-1 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded"
                        title="Mark as contacted"
                      >
                        <Phone className="w-4 h-4" />
                      </button>
                    )}

                    {notification.status === "contacted" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          markNotificationAsCompleted(notification.id);
                        }}
                        className="p-1 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded"
                        title="Mark as completed"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notification Detail Modal */}
      {selectedNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Notification Details
                </h3>
                <button
                  onClick={() => setSelectedNotification(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Service Name
                  </label>
                  <p className="text-gray-900">
                    {selectedNotification.serviceSearch.serviceName}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Search Query
                  </label>
                  <p className="text-gray-900">
                    {selectedNotification.serviceSearch.searchQuery}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Distance
                  </label>
                  <p className="text-gray-900">
                    {formatDistance(selectedNotification.distance)} from your
                    location
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Priority
                  </label>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                      selectedNotification.priority
                    )}`}
                  >
                    {selectedNotification.priority} priority
                  </span>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      selectedNotification.status
                    )}`}
                  >
                    {selectedNotification.status}
                  </span>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Timestamp
                  </label>
                  <p className="text-gray-900">
                    {new Date(selectedNotification.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
