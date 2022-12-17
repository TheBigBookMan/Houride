import FutureTransactions from "./history/FutureTransactions";
import PastTransactions from "./history/PastTransactions";
import { useState } from "react";

//TODO list out of dates with  next at the top

//TODO can do calendar for easy to view renting dates

//TODO , onclick will take you the transaction- , time, , , date

//TODO have 2 sepeerate pages- future transactions, completed transactions

const RentingHistory = () => {
  const [isFuture, setIsFuture] = useState<boolean>(true);

  return (
    <div className="w-full h-full p-4 flex flex-col gap-2">
      <h1 className="font-bold text-lg">Renting History</h1>
      <div className="flex justify-between">
        <div>Renting calendar</div>
        <div className="flex gap-2">
          <button
            onClick={(): void => setIsFuture(true)}
            className={`${
              isFuture ? "bg-indigo-300" : "bg-zinc-100"
            } text-sm border-2 rounded-xl p-2 w-[150px]  hover:bg-indigo-300 active:bg-indigo-400 transition-all`}
          >
            Future transactions
          </button>
          <button
            onClick={(): void => setIsFuture(false)}
            className={`${
              !isFuture ? "bg-indigo-300" : "bg-zinc-100"
            } text-sm border-2 rounded-xl p-2 w-[150px] hover:bg-indigo-300 active:bg-indigo-400 transition-all`}
          >
            Past transactions
          </button>
        </div>
      </div>
      {isFuture ? <FutureTransactions /> : <PastTransactions />}
    </div>
  );
};

export default RentingHistory;
