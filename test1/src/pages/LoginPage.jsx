import { LoginForm } from '../components/LoginForm';

/**
 * LoginPage
 * From spec: Frontend > Page
 *
 * Route: /login
 * Title: "Log In"
 * Layout: centered, single column
 * Contains: Login Form
 */

export function LoginPage() {
  const handleSuccess = (user) => {
    console.log('Login successful:', user);
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-[400px]">
        <LoginForm onSuccess={handleSuccess} />
      </div>
    </div>
  );
}
