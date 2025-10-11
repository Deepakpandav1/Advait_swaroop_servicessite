import { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import {
  Lock,
  Eye,
  EyeOff,
  Shield,
  Users,
  Settings,
  HelpCircle,
  Smartphone,
  QrCode,
} from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import {
  authenticateUser,
  getUsers,
  clearSession,
  updateActivity,
  generateGoogleAuthSecret,
  generateQRCodeUrl,
  verifyGoogleAuthCode,
  enableGoogleAuth,
  generateCurrentTOTPCode,
} from "../../utils/passwordManager";
import ForgetPasswordModal from "../../components/ForgetPasswordModal";
import { QRCodeSVG } from "qrcode.react";

export default function UnifiedLoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
    department: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [showGoogleAuth, setShowGoogleAuth] = useState(false);
  const [googleAuthCode, setGoogleAuthCode] = useState("");
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [googleAuthSecret, setGoogleAuthSecret] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any existing session on page load
    clearSession();

    // Check for page visibility changes (browser close/tab switch)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden, clear session after 5 minutes
        setTimeout(() => {
          clearSession();
        }, 5 * 60 * 1000);
      }
    };

    const handleBeforeUnload = () => {
      clearSession();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const user = authenticateUser(
        formData.username,
        formData.password,
        formData.role,
        formData.department
      );

      if (user) {
        // Store admin session with role
        localStorage.setItem("adminAuthenticated", "true");
        localStorage.setItem("adminRole", formData.role);
        localStorage.setItem("adminDepartment", formData.department);
        localStorage.setItem("adminUsername", formData.username);
        localStorage.setItem("adminUserId", user.id);
        localStorage.setItem("adminLoginTime", new Date().toISOString());

        // Check if first login
        if (user.isFirstLogin) {
          localStorage.setItem("requirePasswordChange", "true");
        }

        // Check if Google Auth is required (Team Lead and Staff only)
        if (user.role === "Team Lead" || user.role === "Staff") {
          if (!user.isGoogleAuthEnabled || !user.googleAuthSecret) {
            setError(
              "2FA setup required for your role. Please contact administrator."
            );
            setIsLoading(false);
            return;
          }
          setCurrentUser(user);
          setShowGoogleAuth(true);
          setIsLoading(false);
          return;
        }

        // If no Google Auth, proceed to dashboard
        navigate({ to: "/admin/enhanced-dashboard" });
      } else {
        setError(
          "Invalid credentials. Please check username, password, role, and department."
        );
        setIsLoading(false);
      }
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleGoogleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (currentUser && currentUser.googleAuthSecret) {
        console.log("Verifying code:", googleAuthCode);
        console.log("Secret:", currentUser.googleAuthSecret);
        console.log(
          "Current expected code:",
          generateCurrentTOTPCode(currentUser.googleAuthSecret)
        );

        const isValid = verifyGoogleAuthCode(
          currentUser.googleAuthSecret,
          googleAuthCode
        );

        console.log("Verification result:", isValid);

        if (isValid) {
          navigate({ to: "/admin/enhanced-dashboard" });
        } else {
          setError(
            `Invalid Google Authenticator code. Expected: ${generateCurrentTOTPCode(
              currentUser.googleAuthSecret
            )}`
          );
        }
      } else {
        setError("Google Authenticator not configured for this user.");
      }
    } catch (error: any) {
      console.error("Google Auth error:", error);
      setError("Google Authenticator verification failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetupGoogleAuth = () => {
    if (currentUser) {
      const secret = generateGoogleAuthSecret();
      setGoogleAuthSecret(secret);
      setShowQRCode(true);
    }
  };

  const handleEnableGoogleAuth = () => {
    if (currentUser && googleAuthSecret) {
      enableGoogleAuth(currentUser.id, googleAuthSecret);
      setShowQRCode(false);
      setShowGoogleAuth(false);
      navigate({ to: "/admin/enhanced-dashboard" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role: string) => {
    setFormData((prev) => ({ ...prev, role, department: "" }));
  };

  const getDepartmentsForRole = (role: string) => {
    const departmentMap: { [key: string]: string[] } = {
      "Branch Manager": ["All", "Flight", "Bus", "Rail", "Visa", "Contact"],
      "Team Lead": ["Flight", "Bus", "Rail", "Visa", "Contact"],
      Staff: ["Flight", "Bus", "Rail", "Visa", "Contact"],
    };
    return departmentMap[role] || [];
  };

  return (
    <div className="min-h-screen bg-white [background-image:radial-gradient(#e6e7e9_10px,transparent_10px)] [background-size:16px_16px] bg-fixed">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb
          items={[
            { name: "Admin", href: "/admin" },
            { name: "Login", href: "/admin/login" },
          ]}
        />
      </div>
      <div className="flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-72 mx-auto mb-4 bg-[#0b234a] rounded-4xl">
                <img
                  src="/logo.png"
                  alt="Advait Swaroop Services"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-gray-600">Employee Access Portal</p>
            </div>

            {!showGoogleAuth ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Role
                  </label>
                  <div className="relative">
                    <Users className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      name="role"
                      value={formData.role}
                      onChange={(e) => handleRoleChange(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent appearance-none"
                      required
                    >
                      <option value="">Select Role</option>
                      <option value="Branch Manager">Branch Manager</option>
                      <option value="Team Lead">Team Lead</option>
                      <option value="Staff">Staff</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <div className="relative">
                    <Settings className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent appearance-none"
                      required
                      disabled={!formData.role}
                    >
                      <option value="">Select Department</option>
                      {getDepartmentsForRole(formData.role).map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <Settings className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Enter username"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter password"
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#0b234a] text-white py-3 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Authenticating..." : "Access Portal"}
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <Smartphone className="w-12 h-12 text-[#0b234a] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#0b234a] mb-2">
                    Google Authenticator Required
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Enter the 6-digit code from your Google Authenticator app
                  </p>
                </div>

                {!showQRCode ? (
                  <form onSubmit={handleGoogleAuthSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Authentication Code
                      </label>
                      <input
                        type="text"
                        value={googleAuthCode}
                        onChange={(e) => setGoogleAuthCode(e.target.value)}
                        placeholder="Enter 6-digit code"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent text-center text-lg tracking-widest"
                        maxLength={6}
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-red-600 text-sm">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#0b234a] text-white py-3 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Verifying..." : "Verify Code"}
                    </button>

                    <button
                      type="button"
                      onClick={handleSetupGoogleAuth}
                      className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Setup Google Authenticator
                    </button>
                  </form>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                      {googleAuthSecret && currentUser && (
                        <QRCodeSVG
                          value={generateQRCodeUrl(
                            currentUser,
                            googleAuthSecret
                          )}
                          size={200}
                          level="H"
                          className="mx-auto"
                        />
                      )}
                      <p className="text-sm text-gray-600 mb-2 mt-4">
                        Scan this QR code with Google Authenticator
                      </p>
                      <p className="text-xs text-gray-500 font-mono bg-gray-100 p-2 rounded border">
                        Secret Key: {googleAuthSecret}
                      </p>
                      <p className="text-xs text-blue-600 font-mono bg-blue-50 p-2 rounded border mt-2">
                        Current Code:{" "}
                        {googleAuthSecret
                          ? generateCurrentTOTPCode(googleAuthSecret)
                          : "N/A"}
                      </p>
                    </div>

                    <button
                      onClick={handleEnableGoogleAuth}
                      className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Enable Google Authenticator
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowForgetPassword(true)}
                className="text-[#0b234a] hover:text-[#E6B837] transition-colors flex items-center justify-center space-x-2"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Forgot Password?</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Forget Password Modal */}
      <ForgetPasswordModal
        isOpen={showForgetPassword}
        onClose={() => setShowForgetPassword(false)}
        onSuccess={() => {
          setShowForgetPassword(false);
          setError("");
        }}
      />
    </div>
  );
}
