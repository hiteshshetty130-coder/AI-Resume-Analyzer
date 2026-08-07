
import { Navigate } from "react-router-dom";

import React from 'react'

function ProtectedRoutes({children}) {
  const user=localStorage.getItem("userEmail");
  return user?children:<Navigate to="/login"/>;
}

export default ProtectedRoutes