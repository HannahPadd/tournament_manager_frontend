import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import LogViewer from "./layout/LogViewer";
import Navbar from './layout/Navbar';


const themeFiles: Record<string, string> = {
  TagTeam: "/src/themes/TagTeam.css",
  Eurocup: "/src/themes/Eurocup.css",
};

const Layout= () => {

    // Add new theme CSS
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
        <main className="App">
            <Navbar theme={theme} setTheme={setTheme}/>
            <Outlet />
        </main>
    )
}

export default Layout;