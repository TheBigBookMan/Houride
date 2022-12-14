const reviews = [
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 7,
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 7,
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 7,
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 7,
  },
];

const BookingsInfo = () => {
  return (
    <div className="h-full w-full p-5 flex flex-col">
      <h1 className="font-bold text-lg">Booking Statistics</h1>
      <ul className="flex flex-col gap-2">
        <li>
          <h1 className="font-bold">Earnings</h1>
          <p>$24,000 Total</p>
        </li>
        <li>
          <h1 className="font-bold">Number of bookings</h1>
          <p>20</p>
        </li>
        <li>
          <h1 className="font-bold">Number of ratings</h1>
          <p>12300</p>
        </li>
        <li>
          <h1 className="font-bold">Reviews</h1>
          <ul>
            {reviews.map((review) => (
              <li className="flex justify-between border-b p-2">
                <p className="text-sm">{review.message}</p>
                <p>{review.rating} ST</p>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default BookingsInfo;
