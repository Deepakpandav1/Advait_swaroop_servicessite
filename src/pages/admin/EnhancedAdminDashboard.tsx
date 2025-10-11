import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import Breadcrumb from "../../components/Breadcrumb";
import {
  Users,
  MessageSquare,
  Plane,
  Bus,
  Train,
  Globe,
  Phone,
  Mail,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  LogOut,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Lock,
  Unlock,
  Edit,
  Save,
  X,
  Shield,
  UserCheck,
  Timer,
  RefreshCw,
  Key,
  UserPlus,
  Settings,
  MapPin,
} from "lucide-react";
import PasswordChangeModal from "../../components/PasswordChangeModal";
import { LocationNotificationDashboard } from "../../components/LocationNotificationDashboard";
import {
  getUserById,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  securityQuestions,
  checkActiveSession,
  updateActivity,
  clearSession,
  getQueryRouting,
  generateUsername,
  checkUsernameExists,
  generateUniqueUsername,
  DEFAULT_PASSWORD,
} from "../../utils/passwordManager";
import {
  getTickets,
  updateTicketStatus,
  assignTicket,
  addTicketComment,
  getTicketStats,
  searchTickets,
  type Ticket,
} from "../../utils/ticketManager";

interface Query {
  id: string;
  type: string;
  customer: string;
  contact: string;
  email: string;
  name?: string;
  phone?: string;
  from?: string;
  to?: string;
  date?: string;
  passengers?: string;
  class?: string;
  message?: string;
  timestamp: string;
  status: string;
  remarks?: string;
  assignedTo?: string;
  reopened?: boolean;
  reopenRequest?: boolean;
  reopenReason?: string;
  daysOpen?: number;
  commentHistory?: CommentEntry[];
}

interface CommentEntry {
  id: string;
  timestamp: string;
  user: string;
  role: string;
  action: string;
  comment: string;
}

