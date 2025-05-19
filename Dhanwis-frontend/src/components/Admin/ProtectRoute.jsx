import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AminContext/AuthContext';

const PrivateRoute = ({ children }) => {
  const { adminToken } = useContext(AuthContext);

  return adminToken ?  <Outlet />  : <Navigate to="/admin" />;
};

export default PrivateRoute;