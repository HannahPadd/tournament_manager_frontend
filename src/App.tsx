import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import ViewPage from "./pages/ViewPage";
import ManagePage from "./pages/ManagePage";
import SignUpPage from "./pages/SignUp";
import Navbar from "./components/layout/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const themeFiles: Record<string, string> = {
  TagTeam: "/src/themes/TagTeam.css",
  Eurocup: "/src/themes/Eurocup.css",
};

function App() {
  const [theme, setTheme] = useState("Eurocup");

  useEffect(() => {
    // Remove previous theme CSS
    const prev = document.getElementById("theme-css") as HTMLLinkElement;
    if (prev) prev.remove();
    // Add new theme CSS
    const link = document.createElement("link");
    link.id = "theme-css";
    link.rel = "stylesheet";
    link.href = themeFiles[theme] || themeFiles["Eurocup"];
    document.head.appendChild(link);
    return () => {
      link.remove();
    };
  }, [theme]);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <ToastContainer />
      <div className="lg:container lg:mx-auto mx-3 mt-3">
        <Routes>
          <Route path="/" element={<ViewPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/manage" element={<ManagePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<ViewPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
