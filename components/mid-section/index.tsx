import React from "react";
import TutorialCard from "./tutorialCard";
import RewardsCard from "./rewardsCard";
import ReferalCard from "./referalCard";
import TransactionTable from "./transactionTable";

const Index: React.FC = () => {
  return (
    <div className="width-70 dark:bg-black pt-14 px-10 h-screen overflow-auto styled-scrollbar">
      <div className="flex align items-center justify-between">
        <div className="dark:text-white p-1 border-b-2 border-blue-500 w-max">
          Section 8
        </div>
        <div className="flex align items-center justify-between dark:bg-slate-800 bg-slate-300 py-2 px-3 rounded-xl">
          <i className="bi bi-wallet text-blue-500 font-bold mr-4"></i>
          <p className="dark:text-white mr-4 text-sm font-bold">0.2 $XYZ</p>
          <div className="px-2 py-1 text-sm rounded-md bg-cyan-200 text-blue-500 font-bold">
            Tier 1
          </div>
        </div>
      </div>
      <TutorialCard />
      <RewardsCard />
      <div className="flex align items-center justify-between my-4">
        <ReferalCard mg_class="mr-4" />
        <ReferalCard />
      </div>
      {/* Table */}
      <div className="my-4 flex">
        <div className="dark:text-white cursor-pointer p-1 mr-2 border-b-2 font-bold border-blue-500 w-max">
          First Tab
        </div>
        <div className="cursor-pointer text-slate-600 p-1 font-bold w-max border-b-2 dark:border-black border-white dark:hover:border-blue-500 hover:border-blue-500">
          Second Tab
        </div>
      </div>
      <TransactionTable />
    </div>
  );
};

export default Index;
