import React, { useEffect, useState } from "react";
import baseURL from "../config";
const AllUsers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(baseURL + "/api/users", {
          method: "GET",
        });
        let data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {data.map((item) => {
        return (
          <div key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.created}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllUsers;
