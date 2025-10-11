import { useState, useEffect } from "react";
import { Bell, X, AlertCircle, CheckCircle } from "lucide-react";

export default function NotificationSystem() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    checkForNewQueries();
    const interval = setInterval(checkForNewQueries, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const checkForNewQueries = () => {
    // Check both travel queries and contact queries
    const travelQueries = JSON.parse(
      localStorage.getItem("travelQueries") || "[]"
    );
    const contactQueries = JSON.parse(
      localStorage.getItem("contactQueries") || "[]"
    );
    const allQueries = [...travelQueries, ...contactQueries];

    const newQueries = allQueries.filter(
      (query: any) => query.status === "Pending"
    );
    setUnreadCount(newQueries.length);

    // Show notification for new queries
    if (newQueries.length > 0) {
      const latestQuery = newQueries[newQueries.length - 1];
      if (!notifications.find((n) => n.id === latestQuery.id)) {
        setNotifications((prev) => [
          ...prev,
          {
            id: latestQuery.id,
            type: "new_query",
            message: `New ${latestQuery.type} request from ${
              latestQuery.customer || latestQuery.name
            }`,
            timestamp: new Date(),
            query: latestQuery,
          },
        ]);
      }
    }
  };

  const markAsRead = (notificationId: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== notificationId));
    setUnreadCount((prev) => Math.max(0, prev - 1));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    setUnreadCount(0);
  };

  const formatTime = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / 60000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {showNotifications && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Notifications
              </h3>
              <div className="flex items-center space-x-2">
                {notifications.length > 0 && (
                  <button
                    onClick={clearAllNotifications}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No new notifications
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-4 border-b border-gray-100 hover:bg-gray-50"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {notification.type === "new_query" ? (
                        <AlertCircle className="w-5 h-5 text-blue-500" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatTime(notification.timestamp)}
                      </p>
                      {notification.query && (
                        <div className="mt-2 flex space-x-2">
                          <a
                            href={`/admin/login`}
                            className="text-xs bg-[#0b234a] text-white px-2 py-1 rounded"
                          >
                            View Details
                          </a>
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded hover:bg-gray-200"
                          >
                            Mark Read
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
