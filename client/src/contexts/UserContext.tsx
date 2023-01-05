import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP, LOGIN, LOGOUT } from "../graphql/queries";
import createCtx from "./context";
import { useNavigate } from "react-router-dom";

interface CtxUser {
  user: UserInfo | null;
  isLoggedIn: boolean;
  loading: boolean;
  signUpUser: (newUser: UserInfo) => void;
  loginUser: ({ email, password }: { email: string; password: string }) => void;
  logoutUser: () => void;
}

//? If a user is saved in local storage then it will be logged in on application run/open
const localUser = JSON.parse(localStorage.getItem("user") as string) || null;
const [useCtx, UserProvider] = createCtx<CtxUser>();

export const Provider = ({ children }: Prototypes) => {
  const nav = useNavigate();
  const [user, setUser] = useState<UserInfo | null>(localUser);
  const [signUpMutation, { data: signUpData, loading }] = useMutation(SIGNUP);
  const [loginMutation, { data: loginData, error }] = useMutation(LOGIN);
  const [logoutMutation] = useMutation(LOGOUT);

  //? When the user state changes then the local storage is updated with the user credentials
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  //? If the signUpData is updated (someone signs up) then that changes the authentication user state
  useEffect(() => {
    if (signUpData) {
      authenticateUser(signUpData.signUp);
    }
  }, [signUpData]);

  //? if the loginData is updated (someone logs in) then that changes the authentication use state
  useEffect(() => {
    if (loginData) {
      authenticateUser(loginData.login);
    }
  });

  //? Function that sets the user state
  const authenticateUser = (user: UserInfo) => {
    setUser(user);
  };

  //? Function to sign up the user using the signup mutation
  const signUpUser = async (newUser: UserInfo) => {
    try {
      await signUpMutation({ variables: { ...newUser } });
      nav("/");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  //? Function that logs in a user using the login mutation
  const loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await loginMutation({ variables: { email, password } });
      nav("/");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  //? Function that uses the logout mutation and sets the user to null so no user is signed in
  const logoutUser = () => {
    logoutMutation();
    setUser(null);
  };

  //? Variables to tell if the user is logged in or not for the conditional rendering
  const isLoggedIn = !!user;

  return (
    <UserProvider
      value={{ user, isLoggedIn, loading, signUpUser, loginUser, logoutUser }}
    >
      {children}
    </UserProvider>
  );
};

export default useCtx;