export default function EnhancedAdminDashboard() {
  const [queries, setQueries] = useState<Query[]>([]);
  const [filteredQueries, setFilteredQueries] = useState<Query[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [selectedQuery, setSelectedQuery] = useState<Query | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showReopenModal, setShowReopenModal] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [remarks, setRemarks] = useState("");
  const [reopenReason, setReopenReason] = useState("");
  const [show2FA, setShow2FA] = useState(false);
  const [twoFACode, setTwoFACode] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userDepartment, setUserDepartment] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [showUserManagement, setShowUserManagement] = useState(false);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [showLocationTracking, setShowLocationTracking] = useState(false);
  const [showQueries, setShowQueries] = useState(false);
  const [adminUsers, setAdminUsers] = useState<any[]>([]);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    role: "",
    department: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    securityQuestion: "",
    securityAnswer: "",
  });
  const [usernameConflict, setUsernameConflict] = useState(false);
  const [customUsername, setCustomUsername] = useState("");
  const [suggestedUsername, setSuggestedUsername] = useState("");
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentAction, setCommentAction] = useState("");

  // Ticket Management State
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketComment, setTicketComment] = useState("");
  const [ticketSearch, setTicketSearch] = useState("");
  const [ticketFilter, setTicketFilter] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    // Load tickets
    const loadedTickets = getTickets();
    setTickets(loadedTickets);
  }, []);

  useEffect(() => {
    // Check if admin is authenticated
    const isAuthenticated = localStorage.getItem("adminAuthenticated");
    const loginTime = localStorage.getItem("adminLoginTime");
    const role = localStorage.getItem("adminRole");
    const department = localStorage.getItem("adminDepartment");
    const user = localStorage.getItem("adminUsername");
    const userIdFromStorage = localStorage.getItem("adminUserId");
    const requirePasswordChange = localStorage.getItem("requirePasswordChange");

    setUserRole(role || "");
    setUserDepartment(department || "");
    setUsername(user || "");
    setUserId(userIdFromStorage || "");

    // Check if password change is required
    if (requirePasswordChange === "true") {
      setShowPasswordChange(true);
    }

    if (!isAuthenticated || !loginTime) {
      navigate({ to: "/admin/login" });
      return;
    }

    // Check active session
    if (!checkActiveSession()) {
      clearSession();
      navigate({ to: "/admin/login" });
      return;
    }

    // Check if session is expired (24 hours)
    const loginDate = new Date(loginTime);
    const now = new Date();
    const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);

    if (hoursDiff > 24) {
      clearSession();
      navigate({ to: "/admin/login" });
      return;
    }

    loadQueries();
    loadUsers();

    // Update activity every 30 seconds
    const activityInterval = setInterval(updateActivity, 30000);
    // Check for new queries every 30 seconds
    const queryInterval = setInterval(loadQueries, 30000);

    return () => {
      clearInterval(activityInterval);
      clearInterval(queryInterval);
    };
  }, [navigate]);

  useEffect(() => {
    filterQueries();
  }, [queries, searchTerm, statusFilter, typeFilter]);

  // Auto-refresh tickets every 30 seconds when tickets are shown
  useEffect(() => {
    if (showTickets) {
      const interval = setInterval(() => {
        const loadedTickets = getTickets();
        setTickets(loadedTickets);
        console.log("Auto-refreshing tickets...");
      }, 30000); // 30 seconds

      return () => clearInterval(interval);
    }
  }, [showTickets]);

  // Auto-refresh queries every 30 seconds when queries are shown
  useEffect(() => {
    if (showQueries) {
      const interval = setInterval(() => {
        loadQueries();
        console.log("Auto-refreshing queries...");
      }, 30000); // 30 seconds

      return () => clearInterval(interval);
    }
  }, [showQueries]);

  const loadQueries = () => {
    // Load from all sources: travel, contact, and admin queries
    const travelQueries = JSON.parse(
      localStorage.getItem("travelQueries") || "[]"
    );
    const contactQueries = JSON.parse(
      localStorage.getItem("contactQueries") || "[]"
    );
    const adminQueries = JSON.parse(
      localStorage.getItem("adminQueries") || "[]"
    );

    // Combine all queries, prioritizing adminQueries (which has comments)
    const allQueries = [...travelQueries, ...contactQueries, ...adminQueries];

    // Remove duplicates based on ID (adminQueries might have updated versions)
    const uniqueQueries = allQueries.reduce((acc, current) => {
      const existingIndex = acc.findIndex((item) => item.id === current.id);
      if (existingIndex >= 0) {
        // Replace with admin version if it exists (has comments)
        acc[existingIndex] = current;
      } else {
        acc.push(current);
      }
      return acc;
    }, []);

    // Calculate days open for each query
    const queriesWithAging = uniqueQueries.map((query) => ({
      ...query,
      daysOpen: Math.floor(
        (new Date().getTime() - new Date(query.timestamp).getTime()) /
          (1000 * 60 * 60 * 24)
      ),
    }));

    setQueries(queriesWithAging);
  };

  const saveQueries = (queriesToSave: Query[]) => {
    // Save to adminQueries for persistence
    localStorage.setItem("adminQueries", JSON.stringify(queriesToSave));
  };

  const loadUsers = () => {
    const users = getUsers();
    setAdminUsers(users);
  };

  const handleCreateUser = () => {
    if (
      !newUser.role ||
      !newUser.firstName ||
      !newUser.lastName ||
      !newUser.email ||
      !newUser.phone ||
      !newUser.securityQuestion ||
      !newUser.securityAnswer
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Check for username conflict
    const baseUsername = generateUsername(newUser.firstName, newUser.lastName);
    if (checkUsernameExists(baseUsername)) {
      setUsernameConflict(true);
      setSuggestedUsername(
        generateUniqueUsername(newUser.firstName, newUser.lastName)
      );
      return;
    }

    try {
      const userData = {
        role: newUser.role,
        department: newUser.department,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone,
        securityQuestion: newUser.securityQuestion,
        securityAnswer: newUser.securityAnswer,
        isActive: true,
        isGoogleAuthEnabled: false,
      };

      createUser(userData);
      loadUsers();
      setShowCreateUser(false);
      setNewUser({
        username: "",
        password: "",
        role: "",
        department: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        securityQuestion: "",
        securityAnswer: "",
      });
      setUsernameConflict(false);
      setCustomUsername("");
      setSuggestedUsername("");
      alert("User created successfully with default password: Pass@1234");
    } catch (error) {
      alert("Error creating user: " + (error as Error).message);
    }
  };

  const handleResolveUsernameConflict = () => {
    if (!customUsername) {
      alert("Please enter a custom username");
      return;
    }

    if (checkUsernameExists(customUsername)) {
      alert("This username already exists. Please choose a different one.");
      return;
    }

    try {
      const userData = {
        role: newUser.role,
        department: newUser.department,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone,
        securityQuestion: newUser.securityQuestion,
        securityAnswer: newUser.securityAnswer,
        isActive: true,
        isGoogleAuthEnabled: false,
      };

      createUser(userData, customUsername);
      loadUsers();
      setShowCreateUser(false);
      setNewUser({
        username: "",
        password: "",
        role: "",
        department: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        securityQuestion: "",
        securityAnswer: "",
      });
      setUsernameConflict(false);
      setCustomUsername("");
      setSuggestedUsername("");
      alert("User created successfully with default password: Pass@1234");
    } catch (error) {
      alert("Error creating user: " + (error as Error).message);
    }
  };

  const handlePasswordChangeSuccess = () => {
    localStorage.removeItem("requirePasswordChange");
    setShowPasswordChange(false);
    alert("Password updated successfully. Please login again.");
    logout();
  };

  const filterQueries = () => {
    let filtered = queries;

    // Department-based filtering
    if (userDepartment && userDepartment !== "All") {
      const allowedTypes = getQueryRouting(userDepartment);
      filtered = filtered.filter((query) => allowedTypes.includes(query.type));
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (query) =>
          query.customer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          query.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          query.contact?.includes(searchTerm) ||
          query.phone?.includes(searchTerm) ||
          query.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          query.id?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "All") {
      filtered = filtered.filter((query) => query.status === statusFilter);
    }

    if (typeFilter !== "All") {
      filtered = filtered.filter((query) => query.type === typeFilter);
    }

    // Sort by timestamp (newest first)
    filtered.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    setFilteredQueries(filtered);
  };

  const updateQueryStatus = (queryId: string, newStatus: string) => {
    if (newStatus === "Completed") {
      setShow2FA(true);
      setSelectedQuery(queries.find((q) => q.id === queryId) || null);
      return;
    }

    const updatedQueries = queries.map((query) =>
      query.id === queryId ? { ...query, status: newStatus, remarks } : query
    );
    setQueries(updatedQueries);

    // Update in appropriate storage
    const travelQueries = updatedQueries.filter(
      (q) => q.type && q.type !== "Contact Form"
    );
    const contactQueries = updatedQueries.filter(
      (q) => q.type === "Contact Form"
    );

    localStorage.setItem("travelQueries", JSON.stringify(travelQueries));
    localStorage.setItem("contactQueries", JSON.stringify(contactQueries));
    localStorage.setItem("adminQueries", JSON.stringify(updatedQueries));
  };

  const handle2FA = () => {
    // Simple 2FA - in production, use proper 2FA
    if (twoFACode === "123456") {
      if (selectedQuery) {
        const updatedQueries = queries.map((query) =>
          query.id === selectedQuery.id
            ? {
                ...query,
                status: "Completed",
                remarks,
                completedAt: new Date().toISOString(),
              }
            : query
        );
        setQueries(updatedQueries);

        // Update storage
        const travelQueries = updatedQueries.filter(
          (q) => q.type && q.type !== "Contact Form"
        );
        const contactQueries = updatedQueries.filter(
          (q) => q.type === "Contact Form"
        );

        localStorage.setItem("travelQueries", JSON.stringify(travelQueries));
        localStorage.setItem("contactQueries", JSON.stringify(contactQueries));
        localStorage.setItem("adminQueries", JSON.stringify(updatedQueries));
      }
      setShow2FA(false);
      setTwoFACode("");
      setRemarks("");
    } else {
      alert("Invalid 2FA code. Use: 123456");
    }
  };

  const requestReopen = (queryId: string) => {
    const updatedQueries = queries.map((query) =>
      query.id === queryId
        ? {
            ...query,
            reopenRequest: true,
            reopenReason,
            status: "Reopen Requested",
          }
        : query
    );
    setQueries(updatedQueries);
    setShowReopenModal(false);
    setReopenReason("");
  };

  const approveReopen = (queryId: string) => {
    if (userRole !== "Branch Manager") {
      alert("Only Branch Manager can approve reopen requests");
      return;
    }

    const updatedQueries = queries.map((query) =>
      query.id === queryId
        ? {
            ...query,
            status: "Pending",
            reopened: true,
            reopenRequest: false,
            remarks: `Reopen request approved by ${userRole}`,
          }
        : query
    );
    setQueries(updatedQueries);
    saveQueries(updatedQueries);
    alert("Reopen request approved. Ticket is now pending.");
  };

  const rejectReopen = (queryId: string) => {
    if (userRole !== "Branch Manager") {
      alert("Only Branch Manager can reject reopen requests");
      return;
    }

    const updatedQueries = queries.map((query) =>
      query.id === queryId
        ? {
            ...query,
            status: "Completed",
            reopened: false,
            reopenRequest: false,
            remarks: `Reopen request rejected by ${userRole}`,
          }
        : query
    );
    setQueries(updatedQueries);
    saveQueries(updatedQueries);
    alert("Reopen request rejected.");
  };

  const addComment = (queryId: string, action: string, comment: string) => {
    const commentEntry: CommentEntry = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      user: username,
      role: userRole,
      action: action,
      comment: comment,
    };

    const updatedQueries = queries.map((query) =>
      query.id === queryId
        ? {
            ...query,
            commentHistory: [...(query.commentHistory || []), commentEntry],
            remarks: comment,
          }
        : query
    );

    setQueries(updatedQueries);
    saveQueries(updatedQueries);

    // Close modal immediately
    setShowCommentModal(false);
    setCommentText("");
    setCommentAction("");
    setSelectedQuery(null);
  };

  const handleCommentSubmit = () => {
    console.log("handleCommentSubmit called");

    if (!selectedQuery || !commentText.trim()) {
      alert("Please enter a comment.");
      return;
    }

    if (!commentAction) {
      alert("Please select an action type.");
      return;
    }

    try {
      // Add comment
      const commentEntry: CommentEntry = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        user: username,
        role: userRole,
        action: commentAction,
        comment: commentText.trim(),
      };

      const updatedQueries = queries.map((query) =>
        query.id === selectedQuery.id
          ? {
              ...query,
              commentHistory: [...(query.commentHistory || []), commentEntry],
              remarks: commentText.trim(),
            }
          : query
      );

      // Save to localStorage immediately
      localStorage.setItem("adminQueries", JSON.stringify(updatedQueries));

      // Update state
      setQueries(updatedQueries);

      console.log("Comment saved to localStorage");

      // Close modal immediately
      setShowCommentModal(false);
      setCommentText("");
      setCommentAction("");
      setSelectedQuery(null);

      alert("Comment added successfully.");
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Error adding comment. Please try again.");
    }
  };

  const closeCommentModal = () => {
    console.log("closeCommentModal called");
    setShowCommentModal(false);
    setCommentText("");
    setCommentAction("");
    setSelectedQuery(null);
  };

  // Ticket Management Functions
  const handleTicketStatusChange = (
    ticketId: string,
    newStatus: Ticket["status"]
  ) => {
    updateTicketStatus(ticketId, newStatus, username);
    setTickets(getTickets());
  };

  const handleTicketAssignment = (ticketId: string, assignedTo: string) => {
    assignTicket(ticketId, assignedTo, username);
    setTickets(getTickets());
  };

  const handleAddTicketComment = () => {
    if (!selectedTicket || !ticketComment.trim()) {
      alert("Please enter a comment.");
      return;
    }
    addTicketComment(selectedTicket.id, username, ticketComment);
    setTickets(getTickets());
    setSelectedTicket(
      getTickets().find((t) => t.id === selectedTicket.id) || null
    );
    setTicketComment("");
  };

  const getFilteredTickets = () => {
    let filtered = tickets;

    // Apply search filter
    if (ticketSearch.trim()) {
      filtered = searchTickets(ticketSearch);
    }

    // Apply type filter
    if (ticketFilter !== "all") {
      filtered = filtered.filter((t) => t.type === ticketFilter);
    }

    return filtered;
  };

  const logout = () => {
    clearSession();
    navigate({ to: "/admin/login" });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      case "Reopen Requested":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Flight Booking":
        return <Plane className="w-5 h-5" />;
      case "Bus Booking":
        return <Bus className="w-5 h-5" />;
      case "Train Booking":
        return <Train className="w-5 h-5" />;
      case "Visa Services":
        return <Globe className="w-5 h-5" />;
      case "Contact Form":
        return <MessageSquare className="w-5 h-5" />;
      default:
        return <MessageSquare className="w-5 h-5" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const viewQuery = (query: Query) => {
    setSelectedQuery(query);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedQuery(null);
  };

  const getStats = () => {
    const total = queries.length;
    const pending = queries.filter((q) => q.status === "Pending").length;
    const completed = queries.filter((q) => q.status === "Completed").length;
    const today = queries.filter((q) => {
      const queryDate = new Date(q.timestamp);
      const today = new Date();
      return queryDate.toDateString() === today.toDateString();
    }).length;
    const overdue = queries.filter((q) => q.daysOpen && q.daysOpen > 2).length;
    const reopenRequests = queries.filter((q) => q.reopenRequest).length;

    return { total, pending, completed, today, overdue, reopenRequests };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb
          items={[
            { name: "Admin", href: "/admin" },
            { name: "Dashboard", href: "/admin/dashboard" },
          ]}
        />
      </div>
      {/* Header */}
      <div className="bg-[#0b234a] text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Enhanced Admin Dashboard</h1>
              <p className="text-[#E6B837] text-lg mt-1">
                Welcome back, {username} - {userRole} ({userDepartment})
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowPasswordChange(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Key className="w-4 h-4" />
                <span>Change Password</span>
              </button>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {userRole === "Branch Manager" && userDepartment === "All" && (
              <button
                onClick={() => setShowUserManagement(!showUserManagement)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 min-w-[160px] justify-center ${
                  showUserManagement
                    ? "bg-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-purple-100 text-purple-700 hover:bg-purple-200 hover:shadow-md"
                }`}
              >
                <UserPlus className="w-4 h-4" />
                <span>Manage Users</span>
              </button>
            )}

            <button
              onClick={() => setShowTickets(!showTickets)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 min-w-[160px] justify-center ${
                showTickets
                  ? "bg-green-600 text-white shadow-lg transform scale-105"
                  : "bg-green-100 text-green-700 hover:bg-green-200 hover:shadow-md"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Tickets ({getTicketStats().total})</span>
            </button>

            <button
              onClick={() => setShowLocationTracking(!showLocationTracking)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 min-w-[160px] justify-center ${
                showLocationTracking
                  ? "bg-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200 hover:shadow-md"
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Location Tracking</span>
            </button>

            <button
              onClick={() => setShowQueries(!showQueries)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 min-w-[160px] justify-center ${
                showQueries
                  ? "bg-indigo-600 text-white shadow-lg transform scale-105"
                  : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:shadow-md"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Queries</span>
            </button>

            <button
              onClick={() => setShowStats(!showStats)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 min-w-[160px] justify-center ${
                showStats
                  ? "bg-[#E6B837] text-[#0b234a] shadow-lg transform scale-105"
                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 hover:shadow-md"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Analytics</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Cards */}
        {showStats && (
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Queries</p>
                  <p className="text-3xl font-bold text-[#0b234a]">
                    {stats.total}
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#0b234a] rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-[#E6B837]" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-3xl font-bold text-yellow-600">
                    {stats.pending}
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-3xl font-bold text-green-600">
                    {stats.completed}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today</p>
                  <p className="text-3xl font-bold text-[#E6B837]">
                    {stats.today}
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#E6B837] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#0b234a]" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Overdue (2+ days)</p>
                  <p className="text-3xl font-bold text-red-600">
                    {stats.overdue}
                  </p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Reopen Requests</p>
                  <p className="text-3xl font-bold text-orange-600">
                    {stats.reopenRequests}
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Search queries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Reopen Requested">Reopen Requested</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
              >
                <option value="All">All Types</option>
                <option value="Flight Booking">Flight Booking</option>
                <option value="Bus Booking">Bus Booking</option>
                <option value="Train Booking">Train Booking</option>
                <option value="Visa Services">Visa Services</option>
                <option value="Contact Form">Contact Form</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Queries
              </label>
              <div className="text-2xl font-bold text-[#0b234a]">
                {filteredQueries.length}
              </div>
            </div>
          </div>
        </div>

        {/* Queries List */}
        <div className="bg-white rounded-xl shadow-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Query Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Days Open
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredQueries.map((query) => (
                  <tr key={query.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {query.id}
                        </div>
                        <div className="text-sm text-gray-500">
                          {query.from && query.to
                            ? `${query.from} → ${query.to}`
                            : "General Inquiry"}
                        </div>
                        {query.daysOpen && query.daysOpen > 2 && (
                          <div className="text-xs text-red-600 font-semibold">
                            Overdue ({query.daysOpen} days)
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {query.customer || query.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {query.contact || query.phone}
                        </div>
                        <div className="text-sm text-gray-500">
                          {query.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-[#0b234a] mr-2">
                          {getTypeIcon(query.type)}
                        </div>
                        <span className="text-sm text-gray-900">
                          {query.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          query.status
                        )}`}
                      >
                        {query.status}
                      </span>
                      {query.reopenRequest && (
                        <div className="text-xs text-orange-600 mt-1">
                          Reopen Requested
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {query.daysOpen || 0} days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => viewQuery(query)}
                          className="text-[#0b234a] hover:text-[#E6B837]"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedQuery(query);
                            setCommentAction("Comment");
                            setShowCommentModal(true);
                          }}
                          className="text-purple-600 hover:text-purple-800"
                          title="Add Comment"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        {query.status !== "Completed" && (
                          <select
                            value={query.status}
                            onChange={(e) =>
                              updateQueryStatus(query.id, e.target.value)
                            }
                            className="text-xs border border-gray-300 rounded px-2 py-1"
                          >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        )}
                        {query.status === "Completed" && !query.reopened && (
                          <button
                            onClick={() => {
                              setSelectedQuery(query);
                              setShowReopenModal(true);
                            }}
                            className="text-orange-600 hover:text-orange-800"
                            title="Request Reopen"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                        )}
                        {query.reopenRequest &&
                          userRole === "Branch Manager" && (
                            <div className="flex space-x-2">
                              <button
                                onClick={() => approveReopen(query.id)}
                                className="text-green-600 hover:text-green-800"
                                title="Approve Reopen"
                              >
                                <Unlock className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => rejectReopen(query.id)}
                                className="text-red-600 hover:text-red-800"
                                title="Reject Reopen"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Query Details Modal */}
        {showModal && selectedQuery && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                closeModal();
              }
            }}
            tabIndex={-1}
          >
            <div className="bg-white rounded-lg p-6 max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Query Details
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Request ID
                    </label>
                    <p className="text-sm text-gray-900">{selectedQuery.id}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Type
                    </label>
                    <p className="text-sm text-gray-900">
                      {selectedQuery.type}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Customer Name
                    </label>
                    <p className="text-sm text-gray-900">
                      {selectedQuery.customer || selectedQuery.name}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Contact
                    </label>
                    <p className="text-sm text-gray-900">
                      {selectedQuery.contact || selectedQuery.phone}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <p className="text-sm text-gray-900">{selectedQuery.email}</p>
                </div>

                {selectedQuery.from && selectedQuery.to && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        From
                      </label>
                      <p className="text-sm text-gray-900">
                        {selectedQuery.from}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        To
                      </label>
                      <p className="text-sm text-gray-900">
                        {selectedQuery.to}
                      </p>
                    </div>
                  </div>
                )}

                {selectedQuery.date && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Travel Date
                    </label>
                    <p className="text-sm text-gray-900">
                      {selectedQuery.date}
                    </p>
                  </div>
                )}

                {selectedQuery.passengers && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Passengers
                    </label>
                    <p className="text-sm text-gray-900">
                      {selectedQuery.passengers}
                    </p>
                  </div>
                )}

                {selectedQuery.class && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Class
                    </label>
                    <p className="text-sm text-gray-900">
                      {selectedQuery.class}
                    </p>
                  </div>
                )}

                {selectedQuery.message && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <p className="text-sm text-gray-900">
                      {selectedQuery.message}
                    </p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Submitted At
                  </label>
                  <p className="text-sm text-gray-900">
                    {formatDate(selectedQuery.timestamp)}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Days Open
                  </label>
                  <p className="text-sm text-gray-900">
                    {selectedQuery.daysOpen || 0} days
                  </p>
                </div>

                {/* Comment History */}
                {selectedQuery.commentHistory &&
                  selectedQuery.commentHistory.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Comment History
                      </h4>
                      <div className="space-y-3 max-h-60 overflow-y-auto">
                        {selectedQuery.commentHistory.map((comment) => (
                          <div
                            key={comment.id}
                            className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0b234a]"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <span className="font-semibold text-[#0b234a]">
                                  {comment.user}
                                </span>
                                <span className="text-sm text-gray-500 ml-2">
                                  ({comment.role})
                                </span>
                              </div>
                              <span className="text-xs text-gray-500">
                                {formatDate(comment.timestamp)}
                              </span>
                            </div>
                            <div className="mb-2">
                              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                {comment.action}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700">
                              {comment.comment}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                <div className="flex space-x-4 pt-4">
                  <a
                    href={`tel:${selectedQuery.contact || selectedQuery.phone}`}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Customer
                  </a>
                  <a
                    href={`mailto:${selectedQuery.email}`}
                    className="flex items-center px-4 py-2 bg-[#0b234a] text-white rounded-lg hover:bg-[#1e3a5f]"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2FA Modal */}
        {show2FA && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShow2FA(false);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setShow2FA(false);
              }
            }}
            tabIndex={-1}
          >
            <div className="bg-white rounded-lg p-6 max-w-md mx-4">
              <div className="text-center mb-4">
                <Shield className="w-12 h-12 text-[#0b234a] mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Two-Factor Authentication
                </h3>
                <p className="text-sm text-gray-600">
                  Enter 2FA code to complete this action
                </p>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter 2FA code"
                  value={twoFACode}
                  onChange={(e) => setTwoFACode(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Use code: 123456 (for demo)
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handle2FA}
                  className="flex-1 bg-[#0b234a] text-white py-2 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors"
                >
                  Verify & Complete
                </button>
                <button
                  onClick={() => setShow2FA(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reopen Request Modal */}
        {showReopenModal && selectedQuery && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowReopenModal(false);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setShowReopenModal(false);
              }
            }}
            tabIndex={-1}
          >
            <div className="bg-white rounded-lg p-6 max-w-md mx-4">
              <div className="text-center mb-4">
                <RefreshCw className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Request Ticket Reopen
                </h3>
                <p className="text-sm text-gray-600">
                  Provide reason for reopening this ticket
                </p>
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Enter reason for reopening..."
                  value={reopenReason}
                  onChange={(e) => setReopenReason(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => requestReopen(selectedQuery.id)}
                  className="flex-1 bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Submit Request
                </button>
                <button
                  onClick={() => setShowReopenModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* User Management Section */}
        {showUserManagement &&
          userRole === "Branch Manager" &&
          userDepartment === "All" && (
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#0b234a]">
                  User Management
                </h3>
                <button
                  onClick={() => setShowCreateUser(true)}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2 min-w-[140px] justify-center"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Create New User</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Login
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {adminUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {user.firstName} {user.lastName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user.username}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user.email}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            {user.role.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              user.isActive
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {user.isActive ? "Active" : "Inactive"}
                          </span>
                          {user.isFirstLogin && (
                            <div className="text-xs text-orange-600 mt-1">
                              First Login Required
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.lastLogin
                            ? new Date(user.lastLogin).toLocaleDateString()
                            : "Never"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => {
                                const updatedUser = {
                                  ...user,
                                  isActive: !user.isActive,
                                };
                                updateUser(user.id, updatedUser);
                                loadUsers();
                              }}
                              className={`px-3 py-1 text-xs rounded-full ${
                                user.isActive
                                  ? "bg-red-100 text-red-800 hover:bg-red-200"
                                  : "bg-green-100 text-green-800 hover:bg-green-200"
                              }`}
                            >
                              {user.isActive ? "Deactivate" : "Activate"}
                            </button>
                            <button
                              onClick={() => {
                                if (
                                  confirm(
                                    "Are you sure you want to delete this user?"
                                  )
                                ) {
                                  deleteUser(user.id);
                                  loadUsers();
                                }
                              }}
                              className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-800 hover:bg-red-200"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        {/* Create User Modal */}
        {showCreateUser && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowCreateUser(false);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setShowCreateUser(false);
              }
            }}
            tabIndex={-1}
          >
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#0b234a]">
                  Create New User
                </h3>
                <button
                  onClick={() => setShowCreateUser(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Username Conflict Resolution */}
              {usernameConflict && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <h4 className="text-sm font-semibold text-yellow-800">
                      Username Conflict Detected
                    </h4>
                  </div>
                  <p className="text-sm text-yellow-700 mb-3">
                    The username{" "}
                    <strong>
                      {generateUsername(newUser.firstName, newUser.lastName)}
                    </strong>{" "}
                    already exists.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Suggested Username:
                      </label>
                      <div className="bg-gray-100 p-3 rounded-lg text-sm font-mono">
                        {suggestedUsername}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Or Enter Custom Username:
                      </label>
                      <input
                        type="text"
                        value={customUsername}
                        onChange={(e) => setCustomUsername(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                        placeholder="Enter custom username"
                      />
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={handleResolveUsernameConflict}
                        className="bg-[#0b234a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors min-w-[200px] justify-center"
                      >
                        Create with Custom Username
                      </button>
                      <button
                        onClick={() => {
                          setUsernameConflict(false);
                          setCustomUsername("");
                          setSuggestedUsername("");
                        }}
                        className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role *
                  </label>
                  <select
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser((prev) => ({ ...prev, role: e.target.value }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                  >
                    <option value="">Select Role</option>
                    <option value="Branch Manager">Branch Manager</option>
                    <option value="Team Lead">Team Lead</option>
                    <option value="Staff">Staff</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department *
                  </label>
                  <select
                    value={newUser.department}
                    onChange={(e) =>
                      setNewUser((prev) => ({
                        ...prev,
                        department: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                    disabled={!newUser.role}
                  >
                    <option value="">Select Department</option>
                    {newUser.role === "Branch Manager" ? (
                      <>
                        <option value="All">All</option>
                        <option value="Flight">Flight</option>
                        <option value="Bus">Bus</option>
                        <option value="Rail">Rail</option>
                        <option value="Visa">Visa</option>
                        <option value="Contact">Contact</option>
                      </>
                    ) : (
                      <>
                        <option value="Flight">Flight</option>
                        <option value="Bus">Bus</option>
                        <option value="Rail">Rail</option>
                        <option value="Visa">Visa</option>
                        <option value="Contact">Contact</option>
                      </>
                    )}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={newUser.firstName}
                    onChange={(e) =>
                      setNewUser((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={newUser.lastName}
                    onChange={(e) =>
                      setNewUser((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={newUser.phone}
                    onChange={(e) =>
                      setNewUser((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                    placeholder="Enter phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Security Question
                  </label>
                  <select
                    value={newUser.securityQuestion}
                    onChange={(e) =>
                      setNewUser((prev) => ({
                        ...prev,
                        securityQuestion: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                  >
                    <option value="">Select Security Question</option>
                    {securityQuestions.map((q) => (
                      <option key={q.id} value={q.question}>
                        {q.question}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Security Answer
                  </label>
                  <input
                    type="text"
                    value={newUser.securityAnswer}
                    onChange={(e) =>
                      setNewUser((prev) => ({
                        ...prev,
                        securityAnswer: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                    placeholder="Enter security answer"
                  />
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <button
                  onClick={handleCreateUser}
                  className="flex-1 bg-[#0b234a] text-white py-3 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors"
                >
                  Create User
                </button>
                <button
                  onClick={() => setShowCreateUser(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Password Change Modal */}
        <PasswordChangeModal
          isOpen={showPasswordChange}
          onClose={() => setShowPasswordChange(false)}
          userId={userId}
          onSuccess={handlePasswordChangeSuccess}
          isFirstLogin={
            localStorage.getItem("requirePasswordChange") === "true"
          }
        />

        {/* Ticket Management Section */}
        {showTickets && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#0b234a]">
                Ticket Management - G2C & B2C Requests
              </h3>
            </div>

            {/* Ticket Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Total Tickets</p>
                <p className="text-2xl font-bold text-blue-600">
                  {getTicketStats().total}
                </p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">New</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {getTicketStats().new}
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-purple-600">
                  {getTicketStats().inProgress}
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Resolved</p>
                <p className="text-2xl font-bold text-green-600">
                  {getTicketStats().resolved}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Today</p>
                <p className="text-2xl font-bold text-gray-600">
                  {getTicketStats().today}
                </p>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input
                type="text"
                placeholder="Search tickets..."
                value={ticketSearch}
                onChange={(e) => setTicketSearch(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
              />
              <select
                value={ticketFilter}
                onChange={(e) => setTicketFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="G2C">G2C Only</option>
                <option value="B2C">B2C Only</option>
              </select>
            </div>

            {/* Tickets Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ticket ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {getFilteredTickets().map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {ticket.id}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            ticket.type === "G2C"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {ticket.type}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {ticket.service}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <div>{ticket.name}</div>
                        <div className="text-xs text-gray-500">
                          {ticket.phone}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <select
                          value={ticket.status}
                          onChange={(e) =>
                            handleTicketStatusChange(
                              ticket.id,
                              e.target.value as Ticket["status"]
                            )
                          }
                          className={`px-2 py-1 text-xs font-semibold rounded-full border-0 ${
                            ticket.status === "New"
                              ? "bg-yellow-100 text-yellow-800"
                              : ticket.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : ticket.status === "Resolved"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Resolved">Resolved</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(ticket.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => {
                            setSelectedTicket(ticket);
                            setShowTicketModal(true);
                          }}
                          className="text-[#0b234a] hover:text-[#1e3a5f] font-medium"
                        >
                          <Eye className="w-4 h-4 inline" /> View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {getFilteredTickets().length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No tickets found
              </div>
            )}
          </div>
        )}

        {/* Ticket Detail Modal */}
        {showTicketModal && selectedTicket && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="bg-white rounded-xl p-6 w-full max-w-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Ticket Details - {selectedTicket.id}
                </h3>
                <button
                  onClick={() => {
                    setShowTicketModal(false);
                    setSelectedTicket(null);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Type</p>
                  <p className="text-sm text-gray-900">{selectedTicket.type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Service</p>
                  <p className="text-sm text-gray-900">
                    {selectedTicket.service}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Customer Name
                  </p>
                  <p className="text-sm text-gray-900">{selectedTicket.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-sm text-gray-900">
                    {selectedTicket.phone}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-sm text-gray-900">
                    {selectedTicket.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <p className="text-sm text-gray-900">
                    {selectedTicket.status}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Created</p>
                  <p className="text-sm text-gray-900">
                    {new Date(selectedTicket.createdAt).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Last Updated
                  </p>
                  <p className="text-sm text-gray-900">
                    {new Date(selectedTicket.updatedAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Message
                </p>
                <p className="text-sm text-gray-900 bg-gray-50 p-4 rounded-lg">
                  {selectedTicket.message}
                </p>
              </div>

              {/* Comments Section */}
              <div className="mb-6">
                <h4 className="text-md font-semibold text-gray-900 mb-3">
                  Comments ({selectedTicket.comments.length})
                </h4>
                <div className="space-y-3 max-h-60 overflow-y-auto mb-4">
                  {selectedTicket.comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {comment.author}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(comment.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{comment.message}</p>
                    </div>
                  ))}
                  {selectedTicket.comments.length === 0 && (
                    <p className="text-sm text-gray-500 text-center py-4">
                      No comments yet
                    </p>
                  )}
                </div>

                {/* Add Comment */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={ticketComment}
                    onChange={(e) => setTicketComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                  />
                  <button
                    onClick={handleAddTicketComment}
                    className="bg-[#0b234a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors min-w-[100px] justify-center"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setShowTicketModal(false);
                    setSelectedTicket(null);
                  }}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Comment Modal */}
        {showCommentModal && selectedQuery && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeCommentModal();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                closeCommentModal();
              }
            }}
            tabIndex={-1}
          >
            <div className="bg-white rounded-lg p-6 max-w-md mx-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Add Comment
                </h3>
                <button
                  onClick={closeCommentModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Action Type
                </label>
                <select
                  value={commentAction}
                  onChange={(e) => setCommentAction(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                >
                  <option value="">Select Action</option>
                  <option value="Progress Update">Progress Update</option>
                  <option value="Status Change">Status Change</option>
                  <option value="Customer Contact">Customer Contact</option>
                  <option value="Issue Resolution">Issue Resolution</option>
                  <option value="General Comment">General Comment</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comment
                </label>
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                  rows={4}
                  placeholder="Enter your comment..."
                />
              </div>

              {/* Manual Close Button - Backup */}
              <div className="mb-4 text-center">
                <button
                  onClick={closeCommentModal}
                  className="text-sm text-red-600 hover:text-red-800 underline"
                >
                  Close Modal (Backup)
                </button>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleCommentSubmit}
                  className="flex-1 bg-[#0b234a] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors"
                >
                  Add Comment
                </button>
                <button
                  onClick={closeCommentModal}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Location Tracking Section */}
        {showLocationTracking && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#0b234a]">
                Location-Based Service Tracking
              </h3>
              <div className="text-sm text-gray-600">
                Track service searches within 100KM radius
              </div>
            </div>

            <LocationNotificationDashboard />
          </div>
        )}

        {/* Queries Section */}
        {showQueries && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#0b234a]">
                G2C & B2C Service Queries
              </h3>
              <div className="text-sm text-gray-600">
                Manage customer service requests and consultations
              </div>
            </div>

            {/* Query Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-600">
                      Total Queries
                    </p>
                    <p className="text-2xl font-bold text-blue-600">
                      {queries.length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-600">
                      Resolved
                    </p>
                    <p className="text-2xl font-bold text-green-600">
                      {queries.filter((q) => q.status === "Resolved").length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Clock className="w-8 h-8 text-yellow-600" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-yellow-600">
                      {queries.filter((q) => q.status === "Pending").length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-600">Urgent</p>
                    <p className="text-2xl font-bold text-red-600">
                      {queries.filter((q) => q.priority === "High").length}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search queries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Closed">Closed</option>
              </select>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Types</option>
                <option value="G2C">G2C Services</option>
                <option value="B2C">B2C Services</option>
                <option value="Travel">Travel</option>
                <option value="General">General</option>
              </select>
            </div>

            {/* Queries List */}
            <div className="space-y-4">
              {filteredQueries.length === 0 ? (
                <div className="text-center py-8">
                  <MessageSquare className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">
                    No queries found matching your filters
                  </p>
                </div>
              ) : (
                filteredQueries.map((query) => (
                  <div
                    key={query.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => {
                      setSelectedQuery(query);
                      setShowModal(true);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              query.status === "Resolved"
                                ? "bg-green-100 text-green-800"
                                : query.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : query.status === "In Progress"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {query.status}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              query.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : query.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {query.priority} Priority
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {query.type}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {query.subject}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {query.message}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>From: {query.name}</span>
                          <span>Email: {query.email}</span>
                          <span>Phone: {query.phone}</span>
                          <span>
                            Date:{" "}
                            {new Date(query.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">
                          {new Date(query.timestamp).toLocaleDateString()}
                        </span>
                        <Eye className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
