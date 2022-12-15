import Sent from "../components/features/inbox/Sent";
import Received from "../components/features/inbox/Received";
import { useState } from "react";

const Inbox = () => {
  const [isSent, setIsSent] = useState<boolean>(false);

  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-2">Inbox</h1>
      <div className="h-full w-full">
        <div className="flex justify-center gap-2">
          <button
            onClick={(): void => setIsSent(false)}
            className={`${
              !isSent ? "bg-indigo-300" : "bg-zinc-100"
            } text-sm border-2 rounded-xl p-2 w-[150px]  hover:bg-indigo-300 active:bg-indigo-400 transition-all`}
          >
            Received Messages
          </button>
          <button
            onClick={(): void => setIsSent(true)}
            className={`${
              isSent ? "bg-indigo-300" : "bg-zinc-100"
            } text-sm border-2 rounded-xl p-2 w-[150px] hover:bg-indigo-300 active:bg-indigo-400 transition-all`}
          >
            Sent Messages
          </button>
        </div>

        <ul className="flex flex-col gap-1 p-2">
          {isSent ? <Sent /> : <Received />}
        </ul>
      </div>
    </div>
  );
};

export default Inbox;
