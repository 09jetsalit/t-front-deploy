import React, { useState } from "react";
import Modal from "../modal/modal-addmember"; // Import Modal component ที่คุณได้สร้างไว้

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // state เพื่อเก็บสถานะของ Modal

  const handleAddMemberClick = () => {
    setIsModalOpen(true); // เมื่อคลิก "Add member" เปิด Modal
  };

  return (
    <div>
      <nav
        onClick={handleAddMemberClick}
        className="bg-[#0968ed] flex justify-center py-2 px-4 fixed bottom-0 w-full hover:bg-blue-300 hover:border-solid hover:border-2 hover:border-indigo-500/100 cursor-pointer"
      >
        <button className="p-2 text-xl" onClick={handleAddMemberClick}>
          Add member
        </button>
      </nav>
      {/* แสดง Modal เมื่อ isModalOpen เป็น true */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Nav;
