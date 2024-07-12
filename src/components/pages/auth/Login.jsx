import React, { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = credentials;
  // !form handleSubmit
  const handleSubmit = e => {
    e.preventDefault();
    if (!email && !password) {
      return toast.error("Credentials can't be empty");
    }
    if (!email) {
      return toast.error("Email field can't be empty");
    }
    if (!password) {
      return toast.error("Password can't be not empty");
    }

    console.log(credentials);
  };
  // !form handleChange
  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <div className="bg-slate-100 h-[100vh] w-[100vw]">
      <div className="h-[80vh] flex justify-center items-center flex-col gap-4">
        <p className="text-2xl font-semibold">Login Here</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[350px] gap-2 text-lg"
        >
          <input
            className="p-4 rounded"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter EmailId"
          />
          <input
            className="p-4 rounded"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
          <button className="w-full p-4 bg-blue-500 text-lg text-white font-semibold rounded mt-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
