//TODO list out of dates with  next at the top

//TODO can do calendar

//TODO , onclick will take you the transaction- , time, , , date

//TODO have 3 sepeerate pages- future transactions, completed transactions

const BookingHistory = () => {
  return (
    <div className="w-full h-full p-4">
      <h1 className="font-bold text-lg">Booking History</h1>
      <ul className="flex flex-col gap-2 h-full w-full">
        {bookingcode.map((booking) => (
          <li className="border-solid border-2 border-black h-[80px] flex justify-between">
            <div className="flex flex-col">
              <h1 className="font-bold">{booking.name}</h1>
              <p>Event- {booking.event}</p>
              <p>Location- {booking.location}</p>
            </div>
            <div className="flex flex-col">
              <p>Date- {booking.date}</p>
              <p>Time- {booking.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingHistory;
