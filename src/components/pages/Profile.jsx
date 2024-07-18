import React, { useContext, useEffect, useState } from "react";
import { AxiosInstance3 } from "../../api/AxiosInstance";
import toast from "react-hot-toast";
import { Provider } from "../../api/ContextApi";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const data = useContext(Provider);
  console.log(data);
  const { profileData, setProfileData } = data;
  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await AxiosInstance3.get("/profile", config);
      setProfile(data);
      setProfileData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // !Logout:
  const Logout = () => {
    sessionStorage.removeItem("token");
    toast.success("Logout Successfully");
    window.location.reload();
  };
  return (
    <div className="w-[fit-content] bg-slate-400 p-4 rounded-sm text-base text-white">
      <div className="flex justify-center mb-[1rem]">
        <img
          height="80px"
          width="80px"
          className="rounded-full"
          src={profile?.avatar}
          alt=""
        />
      </div>
      <div>
        <p>
          <span className="font-semibold w-[4rem] inline-block ">Role: </span>
          {profile?.role}
        </p>
        <p>
          {" "}
          <span className="font-semibold w-[4rem] inline-block">Name: </span>
          {profile?.name}
        </p>
        <p>
          <span className="font-semibold w-[4rem] inline-block">Email: </span>
          {profile?.email}
        </p>
        <p>
          <button
            className="bg-red-500 w-full p-2 mt-2 rounded z-50"
            onClick={() => Logout()}
          >
            Logout
          </button>
        </p>
      </div>
    </div>
  );
};

export default Profile;
