//TODO time ,contact support number, event,

// TODO will need to grab the transaction ID from the params and then use that to load up the data from the database

const Transaction = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <h1 className="font-bold text-2xl text-center mt-2">Transaction</h1>
      <div className="border-2 border-solid border-gray flex flex-col gap-8 p-2">
        <h1 className="font-bold text-lg">Transaction ID: 12345</h1>
        <div>
          <h1 className="font-bold text-lg">Details:</h1>
          <p>
            Customer- <span className="italic font-bold">Ben Smerd</span>
          </p>
          <p>
            Driver- <span className="italic font-bold">Andrew Kyriakou</span>
          </p>
          <p>
            Car registration- <span>193-SKF</span>
          </p>
          <p>3 seats</p>
          <p>Adelaide</p>
          <p>Wedding</p>
          <p>
            Distance traveled- <span>23km</span>
          </p>
          <p>
            Duration- <span>2 hours 14 minutes</span>
          </p>
          <p>
            Date- <span>22/12/2022 11:45AM - 02:54PM</span>
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg">Fees:</h1>
          <p>
            Price per hour- <span>$23p/h</span>
          </p>
          <p>
            Driving price- <span>$364.67</span>
          </p>
          <p>
            Fee percentage- <span>2%</span>
          </p>
          <p>
            Total paid- <span>$366.23</span>
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg">Problem?</h1>
          <p>
            Contact support on 4456212 phone or
            andrewTHEBIGDOGkyriakou@bigdogs.com.au
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
