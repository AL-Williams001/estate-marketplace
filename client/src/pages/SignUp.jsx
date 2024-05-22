import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-white">
        Signup
      </h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounder-lg"
          id="username"
        />

        <input
          type="email"
          placeholder="Eamil"
          className="border p-3 rounder-lg"
          id="email"
        />

        <input
          type="passowrd"
          placeholder="Password"
          className="border p-3 rounder-lg"
          id="password"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-lg uppercase">
          Signup
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p> Already have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-400 underline">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
