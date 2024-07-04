import React, { createContext, useState } from 'react'

export const Provider = createContext();
const ContextApi = ({ children }) => {
  let [deliver,setDeliver]=useState(null)
  return (
    <Provider.Provider value={{deliver, setDeliver}}>
      {children}
    </Provider.Provider>
  );
}

export default ContextApi