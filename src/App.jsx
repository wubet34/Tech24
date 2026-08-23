import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar        from "./components/layout/Navbar";
import Footer        from "./components/layout/Footer";
import ScrollToTop   from "./components/layout/ScrollToTop";

import Home          from "./components/sections/Home";
import About         from "./components/sections/About";
import Services      from "./components/sections/Services";
import Banks         from "./components/sections/Banks";
import Contact       from "./components/sections/Contact";
import Careers       from "./components/sections/Careers";

import Login         from "./pages/Login";
import Register      from "./pages/Register";
import Dashboard     from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const PUBLIC_ROUTES = [
  { path: "/",         element: <Home /> },
  { path: "/about",    element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/banks",    element: <Banks /> },
  { path: "/contact",  element: <Contact /> },
  { path: "/careers",  element: <Careers /> },
];

const AppShell = () => (
  <div className="relative min-h-screen" style={{ background: "var(--bg)" }}>
    {/* grid bg */}
    <div className="pointer-events-none fixed inset-0 bg-grid opacity-60 z-0" />

    <Routes>
      <Route path="/login"      element={<Login />} />
      <Route path="/register"   element={<Register />} />
      <Route path="/dashboard"  element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

      {PUBLIC_ROUTES.map(({ path, element }) => (
        <Route key={path} path={path} element={
          <div className="relative z-10">
            <ScrollToTop />
            <Navbar />
            <main>{element}</main>
            <Footer />
          </div>
        } />
      ))}
    </Routes>
  </div>
);

const App = () => (
  <ThemeProvider>
    <AppShell />
  </ThemeProvider>
);

export default App;
