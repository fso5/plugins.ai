/**
 * Auth API
 * From spec: POST /auth/login
 */

export async function login({ email, password }) {
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw {
      status: response.status,
      error: data.error,
      message: data.message,
    };
  }

  return data; // { token, user }
}
