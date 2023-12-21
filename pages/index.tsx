import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setMatchedTenants } from "@/slices/counterSlice";
import { useQuery } from '@apollo/client/react';
import { gql } from 'graphql-tag';
import axios from "axios";
const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);
  // const data = useSelector((state: any) => state.counter.allData);
  const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
// const { loading, error, data } = useQuery(GET_DOGS);

  const [formData, setFormData] = useState({
    mobileNo: "",
    address: "",
    name: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const setData = (e: string[]) => {
    console.log(e, "eeeee");
    dispatch(
      setMatchedTenants({
        allData: e,
      })
    );
  };
  const handleSubmit = async (event: React.FormEvent) => {
    console.log(formData);
  };
  const query = `
  query GetUser {
    users {
     firstName,
    email
    }
  }
`;
  const apiCall=async()=>{
    const gra=await axios.post("/api/graphql",{query})
    console.log(gra,"dddd")
  }
  return (
    <>
      <div className="p-4">
        {count}
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => apiCall()}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          GraphQl API
        </button>
        <br />
        <button
          onClick={() => dispatch(decrement())}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          decrement
        </button>
        <button
          onClick={(e) => setData(["hel"])}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          decrement
        </button>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg"
        >
          <div className="mb-4">
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              id="name"
              name="Name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNo">Mobile No</label>
            <input
              type="number"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              maxLength={10}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              //@ts-ignore
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Home;
