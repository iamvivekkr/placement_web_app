//context api (token use bar bar likhna makes easy by thi api)
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || ""
  );
  const authorizationToken = `Bearer ${token}`;

  //reuseable function making
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  // Function to store user data in local storage
  const storeUserDataInLS = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  //let isLoggedIn = !!token;

  //tackle logout functionality
  const LogoutUser = () => {
    setToken("");
    setUser("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  //JWT Authentication to get user data who is currently login
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        //console.log("user data ", data.userData);
        //setUser(data.userData);
        storeUserDataInLS(data.userData);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  useEffect(() => {
    if (token) {
      userAuthentication();
    }
    //eslint-disable-next-line
  }, [token]);

  let isLoggedIn = !!token;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const authContextValue =  useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Povider");
    }
    return authContextValue;
}

