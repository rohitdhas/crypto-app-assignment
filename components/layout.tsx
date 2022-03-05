import Topbar from "./topbar";
import Sidebar from "./sidebar";
import { useState } from "react";

export default function Layout({ children }: any) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : ""} margin-left-20`}>
      <Topbar />
      <Sidebar toggleDarkMode={() => setDarkMode(!darkMode)} />
      <>{children}</>
    </div>
  );
}
