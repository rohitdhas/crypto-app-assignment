import React from "react";
import ListItem from "./listItem";

type Props = {
  toggleDarkMode: any;
};

const Sidebar: React.FC<Props> = ({ toggleDarkMode }) => {
  return (
    <div className="absolute top-0 left-0 bottom-0 z-10 border-2 border-r-gray-400 pt-16 px-6 w-1/5 dark:bg-black overflow-auto flex flex-col">
      {/* Profile Icon */}
      <div className="flex justify-between align items-center">
        <div className="flex align items-center">
          <div className="text-xl font-bold text-center bg-blue-500 rounded-full px-3 py-1 dark:text-white w-min">
            N
          </div>
          <h1 className="text-xl dark:text-white font-bold ml-2">Name</h1>
        </div>
        <i className="bi bi-arrow-left dark:text-white text-2xl px-2 py-1 rounded-full cursor-pointer hover:bg-slate-800"></i>
      </div>

      {/* List Items */}
      <ul className="my-4">
        <ListItem icon="bi bi-grid" label="Home" active={false} />
        <ListItem
          icon="bi bi-file-bar-graph"
          label="Section 1"
          active={false}
        />
        <ListItem icon="bi bi-graph-up" label="Section 2" active={false} />
        <ListItem icon="bi bi-app-indicator" label="Section 3" active={false} />
        <ListItem icon="bi bi-coin" label="Section 4" active={false} />
        <ListItem icon="bi bi-cursor" label="Section 5" active={false} />
        <ListItem icon="bi-pie-chart" label="Section 6" active={false} />
        <ListItem icon="bi-bar-chart" label="Section 7" active={false} />
        <ListItem icon="bi bi-share" label="Section 8" active={true} />
        <ListItem
          icon="bi bi-file-earmark-text"
          label="Documentation"
          active={false}
        />
      </ul>
      {/* Sidebar footer */}
      <div className="mt-auto">
        <div className="flex align items-center justify-between">
          <div className="cursor-pointer hover:bg-gray-600 bg-gray-700 font-bold dark:text-white flex align items-center px-3 py-2 xxl:px-4 rounded-lg">
            <div className="text-sm mr-2 font-bold text-center bg-blue-500 rounded-full px-1 dark:text-white w-min">
              N
            </div>
            <p className="text-sm">$0.90</p>
          </div>
          <div className="cursor-pointer hover:bg-blue-400 text-blue-600 text-sm font-bold bg-blue-300 px-3 py-2 rounded-lg">
            Buy $XYZ
          </div>
        </div>
        <div className="my-4 flex align items-center">
          <i className="bi bi-globe rounded-full px-1 hover:bg-slate-800 cursor-pointer dark:text-white text-xl font-bold mr-4"></i>
          <label className="switch">
            <input type="checkbox" onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
