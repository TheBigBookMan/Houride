const bookingcode = [
  {
    name: "ANDY kyrakousasd",
    event: "Formal",
    location: "Adelaide",
    date: "22/02/2022",
    time: "11:05AM",
  },
  {
    name: "ANDY kyrakousasd",
    event: "wedding",
    location: "port elliot",
    date: "23/22/2021",
    time: "11:05AM",
  },
  {
    name: "ANDY kyrakousasd",
    event: "Cemetary",
    location: "Melbs",
    date: "11/02/1022",
    time: "11:05AM",
  },
  {
    name: "ANDY kyrakousasd",
    event: "Formal",
    location: "Adelaide",
    date: "22/02/2022",
    time: "11:05AM",
  },
  {
    name: "ANDY kyrakousasd",
    event: "Formal",
    location: "Adelaide",
    date: "22/02/2022",
    time: "11:05AM",
  },
];

const PastTransactions = () => {
  return (
    <div>
      <ul className="flex flex-col gap-2 h-full w-full">
        {bookingcode.map((booking) => (
          <li className="border-b border-b-2 h-[80px] flex justify-between hover:cursor-pointer hover:bg-indigo-100 rounded-lg p-1">
            <div className="flex flex-col">
              <h1 className="font-bold">{booking.name}</h1>
              <p>Event- {booking.event}</p>
              <p>Location- {booking.location}</p>
            </div>
            <div className="flex flex-col">
              <p>Date- {booking.date}</p>
              <p>Time- {booking.time}</p>
              <p className="underline hover:cursor-pointer">view transaction</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastTransactions;
