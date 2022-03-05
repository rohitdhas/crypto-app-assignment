import React from "react";

const RewardsCard: React.FC = () => {
  return (
    <div className="px-4 py-6 dark:bg-slate-800 bg-slate-300 flex align items-center justify-between rounded-xl">
      <div className="dark:text-white">
        <p>Your Rewards</p>
        <h1 className="text-2xl font-bold my-3">$ 0.26231428</h1>
        <div className="text-xs font-bold">
          <span className="px-2 py-1 rounded-full dark:bg-slate-700 bg-slate-400">
            $40 AVAX
          </span>
          <span className="px-2 py-1 rounded-full dark:bg-slate-700 bg-slate-400 mx-3">
            $10 BNB
          </span>
          <span className="px-2 py-1 rounded-full dark:bg-slate-700 bg-slate-400">
            $210 BTC
          </span>
        </div>
      </div>
      <button className="px-3 py-2 hover:bg-blue-600 bg-blue-500 text-white font-bold cursor-pointer rounded-xl">
        <i className="bi bi-box-arrow-up-right mr-2"></i>
        Custom Link
      </button>
    </div>
  );
};

export default RewardsCard;
