import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./component/nav";
import Card from "./component/card";
import axios from "axios";

const App = () => {
  // ข้อมูลสมมติสำหรับแต่ละชุด
  const mockData = [
    {
      id: 324,
      fullname: "John Doe",
      nickname: "Johnny",
      date: "1990-01-01",
      age: 32,
      gender: "male",
    },
    {
      id: 325,
      fullname: "Jane Smith",
      nickname: "Janie",
      date: "1985-05-15",
      age: 37,
      gender: "female",
    },
    {
      id: 326,
      fullname: "Mike Johnson",
      nickname: "Mikey",
      date: "1982-11-30",
      age: 40,
      gender: "male",
    },
    {
      id: 327,
      fullname: "Mike Johnson",
      nickname: "Mikey",
      date: "1982-11-30",
      age: 40,
      gender: "male",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/data"); // Adjust the endpoint as per your API
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <div className="w-full h-screen">
      <h1>Hello World</h1>
      {/*Nav for Add member */}
      <Nav />

      <div className="mr-5 ml-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {mockData.map((member, index) => (
          <Card
            key={index}
            id={member.id}
            fullname={member.fullname}
            nickname={member.nickname}
            date={member.date}
            age={member.age}
            gender={member.gender}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
