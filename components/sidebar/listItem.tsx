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
          ? "dark:bg-primary-gray bg-slate-400 font-bold dark:text-white"
          : "dark:text-gray-400 text-gray-800"
      }  mt-2 flex align items-center cursor-pointer p-2 dark:hover:bg-primary-gray hover:bg-slate-400 hover:font-bold rounded-xl`}
    >
      <i className={icon}></i>
      <p className="ml-6 text-sm">{label}</p>
    </li>
  );
};

export default ListItem;
