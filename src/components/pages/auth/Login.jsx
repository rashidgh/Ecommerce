import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AxiosInstance3 } from "./../../../api/AxiosInstance";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { email, password } = credentials;
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  // !form handleSubmit
  const handleSubmit = async e => {
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
    setLoading(true);
    try {
      const { data } = await AxiosInstance3.post("/login", credentials);
      console.log(data);
      toast.success("Logged in successfully");
      navigate("/");
      sessionStorage.setItem("token", data?.access_token);
      setCredentials({ email: "", password: "" });
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Unauthorized Credentials");
      setLoading(false);
    }
  };
  // !form handleChange
  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-slate-100 h-[100vh] w-[100vw]">
      <div className="h-[80vh] flex justify-center items-center flex-col gap-4">
        <p className="text-2xl font-semibold">Login Here</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[350px] gap-2 text-lg relative"
        >
          <input
            className="p-4 rounded"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter EmailId"
            data-aos="fade-left"
          />
          <input
            className="p-4 rounded"
            type={toggle?"password":"text"}
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter Password"
            data-aos="fade-right"
          />
          <span
            onClick={() => setToggle(!toggle)}
            className="absolute inline-block top-24 right-3 text-xl text-slate-700"
          >
            {toggle ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </span>
          <button
            data-aos="flip-right"
            className="w-full p-4 bg-blue-500 hover:bg-blue-400 text-lg text-white font-semibold rounded mt-2"
          >
            {loading ? "Logging.." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
