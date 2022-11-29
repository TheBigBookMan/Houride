import { useState, useEffect } from "react";

const Form = () => {
  const [formDetails, setFormDetails] = useState<FormInput>({
    username: "",
    email: "",
    password: "",
  });

  const inputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="p-2 flex flex-col gap-5">
      <label className="font-bold flex flex-col">
        Username
        <input
          value={formDetails.username}
          onChange={inputChange}
          type="text"
          placeholder="Enter here..."
          className="border-2 rounded-lg pl-2"
        />
      </label>
      <label className="font-bold flex flex-col">
        Email
        <input
          value={formDetails.email}
          onChange={inputChange}
          type="text"
          placeholder="Enter here..."
          className="border-2 rounded-lg pl-2"
        />
      </label>
      <label className="font-bold flex flex-col">
        Password
        <input
          value={formDetails.password}
          onChange={inputChange}
          type="password"
          placeholder="Enter here..."
          className="border-2 rounded-lg pl-2"
        />
      </label>
    </form>
  );
};

export default Form;
