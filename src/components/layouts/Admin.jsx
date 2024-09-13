
import { Outlet, useNavigate } from "react-router-dom";
import Navadmin from "./Navadmin";
import { useAuth } from "../../store/auth";
import { useEffect } from "react";

const Admin = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      
      <Navadmin />
        
        
      
      <Outlet />
    </>
  );
};

export default Admin;
