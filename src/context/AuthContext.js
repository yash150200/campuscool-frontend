// // import React, { createContext, useContext, useState, useEffect } from "react";

// // // Create the AuthContext
// // const AuthContext = createContext();

// // // AuthProvider component to wrap your app
// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   // Check token on initial load
// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       // You could decode the token or fetch user data here
// //       setUser({ token });
// //     }
// //   }, []);

// //   // Login function
// //   const login = (token) => {
// //     localStorage.setItem("token", token);
// //     setUser({ token });
// //   };

// //   // Logout function
// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     setUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // // Custom hook for consuming auth context
// // export const useAuth = () => useContext(AuthContext);
// import React, { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // On initial load, get user + token from localStorage
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const userData = localStorage.getItem("user");
//     if (token && userData) {
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   // Login function
//   const login = (userData, token) => {
//     localStorage.setItem("token", token);
//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook
// export const useAuth = () => useContext(AuthContext);
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // On initial load, get user + token from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Login function
  const login = (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
