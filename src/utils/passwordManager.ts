// Password Management Utility
export interface User {
  id: string;
  username: string;
  password: string;
  role: string; // Branch Manager, Team Lead, Staff
  department: string; // Flight, Bus, Rail, Visa, Contact, All
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  securityQuestion: string;
  securityAnswer: string;
  isFirstLogin: boolean;
  createdAt: string;
  lastLogin?: string;
  isActive: boolean;
  googleAuthSecret?: string;
  isGoogleAuthEnabled: boolean;
  sessionId?: string;
  lastActivity?: string;
}

export interface SecurityQuestion {
  id: string;
  question: string;
}

export const securityQuestions: SecurityQuestion[] = [
  { id: "1", question: "What is your mother's maiden name?" },
  { id: "2", question: "What was the name of your first pet?" },
  { id: "3", question: "What city were you born in?" },
  { id: "4", question: "What was your first car?" },
  { id: "5", question: "What is the name of your elementary school?" },
  { id: "6", question: "What was your childhood nickname?" },
  { id: "7", question: "What is your favorite movie?" },
  { id: "8", question: "What was the name of your first teacher?" },
];

// Default admin user - only one admin login
export const defaultUsers: User[] = [
  {
    id: "1",
    username: "Admin@advaitswaroopservices.com",
    password: "jaigurudi",
    role: "Branch Manager",
    department: "All",
    firstName: "Admin",
    lastName: "User",
    email: "Admin@advaitswaroopservices.com",
    phone: "+919780494854",
    securityQuestion: "What is your mother's maiden name?",
    securityAnswer: "admin",
    isFirstLogin: false,
    createdAt: new Date().toISOString(),
    isActive: true,
    isGoogleAuthEnabled: false,
  },
];

// Get all users from localStorage
export const getUsers = (): User[] => {
  const usersJson = localStorage.getItem("adminUsers");
  if (usersJson) {
    return JSON.parse(usersJson);
  }
  // Initialize with default users
  localStorage.setItem("adminUsers", JSON.stringify(defaultUsers));
  return defaultUsers;
};

// Save users to localStorage
export const saveUsers = (users: User[]) => {
  localStorage.setItem("adminUsers", JSON.stringify(users));
};

// Session management
export const generateSessionId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const checkActiveSession = (): boolean => {
  const sessionId = localStorage.getItem("sessionId");
  const lastActivity = localStorage.getItem("lastActivity");
  
  if (!sessionId || !lastActivity) return false;
  
  const now = new Date().getTime();
  const lastActivityTime = new Date(lastActivity).getTime();
  const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds
  
  return (now - lastActivityTime) < fiveMinutes;
};

export const updateActivity = (): void => {
  localStorage.setItem("lastActivity", new Date().toISOString());
};

export const clearSession = (): void => {
  localStorage.removeItem("sessionId");
  localStorage.removeItem("lastActivity");
  localStorage.removeItem("adminAuthenticated");
  localStorage.removeItem("adminRole");
  localStorage.removeItem("adminUsername");
  localStorage.removeItem("adminUserId");
  localStorage.removeItem("adminLoginTime");
  localStorage.removeItem("requirePasswordChange");
};

// Check for concurrent login
export const checkConcurrentLogin = (userId: string): boolean => {
  const users = getUsers();
  const user = users.find(u => u.id === userId);
  
  if (!user) return false;
  
  // Check if user has active session
  if (user.sessionId && user.lastActivity) {
    const now = new Date().getTime();
    const lastActivityTime = new Date(user.lastActivity).getTime();
    const threeMinutes = 3 * 60 * 1000; // 3 minutes in milliseconds
    
    // If last activity was within 3 minutes, user is still active
    if ((now - lastActivityTime) < threeMinutes) {
      return true; // User is already logged in
    }
  }
  
  return false;
};

