import React from 'react';
import './App.css';
import Nav from './component/nav';
import { Card } from './component/card';

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
    }
  ];

  return (
    <div>
      <h1>Hello World</h1>
      <Nav />
      {/* ใช้ map เพื่อแสดงข้อมูลของแต่ละชุด */}
      {mockData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
};

export default App;
