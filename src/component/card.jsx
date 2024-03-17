import React, { useState } from "react";
import deleteIcon from "../assets/delete-black.svg";
import editIcon from "../assets/edit.svg";
import ModalEdit from "../modal/modal-edit";

const Card = ({ fullname, nickname, date, age, gender }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // state เพื่อเก็บสถานะของ Modal

  const handleModalClick = () => {
    setIsModalOpen(true); // เมื่อคลิก "Add member" เปิด Modal
  };

  return (
    <div className="card">
      <div className="label">Full name: {fullname}</div>
      <div className="label">Nickname: {nickname}</div>
      <div className="label">Date of Birth: {date}</div>
      <div className="label">Age: {age}</div>
      <div className="label">Gender: {gender}</div>

      {/* SVG icon using <img> tag */}
      <div className="flex flex-row gap-2 justify-end mt-2">
        <img
          onClick={handleModalClick}
          src={editIcon}
          alt="Edit Icon"
          className="w-5 h-5 cursor-pointer"
        />
        {isModalOpen && (
          <ModalEdit
            onClose={() => setIsModalOpen(false)}
            fullname={fullname}
            nickname={nickname}
            date={date}
            age={age}
            gender={gender}
          />
        )}
        <img
          onClick={handleModalClick}
          src={deleteIcon}
          alt="Delete Icon"
          className="w-5 h-5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Card;
