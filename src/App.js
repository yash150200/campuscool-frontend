// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// // import "./index.css"; // ✅ use index.css for global + layout styles

// // // Pages
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import Home from "./pages/Home";
// // import Feed from "./pages/Feed";
// // import Events from "./pages/Events";
// // import Materials from "./pages/Materials";
// // import Profile from "./pages/Profile";
// // import Attendance from "./pages/Attendance";
// // import AIChat from "./pages/AIChat";
// // import Fees from "./pages/Fees";
// // import Result from "./pages/Result";
// // import CareerChoice from "./pages/CareerChoice";
// // import Achievements from "./pages/Achievements";
// // import Timetable from "./pages/Timetable";
// // import QuizPage from "./pages/QuizPage";
// // import AdminPage from "./pages/Admin";

// // // Components
// // import Sidebar from "./components/Sidebar";

// // // Auth context
// // import { AuthProvider, useAuth } from "./context/AuthContext";

// // // ✅ Protected Route
// // const ProtectedRoute = ({ children }) => {
// //   const { user } = useAuth();
// //   return user ? children : <Navigate to="/login" replace />;
// // };

// // const AppLayout = () => {
// //   const { user } = useAuth();
// //   const location = useLocation();
// //   const hideSidebar = ["/login", "/register"].includes(location.pathname);

// //   return (
// //     <div className="app-container">
// //       {/* Sidebar */}
// //       {user && !hideSidebar && <Sidebar />}

// //       {/* Main Content */}
// //       <div className="main-content">
// //         <Routes>
// //           {/* Public */}
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/register" element={<Register />} />

// //           {/* Student Routes */}
// //           <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
// //           <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
// //           <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
// //           <Route path="/materials" element={<ProtectedRoute><Materials /></ProtectedRoute>} />
// //           <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
// //           <Route path="/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
// //           <Route path="/fees" element={<ProtectedRoute><Fees /></ProtectedRoute>} />
// //           <Route path="/result" element={<ProtectedRoute><Result /></ProtectedRoute>} />
// //           <Route path="/career-choice" element={<ProtectedRoute><CareerChoice /></ProtectedRoute>} />
// //           <Route path="/achievements" element={<ProtectedRoute><Achievements /></ProtectedRoute>} />
// //           <Route path="/timetable" element={<ProtectedRoute><Timetable /></ProtectedRoute>} />
// //           <Route path="/quiz" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />

// //           {/* Admin */}
// //           <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />

// //           {/* AI Chat */}
// //           <Route path="/ai-chat" element={<ProtectedRoute><AIChat /></ProtectedRoute>} />

// //           {/* Fallback */}
// //           <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
// //         </Routes>
// //       </div>
// //     </div>
// //   );
// // };

// // const App = () => (
// //   <AuthProvider>
// //     <Router>
// //       <AppLayout />
// //     </Router>
// //   </AuthProvider>
// // );

// // export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import "./index.css"; // ✅ Global + layout styles

// // Pages
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
// import Feed from "./pages/Feed";
// import Events from "./pages/Events";
// import Materials from "./pages/Materials";
// import Profile from "./pages/Profile";
// import Attendance from "./pages/Attendance";
// import AIChat from "./pages/AIChat";
// import Fees from "./pages/Fees";
// import Result from "./pages/Result";
// import CareerChoice from "./pages/CareerChoice";
// import Achievements from "./pages/Achievements";
// import Timetable from "./pages/Timetable";
// import QuizPage from "./pages/QuizPage";
// import AdminPage from "./pages/Admin";

// // Components
// import Sidebar from "./components/Sidebar";

// // Auth context
// import { AuthProvider, useAuth } from "./context/AuthContext";

// // ✅ Protected Route
// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" replace />;
// };

// const AppLayout = () => {
//   const { user } = useAuth();
//   const location = useLocation();
//   const hideSidebar = ["/login", "/register"].includes(location.pathname);

//   return (
//     <div className="app-container">
//       {/* Sidebar */}
//       {user && !hideSidebar && <Sidebar />}

//       {/* Main Content */}
//       <div className="main-content">
//         <Routes>
//           {/* Public */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Student Routes */}
//           <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//           <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
//           <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
//           <Route path="/materials" element={<ProtectedRoute><Materials /></ProtectedRoute>} />
//           <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//           <Route path="/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
//           <Route path="/fees" element={<ProtectedRoute><Fees /></ProtectedRoute>} />
//           <Route path="/result" element={<ProtectedRoute><Result /></ProtectedRoute>} />
//           <Route path="/career-choice" element={<ProtectedRoute><CareerChoice /></ProtectedRoute>} />
//           <Route path="/achievements" element={<ProtectedRoute><Achievements /></ProtectedRoute>} />
//           <Route path="/timetable" element={<ProtectedRoute><Timetable /></ProtectedRoute>} />
//           <Route path="/quiz" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />

//           {/* Admin */}
//           <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />

//           {/* AI Chat */}
//           <Route path="/ai-chat" element={<ProtectedRoute><AIChat /></ProtectedRoute>} />

//           {/* Fallback */}
//           <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// const App = () => (
//   <AuthProvider>
//     <Router>
//       <AppLayout />
//     </Router>
//   </AuthProvider>
// );

// export default App;
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./index.css"; // ✅ Global + layout styles

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Events from "./pages/Events";
import Materials from "./pages/Materials";
import Profile from "./pages/Profile";
import Attendance from "./pages/Attendance";
import AIChat from "./pages/AIChat";
import Fees from "./pages/Fees";
import Result from "./pages/Result";
import CareerChoice from "./pages/CareerChoice";
import Achievements from "./pages/Achievements";
import Timetable from "./pages/Timetable";
import QuizPage from "./pages/QuizPage";
import AdminPage from "./pages/Admin";

// Components
import Sidebar from "./components/Sidebar";
import DarkModeToggle from "./components/DarkModeToggle"; // ✅ New toggle

// Auth context
import { AuthProvider, useAuth } from "./context/AuthContext";
import { DarkModeProvider } from "./context/DarkModeContext"; // ✅ Dark Mode Context

// ✅ Protected Route
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

const AppLayout = () => {
  const { user } = useAuth();
  const location = useLocation();
  const hideSidebar = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="app-container">
      {/* Sidebar */}
      {user && !hideSidebar && <Sidebar />}

      {/* Dark Mode Toggle - always visible when logged in */}
      {user && <DarkModeToggle />}

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          {/* Public */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Student Routes */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
          <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
          <Route path="/materials" element={<ProtectedRoute><Materials /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
          <Route path="/fees" element={<ProtectedRoute><Fees /></ProtectedRoute>} />
          <Route path="/result" element={<ProtectedRoute><Result /></ProtectedRoute>} />
          <Route path="/career-choice" element={<ProtectedRoute><CareerChoice /></ProtectedRoute>} />
          <Route path="/achievements" element={<ProtectedRoute><Achievements /></ProtectedRoute>} />
          <Route path="/timetable" element={<ProtectedRoute><Timetable /></ProtectedRoute>} />
          <Route path="/quiz" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />

          {/* Admin */}
          <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />

          {/* AI Chat */}
          <Route path="/ai-chat" element={<ProtectedRoute><AIChat /></ProtectedRoute>} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <AuthProvider>
    <DarkModeProvider>
      <Router>
        <AppLayout />
      </Router>
    </DarkModeProvider>
  </AuthProvider>
);

export default App;
