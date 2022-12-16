import FutureTransactions from "../components/features/bookings/FutureTransactions";
import PastTransactions from "../components/features/bookings/PastTransactions";
import { useState } from "react";

//TODO this is a transaction page for customers with upcoming bookings and previous transactions.bookings

const Bookings = () => {
  const [isFuture, setIsFuture] = useState<boolean>(true);
  return (
    <div className="h-full w-full flex flex-col gap-2">
      <h1 className="font-bold text-2xl text-center mt-2">Bookings</h1>
      <div className="flex flex-col items-center justify-between">
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

export default Bookings;
