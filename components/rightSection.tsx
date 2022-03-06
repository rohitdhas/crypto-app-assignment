import React, { useState } from "react";
import Image from "next/image";

const RightSection = () => {
  const [toggleBtn1, setToggleBtn1] = useState(false);
  const [toggleBtn2, setToggleBtn2] = useState(false);

  return (
    <div className="pt-14 px-4 w-1/3 h-screen border-l-2 border-l-slate-700 dark:bg-black">
      <div className="flex align items-center justify-between">
        <div
          onClick={() => setToggleBtn1(!toggleBtn1)}
          className="flex-1 mr-2 flex align items-center justify-around border-2 dark:border-slate-600 border-slate-300 dark:text-white p-2 dark:bg-slate-600 bg-slate-300 rounded-md dark:hover:bg-slate-500 hover:bg-slate-400 cursor-pointer"
        >
          <Image
            src={
              "https://raw.githubusercontent.com/akshita151199/APIs/main/avax.png"
            }
            height={20}
            width={20}
            alt="chain icon"
          />
          <span className="mx-2 text-sm">Avalanche</span>
          <i className={`bi bi-caret-${toggleBtn1 ? "up" : "down"}`}></i>
        </div>
        <div
          onClick={() => setToggleBtn2(!toggleBtn2)}
          className="flex-1 border-2 flex align items-center justify-around border-blue-500 dark:text-white p-2 dark:bg-slate-600 bg-slate-300 rounded-md dark:hover:bg-slate-500 hover:bg-slate-400 cursor-pointer"
        >
          <i className="bi bi-wallet text-blue-500"></i>
          <span className="mx-2 text-sm">0xf6...1353</span>
          <i className={`bi bi-caret-${toggleBtn2 ? "up" : "down"}`}></i>
        </div>
      </div>
      <div className="mt-8">
        <p className="dark:text-white">
          <i className="bi bi-arrow-left mr-2" />
          <span>Custom Link</span>
        </p>
        <p className="my-6 dark:text-white text-sm">
          https://testnet.xyz.xyz/trade?ref=
        </p>
        <input
          type="text"
          placeholder="ENTER"
          className="text-sm text-slate-400 dark:bg-slate-700 p-3 w-full rounded-md outline-none border-2 placeholder-slate-500 dark:border-slate-700 border-slate-300 dark:focus:border-blue-500 focus:border-blue-500"
        />
        <div className="my-4 flex">
          <button className="p-2 flex-1 mr-2 hover:bg-blue-600 bg-blue-500 text-white text-sm font-bold cursor-pointer rounded-lg border-2 border-blue-500">
            <i className="bi bi-box-arrow-up-right mr-2"></i>
            Custom Link
          </button>
          <button className="p-2 flex-1 dark:hover:bg-slate-800 dark:bg-black dark:text-white text-sm font-bold cursor-pointer rounded-lg border-2 border-gray-600">
            <i className="bi bi-box-arrow-right mr-2"></i>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