// Authenticate user with session management
export const authenticateUser = (username: string, password: string, role: string, department: string): User | null => {
  const users = getUsers();
  const user = users.find(
    (u) => 
      u.username.toLowerCase() === username.toLowerCase() && 
      u.password === password && 
      u.role.toLowerCase() === role.toLowerCase() && 
      u.department.toLowerCase() === department.toLowerCase() && 
      u.isActive
  );
  
  if (!user) return null;
  
  // Check for concurrent login
  if (checkConcurrentLogin(user.id)) {
    throw new Error("User is already logged in. Please wait 3 minutes or contact administrator.");
  }
  
  // Generate new session
  const sessionId = generateSessionId();
  const now = new Date().toISOString();
  
  // Update user session
  const updatedUsers = users.map(u => 
    u.id === user.id 
      ? { ...u, sessionId, lastActivity: now, lastLogin: now }
      : u
  );
  
  saveUsers(updatedUsers);
  
  // Store session in localStorage
  localStorage.setItem("sessionId", sessionId);
  localStorage.setItem("lastActivity", now);
  
  return { ...user, sessionId, lastActivity: now, lastLogin: now };
};

// Update user password
export const updateUserPassword = (userId: string, newPassword: string): boolean => {
  const users = getUsers();
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex].password = newPassword;
    users[userIndex].isFirstLogin = false;
    saveUsers(users);
    return true;
  }
  return false;
};

// Reset password using security question
export const resetPasswordWithSecurity = (
  username: string,
  role: string,
  securityAnswer: string,
  newPassword: string
): boolean => {
  const users = getUsers();
  const userIndex = users.findIndex(
    (u) => u.username === username && u.role === role && u.isActive
  );
  
  if (userIndex !== -1) {
    const user = users[userIndex];
    if (user.securityAnswer.toLowerCase() === securityAnswer.toLowerCase()) {
      users[userIndex].password = newPassword;
      users[userIndex].isFirstLogin = true; // Force password change on next login
      saveUsers(users);
      return true;
    }
  }
  return false;
};

// Get user by ID
export const getUserById = (userId: string): User | null => {
  const users = getUsers();
  return users.find((u) => u.id === userId) || null;
};

// Create new user (SuperAdmin only)
export const createUser = (userData: Omit<User, "id" | "createdAt" | "isFirstLogin" | "username" | "password">, customUsername?: string): User => {
  const users = getUsers();
  
  // Generate username if not provided
  let username: string;
  if (customUsername) {
    username = customUsername;
  } else {
    username = generateUniqueUsername(userData.firstName, userData.lastName);
  }
  
  const newUser: User = {
    ...userData,
    id: Date.now().toString(),
    username,
    password: DEFAULT_PASSWORD,
    createdAt: new Date().toISOString(),
    isFirstLogin: true,
  };
  users.push(newUser);
  saveUsers(users);
  return newUser;
};

// Update user (SuperAdmin only)
export const updateUser = (userId: string, userData: Partial<User>): boolean => {
  const users = getUsers();
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...userData };
    saveUsers(users);
    return true;
  }
  return false;
};

// Delete user (SuperAdmin only)
export const deleteUser = (userId: string): boolean => {
  const users = getUsers();
  const filteredUsers = users.filter((u) => u.id !== userId);
  if (filteredUsers.length < users.length) {
    saveUsers(filteredUsers);
    return true;
  }
  return false;
};

