import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./component/nav";
import Card from "./component/card";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/member");

      // Sort the data based on createdate in descending order
      const sortedData = response.data.sort(
        (a, b) => new Date(b.createdate) - new Date(a.createdate)
      );
      setData(sortedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to refresh data
  const refreshData = () => {
    fetchData(); // Call fetchData function to fetch updated data
  };

  useEffect(() => {
    fetchData(); // Fetch initial data when the component mounts
  }, []);

  return (
    <div className="w-full h-screen">
      {/* <h1>Hello World</h1> */}
      <Nav refreshData={refreshData}/>
      <div className="mr-5 ml-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.map((member, index) => (
          <Card
            key={index}
            id={member._id}
            fullname={member.fullname}
            nickname={member.nickname}
            date={member.date0fbirth}
            age={member.age}
            gender={member.gender}
            createdate={member.createdate}
            refreshData={refreshData}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
