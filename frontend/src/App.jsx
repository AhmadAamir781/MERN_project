import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import Container from "./components/ui/Container";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Container>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;


// import React from "react";
// import "./App.css";
// import Navbar from "./components/ui/Navbar";
// import Container from "./components/ui/Container";
// import HomePage from "./pages/HomePage";
// import SignupPage from "./pages/SignupPage";
// import LoginPage from "./pages/LoginPage";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Container>
//         {/* Render components based on the route */}
//         {window.location.pathname === "/" && <HomePage />}
//         {window.location.pathname === "/signup" && <SignupPage />}
//         {window.location.pathname === "/login" && <LoginPage />}
//       </Container>
//     </>
//   );
// }

// export default App;
