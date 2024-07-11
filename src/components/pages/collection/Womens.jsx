import React, { useEffect, useState } from 'react'
import AxiosInstance from '../../../api/AxiosInstance'

const Womens = () => {
  let [state, setState] = useState([]);
  
  const fetchData =async () => {
    try {
      const { data } = await AxiosInstance.get("/products");
      console.log(data);
      let arr = [];
      arr.push(data[14], data[15], data[16], data[17], data[18], data[19]);
      setState(arr);
     } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div>{state.map((val, ind) => {
      return (
        <div>
          <p>{ val.title}</p>
        </div>
      )
    })}</div>
  )
}

export default Womens