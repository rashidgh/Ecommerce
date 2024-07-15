import React, { useEffect } from "react";
import { AxiosInstance3 } from "../../api/AxiosInstance";

const Profile = () => {
  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await AxiosInstance3.get("/profile", config);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>Profile</div>;
};

export default Profile;
