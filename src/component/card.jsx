import React from "react";

export const Card = ({ fullname, nickname, date, age, gender }) => {
  const data = {
    Fullname: fullname,
    Nickname: nickname,
    "Date of Birth": date,
    Age: age,
    Gender: gender,
  };

  return (
    <div className="flex flex-col border-solid border-2 border-sky-500">
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <span className="label">{key}: </span>
          <span className="value">{value}</span>
        </div>
      ))}
    </div>
  );
};
