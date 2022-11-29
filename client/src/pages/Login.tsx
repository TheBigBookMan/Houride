import LoginForm from "../components/features/login/LoginForm";

const Login = () => {
  return (
    <div className="p-2 flex flex-col gap-2">
      <h1 className="font-bold text-2xl text-center mt-2">Login</h1>
      <LoginForm />
      <button className="border-2 rounded-xl w-[150px] ml-1 p-1 bg-indigo-200 hover:bg-indigo-300 active:bg-indigo-400 transition-all">
        Signup Here
      </button>
    </div>
  );
};

export default Login;
