const hardcode = [
  {
    date: "02/22/2022",
    type: "Reservation",
    details: {
      event: "Formal",
      location: "Adelaide",
      registration: "ox04kx",
      user: "Ben Smerd",
    },
    amount: 365,
  },
  {
    date: "02/22/2022",
    type: "Reservation",
    details: {
      event: "Formal",
      location: "Adelaide",
      registration: "ox04kx",
      user: "Ben Smerd",
    },
    amount: 365,
  },
  {
    date: "02/22/2022",
    type: "Reservation",
    details: {
      event: "Formal",
      location: "Adelaide",
      registration: "ox04kx",
      user: "Ben Smerd",
    },
    amount: 365,
  },
  {
    date: "02/22/2022",
    type: "Reservation",
    details: {
      event: "Formal",
      location: "Adelaide",
      registration: "ox04kx",
      user: "Ben Smerd",
    },
    amount: 365,
  },
  {
    date: "02/22/2022",
    type: "Reservation",
    details: {
      event: "Formal",
      location: "Adelaide",
      registration: "ox04kx",
      user: "Ben Smerd",
    },
    amount: 365,
  },
];

const TransactionHistory = () => {
  return (
    <div className="h-full w-full">
      <h1 className="font-bold text-2xl text-center mt-2">
        Transaction History
      </h1>
      <div className="w-full h-full">
        <table className="w-full ">
          <tr className="flex flex-row justify-between border-b border-b-2">
            <th>Date</th>
            <th>Type</th>
            <th>Details</th>
            <th>Amount</th>
          </tr>
          {hardcode.map((transaction) => (
            <tr className="h-[100px] flex flex-row justify-between border-b border-b-2 text-sm gap-2">
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>
                {transaction.details.event} event in{" "}
                {transaction.details.location},{" "}
                {transaction.details.registration} car used with user:{" "}
                {transaction.details.user}
              </td>
              <td>${transaction.amount}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
