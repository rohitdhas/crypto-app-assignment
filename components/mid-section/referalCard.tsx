import React from "react";

type Props = {
  mg_class?: string;
};

const ReferalCard: React.FC<Props> = ({ mg_class }) => {
  return (
    <div
      className={`p-4 flex-1 dark:bg-primary-gray bg-slate-300 rounded-xl ${mg_class}`}
    >
      <div>
        <i className="bi bi-currency-dollar mr-2 px-1 text-white font-bold bg-blue-500 rounded-full"></i>
        <span className="text-xl dark:text-white">
          <span className="font-bold">12% </span>
          <span>of fee</span>
        </span>
      </div>
      <p className="text-gray-500 text-sm my-2">Your Referral Link for xyz</p>
      <div className="flex p-2 font-bold dark:text-white dark:bg-secondary-gray bg-slate-400 align items-center justify-between rounded-md">
        <p className="text-sm">https://unityexchange.design</p>
        <i className="bi bi-clipboard ml-2 px-2 py-1 rounded-lg hover:bg-gray-800 cursor-pointer"></i>
      </div>
    </div>
  );
};

export default ReferalCard;
