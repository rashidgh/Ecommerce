import React, { createContext, useState } from 'react'

export const Provider = createContext();
const ContextApi = ({ children }) => {
  let [deliver, setDeliver] = useState(null);
  const [profileData, setProfileData] = useState([]);
  return (
    <Provider.Provider
      value={{ deliver, setDeliver, profileData, setProfileData }}
    >
      {children}
    </Provider.Provider>
  );
}

export default ContextApi