import React, { useState, useContext, useEffect } from 'react';
import InputField from '../../components/Admin/InputField';
import { AuthContext } from '../../context/AminContext/AuthContext'; // Adjust path if needed
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loginAdmin, loading, error, adminToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginAdmin(email, password);
  };

  useEffect(()=>{
// Redirect after successful login
  if (adminToken) {
    navigate('/admin/dashboard');
  }
  },[handleSubmit])
  

  return (
    <div className="flex items-center min-h-screen justify-center  bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        <InputField
          label="Email"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@example.com"
        />

        <InputField
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
