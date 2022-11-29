import { useState } from "react";

//! car rental - page to set up hiring out your car (car info, car images, specific events, reviews, rating, dates free, email user, message user on app, price, any comments, potential map of radius user willing to do)

//TODO create state for the form

//TODO need to figure you the upload image--- maybe check out the AWS bucket

//TODO checkbox for the events

//TODO might need a car register number or some sort of car authorisation to show its a registered car or something

const CarRental = () => {
  const [carVariables, setCarVariables] = useState<CarSubmissionTypes>({
    type: "",
    seats: 0,
    events: [],
    price: 0,
    negotiable: false,
    carInfo: "",
    images: [],
  });

  //TODO fix the any type
  const inputChange = (e: any) => {
    setCarVariables((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault();
      // TODO input the variable non empty check
      //? figure out what can be left as optional
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col p-5 gap-5">
      <h1 className="font-bold text-xl">Put your car up for rent!</h1>
      <p>
        Put in details about your car and users can determine if they will like
        to hire your car.
      </p>
      <form>
        <label className="flex flex-col font-bold">
          Car type
          <input
            value={carVariables.type}
            onChange={inputChange}
            className="border-2 rounded-lg pl-1"
            type="text"
            placeholder="type..."
          />
        </label>
        <label className="flex flex-col font-bold">
          Number of seats
          <input
            value={carVariables.seats}
            onChange={inputChange}
            className="border-2 rounded-lg pl-1"
            type="text"
            placeholder="seats..."
          />
        </label>
        <label className="flex flex-col font-bold">
          Events you will do
          <p className="text-red-600">INPUT A CHECKBOX HERE</p>
        </label>
        <label className="flex flex-col font-bold">
          Price per hour
          <input
            value={carVariables.price}
            onChange={inputChange}
            className="border-2 rounded-lg pl-1"
            type="text"
            placeholder="price..."
          />
          <p className="text-red-600">
            INPUT RADIO FOR PRICE TO BE NEGOTIOABLE OR NOT
          </p>
        </label>
        <label className="flex flex-col font-bold">
          Extra car info
          <textarea
            value={carVariables.carInfo}
            onChange={inputChange}
            className="border-2 rounded-lg pl-1"
            rows={3}
            placeholder="info..."
          />
        </label>
        <label className="flex flex-col font-bold">
          Images of the car
          <button className="border-2 w-[150px] rounded-lg bg-zinc-200 hover:bg-zinc-300">
            Upload image
          </button>
        </label>
        <label className="flex flex-col font-bold">
          Radius of where will drive
          <p className="text-red-600">
            INPUT HERE AN INERACTIVE MAP TO SHOW A RADIUS OF WHERE HAPPY TO
            DRIVE TO
          </p>
        </label>
        <button
          onClick={onSubmit}
          className="border-2 rounded-xl w-[150px] ml-1 p-1 bg-indigo-200 hover:bg-indigo-300 active:bg-indigo-400 transition-all"
        >
          Register Car
        </button>
      </form>
    </div>
  );
};

export default CarRental;
