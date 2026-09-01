
import { Navigate } from "react-router-dom";

import React from 'react'

//Function or code to make sure user doesnot enters other pages without loging in---
function ProtectedRoutes({children}) {
  const user=localStorage.getItem("userEmail");
  return user?children:<Navigate to="/login"/>;
}

export default ProtectedRoutes