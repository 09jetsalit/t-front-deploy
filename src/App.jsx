import React from "react";
import "./App.css";
import Nav from "./component/nav";
import Card from "./component/card";

const App = () => {
  // ข้อมูลสมมติสำหรับแต่ละชุด
  const mockData = [
    {
      fullname: "John Doe",
      nickname: "Johnny",
      date: "1990-01-01",
      age: 32,
      gender: "Male",
    },
    {
      fullname: "Jane Smith",
      nickname: "Janie",
      date: "1985-05-15",
      age: 37,
      gender: "Female",
    },
    {
      fullname: "Mike Johnson",
      nickname: "Mikey",
      date: "1982-11-30",
      age: 40,
      gender: "Male",
    },
    {
      fullname: "Mike Johnson",
      nickname: "Mikey",
      date: "1982-11-30",
      age: 40,
      gender: "Male",
    },
  ];

  return (
    <div className="w-full h-screen">
      <h1>Hello World</h1>
      {/* Add member */}
      <Nav />

      <div className="mr-5 ml-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {mockData.map((member, index) => (
          <Card
            key={index}
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
