// // // import axios from "axios";

// // // const API = axios.create({
// // //   baseURL: "http://localhost:5000/api",
// // // });

// // // // Attach token to every request if available
// // // API.interceptors.request.use((req) => {
// // //   const token = localStorage.getItem("token");
// // //   if (token) {
// // //     req.headers.Authorization = `Bearer ${token}`;
// // //   }
// // //   return req;
// // // });

// // // export default API;
// // // src/api.js
// // import axios from "axios";

// // const API = axios.create({
// //   baseURL: "http://localhost:5000/api",
// // });

// // // Attach token to every request if available
// // API.interceptors.request.use((config) => {
// //   const token = localStorage.getItem("token");
// //   if (token) {
// //     // axios config.headers is case-insensitive; set Authorization header
// //     config.headers = config.headers || {};
// //     config.headers.Authorization = `Bearer ${token}`;
// //   }
// //   return config;
// // });

// // export default API;
// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// // Attach token to every request if available
// API.interceptors.request.use(
//   (req) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       req.headers.Authorization = `Bearer ${token}`;
//     }
//     return req;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default API;
import axios from "axios";

// Create Axios instance with Render backend URL
const API = axios.create({
  baseURL: "https://campuscool-backend-q2wa.onrender.com/api",
});

// Automatically attach JWT token to every request if available
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
