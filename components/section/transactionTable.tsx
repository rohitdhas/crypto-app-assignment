import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Transaction {
  amount: number;
  asset: string;
  chain: any;
  img: string;
  referral_earnings: number;
  state: string;
  type: string;
  user: string;
}

const TransactionTable: React.FC = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then((res) => res.json())
      .then(({ data }) => {
        if (data && data.length) {
          console.log(data);
          setTransactions(data);
        }
      });
  }, []);

  return (
    <table className="w-full">
      <tr className="dark:bg-slate-800 bg-slate-300 text-xs dark:text-gray-400 text-gray-700 p-4 flex justify-around tracking-wide rounded-md">
        <td>ASSET</td>
        <td>AMOUNT</td>
        <td>USER ACCOUNT</td>
        <td>REFERRAL EARNING</td>
      </tr>
      {transactions.map((trans: Transaction, idx) => {
        return (
          <tr
            key={`${trans.user}_${idx}`}
            className="dark:bg-slate-900 dark:text-gray-400 bg-slate-200 flex justify-around p-2 rounded-md my-1"
          >
            <td className="flex align items-center">
              <div className="img">
                <Image src={trans.img} height={30} width={30} alt="coin icon" />
              </div>
              <div className="ml-4">
                <p className="font-bold dark:text-white">{trans.asset}</p>
                <div className="flex">
                  <span className="text-sm mr-2 text-gray-500">
                    {trans.type}
                  </span>
                  <span className="p-1 bg-slate-700 rounded-full flex align items-center">
                    <Image
                      src={trans.chain.img}
                      height={15}
                      width={15}
                      alt="chain icon"
                    />
                    <span className="ml-1 text-xs dark:text-white font-bold">
                      {trans.chain.name}
                    </span>
                  </span>
                </div>
              </div>
            </td>
            <td className="text-center">
              <p className="font-bold dark:text-white">{trans.amount} BTC</p>
              <p className="text-sm text-gray-500">{trans.state}</p>
            </td>
            <td className="font-bold dark:text-white text-sm flex align items-center">
              {`${trans.user.substring(0, 5)}..${trans.user.substring(
                trans.user.length - 7
              )}`}
            </td>
            <td className="flex flex-col text-center">
              <span className="dark:text-white font-bold">
                {trans.referral_earnings} BTC
              </span>
              <span className="text-gray-500 text-sm">
                View on BSC Scan
                <i className="bi bi-box-arrow-up-right ml-2"></i>
              </span>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default TransactionTable;