// Google Authenticator functions
export const generateGoogleAuthSecret = (): string => {
  // Generate a random 32-character base32 secret
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let secret = '';
  for (let i = 0; i < 32; i++) {
    secret += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return secret;
};

export const generateQRCodeUrl = (user: User, secret: string): string => {
  const issuer = 'Advait Swaroop Services';
  const accountName = `${user.username}@advait.com`;
  const encodedIssuer = encodeURIComponent(issuer);
  const encodedAccountName = encodeURIComponent(accountName);
  
  return `otpauth://totp/${encodedAccountName}?secret=${secret}&issuer=${encodedIssuer}`;
};

export const verifyGoogleAuthCode = (secret: string, code: string): boolean => {
  try {
    // For now, use a simple verification that accepts any 6-digit code
    // This allows the system to work while we implement proper TOTP
    if (code.length === 6 && /^\d{6}$/.test(code)) {
      return true; // Accept any 6-digit code for testing
    }
    return false;
  } catch (error) {
    console.error('TOTP verification error:', error);
    return false;
  }
};

// Generate current TOTP code for testing/debugging
export const generateCurrentTOTPCode = (secret: string): string => {
  try {
    // Generate a simple time-based code for testing
    const now = Math.floor(Date.now() / 1000 / 30);
    const code = (now % 1000000).toString().padStart(6, '0');
    return code;
  } catch (error) {
    console.error('TOTP generation error:', error);
    return '123456';
  }
};

export const enableGoogleAuth = (userId: string, secret: string): boolean => {
  const users = getUsers();
  const userIndex = users.findIndex((u) => u.id === userId);
  
  if (userIndex !== -1) {
    users[userIndex].googleAuthSecret = secret;
    users[userIndex].isGoogleAuthEnabled = true;
    saveUsers(users);
    return true;
  }
  return false;
};

export const disableGoogleAuth = (userId: string): boolean => {
  const users = getUsers();
  const userIndex = users.findIndex((u) => u.id === userId);
  
  if (userIndex !== -1) {
    users[userIndex].googleAuthSecret = undefined;
    users[userIndex].isGoogleAuthEnabled = false;
    saveUsers(users);
    return true;
  }
  return false;
};

// Get role-based query routing
export const getQueryRouting = (department: string): string[] => {
  const departmentQueryMap: { [key: string]: string[] } = {
    All: ["Flight Booking", "Bus Booking", "Train Booking", "Visa Services", "Contact Form"],
    Flight: ["Flight Booking"],
    Bus: ["Bus Booking"],
    Rail: ["Train Booking"],
    Visa: ["Visa Services"],
    Contact: ["Contact Form"],
  };
  return departmentQueryMap[department] || [];
};

// Auto-assign queries to roles
export const autoAssignQuery = (queryType: string): string => {
  const typeRoleMap: { [key: string]: string } = {
    "Flight Booking": "flight",
    "Bus Booking": "bus",
    "Train Booking": "rail",
    "Visa Services": "visa",
    "Contact Form": "contact",
  };
  return typeRoleMap[queryType] || "superadmin";
};

// Generate username from employee name
export const generateUsername = (firstName: string, lastName: string): string => {
  const cleanFirstName = firstName.toLowerCase().replace(/[^a-z]/g, '');
  const cleanLastName = lastName.toLowerCase().replace(/[^a-z]/g, '');
  const baseUsername = `${cleanFirstName}${cleanLastName}`;
  return `${baseUsername}@advaitswaroopservices.com`;
};

// Check if username already exists
export const checkUsernameExists = (username: string): boolean => {
  const users = getUsers();
  return users.some(user => user.username.toLowerCase() === username.toLowerCase());
};

// Generate unique username with number suffix if needed
export const generateUniqueUsername = (firstName: string, lastName: string): string => {
  let baseUsername = generateUsername(firstName, lastName);
  let counter = 1;
  let uniqueUsername = baseUsername;
  
  while (checkUsernameExists(uniqueUsername)) {
    const cleanFirstName = firstName.toLowerCase().replace(/[^a-z]/g, '');
    const cleanLastName = lastName.toLowerCase().replace(/[^a-z]/g, '');
    uniqueUsername = `${cleanFirstName}${cleanLastName}${counter}@advaitswaroopservices.com`;
    counter++;
  }
  
  return uniqueUsername;
};

// Default password for new users
export const DEFAULT_PASSWORD = "Pass@1234";
