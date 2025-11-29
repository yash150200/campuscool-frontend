// // import React from 'react';

// // const Home = () => {
// //   return (
// //     <div className="p-4">
// //       <h1 className="text-2xl font-bold">Welcome to CampusCool</h1>
// //     </div>
// //   );
// // };

// // export default Home;
// import React from "react";
// //import "../styles/home.css"; // optional if you want to move styles to CSS

// const Home = () => {
//   return (
//     <div
//       style={{
//         backgroundImage: "url('/campus.png')", // ✅ correct path for public folder
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "white",
//         textShadow: "2px 2px 6px rgba(0,0,0,0.8)", // for readability
//       }}
//     >
//       <h1 className="text-4xl font-bold">Welcome to CampusConnect</h1>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import "../styles/Home.css"; // ✅ separate CSS file

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to CampusConnect</h1>
    </div>
  );
};

export default Home;
