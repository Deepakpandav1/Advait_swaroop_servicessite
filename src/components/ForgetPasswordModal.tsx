import { useState } from "react";
import { Lock, Eye, EyeOff, CheckCircle, X, HelpCircle } from "lucide-react";
import {
  resetPasswordWithSecurity,
  getUsers,
  securityQuestions,
} from "../utils/passwordManager";

interface ForgetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ForgetPasswordModal({
  isOpen,
  onClose,
  onSuccess,
}: ForgetPasswordModalProps) {
  const [step, setStep] = useState(1); // 1: User Info, 2: Security Question, 3: New Password
  const [formData, setFormData] = useState({
    username: "",
    role: "",
    securityAnswer: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    new: false,
    confirm: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!formData.username || !formData.role) {
      setErrors({ username: "Username and role are required" });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const users = getUsers();
      const foundUser = users.find(
        (u) =>
          u.username === formData.username &&
          u.role === formData.role &&
          u.isActive
      );

      if (foundUser) {
        setUser(foundUser);
        setStep(2);
      } else {
        setErrors({ username: "User not found with the provided credentials" });
      }
    } catch (error) {
      setErrors({ username: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!formData.securityAnswer) {
      setErrors({ securityAnswer: "Security answer is required" });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (
        user.securityAnswer.toLowerCase() ===
        formData.securityAnswer.toLowerCase()
      ) {
        setStep(3);
      } else {
        setErrors({ securityAnswer: "Incorrect security answer" });
      }
    } catch (error) {
      setErrors({ securityAnswer: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleStep3 = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!formData.newPassword) {
      setErrors({ newPassword: "New password is required" });
      return;
    }

    if (formData.newPassword.length < 6) {
      setErrors({ newPassword: "Password must be at least 6 characters" });
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const success = resetPasswordWithSecurity(
        formData.username,
        formData.role,
        formData.securityAnswer,
        formData.newPassword
      );

      if (success) {
        onSuccess();
        onClose();
        // Reset form
        setFormData({
          username: "",
          role: "",
          securityAnswer: "",
          newPassword: "",
          confirmPassword: "",
        });
        setStep(1);
        setUser(null);
        setErrors({});
      } else {
        setErrors({ newPassword: "Failed to reset password" });
      }
    } catch (error) {
      setErrors({ newPassword: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const resetModal = () => {
    setStep(1);
    setFormData({
      username: "",
      role: "",
      securityAnswer: "",
      newPassword: "",
      confirmPassword: "",
    });
    setUser(null);
    setErrors({});
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#0b234a] rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-[#E6B837]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b234a]">
                {step === 1 && "Forgot Password"}
                {step === 2 && "Security Question"}
                {step === 3 && "Set New Password"}
              </h3>
              <p className="text-sm text-gray-600">
                {step === 1 && "Enter your username and role"}
                {step === 2 && "Answer your security question"}
                {step === 3 && "Create a new password"}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= stepNum
                      ? "bg-[#0b234a] text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {stepNum}
                </div>
                {stepNum < 3 && (
                  <div
                    className={`w-8 h-1 mx-2 ${
                      step > stepNum ? "bg-[#0b234a]" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: User Information */}
        {step === 1 && (
          <form onSubmit={handleStep1} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter your username"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent ${
                  errors.username ? "border-red-300" : "border-gray-300"
                }`}
              />
              {errors.username && (
                <p className="text-red-600 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent ${
                  errors.role ? "border-red-300" : "border-gray-300"
                }`}
              >
                <option value="">Select your role</option>
                <option value="superadmin">Super Admin</option>
                <option value="flight">Flight Admin</option>
                <option value="bus">Bus Admin</option>
                <option value="rail">Rail Admin</option>
                <option value="visa">Visa Admin</option>
                <option value="contact">Contact Admin</option>
              </select>
              {errors.role && (
                <p className="text-red-600 text-sm mt-1">{errors.role}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0b234a] text-white py-3 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Continue</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Step 2: Security Question */}
        {step === 2 && user && (
          <form onSubmit={handleStep2} className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">
                Security Question:
              </h4>
              <p className="text-sm text-blue-800">{user.securityQuestion}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Answer
              </label>
              <input
                type="text"
                name="securityAnswer"
                value={formData.securityAnswer}
                onChange={handleInputChange}
                placeholder="Enter your answer"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent ${
                  errors.securityAnswer ? "border-red-300" : "border-gray-300"
                }`}
              />
              {errors.securityAnswer && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.securityAnswer}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0b234a] text-white py-3 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Verify Answer</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Step 3: New Password */}
        {step === 3 && (
          <form onSubmit={handleStep3} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showPasswords.new ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="Enter new password"
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent ${
                    errors.newPassword ? "border-red-300" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("new")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.new ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.newPassword && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.newPassword}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showPasswords.confirm ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm new password"
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#0b234a] focus:border-transparent ${
                    errors.confirmPassword
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirm")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.confirm ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0b234a] text-white py-3 rounded-lg font-semibold hover:bg-[#1e3a5f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Resetting...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Reset Password</span>
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">
            Password Requirements:
          </h4>
          <ul className="text-xs text-blue-800 space-y-1">
            <li>• At least 6 characters long</li>
            <li>• Use a combination of letters and numbers</li>
            <li>• You will be logged out after password reset</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
