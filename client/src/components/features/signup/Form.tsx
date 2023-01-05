import { useState, useEffect } from "react";
import UseUserContext from "../../../contexts/UserContext";

//TODO add in mutations for the signup from graphql
//TODO add in JWT authentication

const Form = () => {
  let isValid = true;
  const [formDetails, setFormDetails] = useState<UserInfo>({
    username: "",
    email: "",
    password: "",
  });
  const { signUpUser, loading } = UseUserContext();

  const inputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault();

      if (
        formDetails.username === "" ||
        formDetails.email === "" ||
        formDetails.password === ""
      ) {
        isValid = false;
        throw "Need all areas to be filled out.";
      } else {
        console.log(formDetails);

        signUpUser(formDetails);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="p-2 flex flex-col gap-5">
      <label className="font-bold flex flex-col">
        Username
        <input
          name="username"
          value={formDetails.username ? formDetails.username : ""}
          onChange={inputChange}
          type="text"
          placeholder="Enter here..."
          className="border-2 rounded-lg pl-2"
        />
      </label>
      <label className="font-bold flex flex-col">
        Email
        <input
          name="email"
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
          name="password"
          value={formDetails.password}
          onChange={inputChange}
          type="password"
          placeholder="Enter here..."
          className="border-2 rounded-lg pl-2"
        />
      </label>
      <button
        onClick={onSubmit}
        type="submit"
        className="border-2 rounded-xl p-2 w-[100px] bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 transition-all"
      >
        Submit
      </button>
      {!isValid && <p>Need to have all areas filled out.</p>}
    </form>
  );
};

export default Form;
