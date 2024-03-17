import React, { useState } from "react";
import deleteIcon from "../assets/delete-black.svg";
import editIcon from "../assets/edit.svg";
import ModalEdit from "../modal/modal-edit";
import ModalDelete from "../modal/modal.delete";

const Card = ({ id, fullname, nickname, date, age, gender }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for edit modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for delete modal

  const handleEditClick = () => {
    setIsEditModalOpen(true); // Open edit modal
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true); // Open delete modal
  };

  return (
    <div className="card">
      <div className="label">Full name: {fullname}</div>
      <div className="label">Nickname: {nickname}</div>
      <div className="label">Date of Birth: {date}</div>
      <div className="label">Age: {age}</div>
      <div className="label">Gender: {gender}</div>

      {/* Edit and Delete Icons */}
      <div className="flex flex-row gap-2 justify-end mt-2">
        <img
          onClick={handleEditClick}
          src={editIcon}
          alt="Edit Icon"
          className="w-5 h-5 cursor-pointer icon-hover"
        />
        {isEditModalOpen && (
          <ModalEdit
            onClose={() => setIsEditModalOpen(false)}
            id={id}
            fullname={fullname}
            nickname={nickname}
            date={date}
            age={age}
            gender={gender}
          />
        )}
        <img
          onClick={handleDeleteClick}
          src={deleteIcon}
          alt="Delete Icon"
          className="w-5 h-5 cursor-pointer"
        />
        {isDeleteModalOpen && (
          <ModalDelete
            onClose={() => setIsDeleteModalOpen(false)}
            id={id}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
