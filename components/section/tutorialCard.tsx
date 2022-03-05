import React from "react";
import Image from "next/image";
import coinImg from "../../public/coin.svg";

const TutorialCard: React.FC = () => {
  return (
    <div className="flex align items-center justify-evenly relative bg-cyan-200 px-4 py-2 my-4 rounded-2xl">
      <div>
        <p className="text-blue-900 font-medium text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className="dark:bg-white font-bold bg-slate-300 px-6 py-1 mt-4 rounded-md">
          Tutorial
        </button>
      </div>
      <Image src={coinImg} height={120} width={160} alt="coin img" />
      <i className="bi bi-x absolute -top-2 -right-2 dark:bg-white bg-slate-300 cursor-pointer px-1 rounded-full font-bold"></i>
    </div>
  );
};

export default TutorialCard;
