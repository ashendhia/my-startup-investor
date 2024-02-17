// ProtectedRoute.js

import { Navigate, Route, Routes } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, children  }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }

};

export default ProtectedRoute;
