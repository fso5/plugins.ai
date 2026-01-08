import { useState } from 'react';
import { login } from '../api/auth';

/**
 * LoginForm Component
 * From spec: Frontend > Login Form
 *
 * States: idle, loading, error
 * Elements: email input, password input, submit button, links
 * Behavior: validate → call API → handle response
 */

export function LoginForm({ onSuccess, redirectTo = '/dashboard' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [state, setState] = useState('idle'); // idle | loading | error

  const [fieldErrors, setFieldErrors] = useState({});

  const validateEmail = (value) => {
    if (!value) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
    return null;
  };

  const validatePassword = (value) => {
    if (!value) return 'Password is required';
    return null;
  };

  const handleBlur = (field, value) => {
    const validator = field === 'email' ? validateEmail : validatePassword;
    const error = validator(value);
    setFieldErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate all fields
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setFieldErrors({ email: emailError, password: passwordError });
      return;
    }

    setState('loading');

    try {
      const { token, user } = await login({ email, password });

      // Store token (spec: JWT in localStorage or httpOnly cookie)
      localStorage.setItem('token', token);

      // Success flow: redirect to dashboard
      if (onSuccess) {
        onSuccess(user);
      } else {
        window.location.href = redirectTo;
      }
    } catch (err) {
      // Error flow: show message, clear password, stay on page
      setState('error');
      setError(err.message || 'Email or password is incorrect');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[400px] space-y-6">
      {/* Heading */}
      <h1 className="text-2xl font-semibold text-center">Welcome back</h1>

      {/* Error alert */}
      {state === 'error' && error && (
        <div className="p-3 text-sm text-red-700 bg-red-100 rounded">
          {error}
        </div>
      )}

      {/* Email input */}
      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => handleBlur('email', e.target.value)}
          autoComplete="email"
          required
          disabled={state === 'loading'}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {fieldErrors.email && (
          <p className="text-sm text-red-600">{fieldErrors.email}</p>
        )}
      </div>

      {/* Password input */}
      <div className="space-y-1">
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={(e) => handleBlur('password', e.target.value)}
          autoComplete="current-password"
          required
          disabled={state === 'loading'}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {fieldErrors.password && (
          <p className="text-sm text-red-600">{fieldErrors.password}</p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === 'loading' ? 'Logging in...' : 'Log In'}
      </button>

      {/* Links */}
      <div className="text-center text-sm space-y-2">
        <a href="/forgot-password" className="text-blue-600 hover:underline">
          Forgot password?
        </a>
        <p className="text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </form>
  );
}
