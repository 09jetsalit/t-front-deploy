import React, { useState } from 'react';
import Modal from './modal'; // Import Modal component ที่คุณได้สร้างไว้

const Nav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // state เพื่อเก็บสถานะของ Modal

    const handleAddMemberClick = () => {
        setIsModalOpen(true); // เมื่อคลิก "Add member" เปิด Modal
    };

    return (
        <div>
            <nav className="bg-blue-500 flex justify-center py-2 px-4 fixed bottom-0 w-full">
                <button className='p-2 text-xl' onClick={handleAddMemberClick}>Add member</button>
            </nav>
            {/* แสดง Modal เมื่อ isModalOpen เป็น true */}
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}

export default Nav;
