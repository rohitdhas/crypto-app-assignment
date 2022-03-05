import React from "react";

interface Props {
  label: string;
  icon: string;
  active: boolean;
}

const ListItem: React.FC<Props> = ({ label, icon, active }) => {
  return (
    <li
      className={`${
        active
          ? "bg-gray-700 font-bold text-white"
          : "dark:text-gray-400 text-gray-800"
      }  mt-2 flex align items-center cursor-pointer p-2 hover:bg-gray-700 hover:text-white hover:font-bold rounded-xl`}
    >
      <i className={icon}></i>
      <p className="ml-6 text-sm">{label}</p>
    </li>
  );
};

export default ListItem;
