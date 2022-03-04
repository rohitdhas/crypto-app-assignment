import Topbar from "./topbar";
import Sidebar from "./sidebar/sidebar";
import { useState } from "react";

export default function Layout({ children }: any) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : ""} mt-10`}>
      <Topbar />
      <Sidebar toggleDarkMode={() => setDarkMode(!darkMode)} />
      <>{children}</>
    </div>
  );
}
