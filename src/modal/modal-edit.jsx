import axios from "axios";
import React, { useState } from "react";

const ModalEdit = ({ onClose, id, fullname, nickname, date, age, gender }) => {
    const [fullNameEdit, setFullNameEdit] = useState(fullname);
    const [nickNameEdit, setNickNameEdit] = useState(nickname);
    const [dobEdit, setDOBEdit] = useState(date || '');
    const [ageEdit, setAgeEdit] = useState(age);
    const [genderEdit, setGenderEdit] = useState(gender);
    const [otherGender, setOtherGender] = useState("");

    const handleData = async () => {
      const data = {
        id: id,
        fullname: fullNameEdit,
        nickname: nickNameEdit,
        date0fbirth: dobEdit,
        age: ageEdit,
        gender: genderEdit,
      };
      try {
        const resposedata = await axios.put(`http://127.0.0.1:8000/member/${id}`, data);
        if (resposedata.status === 200 && resposedata.data) {
            onClose(); // Close the modal after deletion
        }
      } catch (error) {
        console.log(error);
      }
    };

    const handleDOBChange = (e) => {
        if (e && e.target && e.target.value) {
            const selectedDate = new Date(e.target.value);
            setDOBEdit(selectedDate.toISOString().split("T")[0]);
    
            // Calculate age from selected birthdate
            const currentDate = new Date();
            const birthDate = new Date(selectedDate);
            let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();
            const monthDiff = currentDate.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
                calculatedAge--;
            }
            setAgeEdit(calculatedAge);
        } else {
            console.error("Invalid date input:", e);
        }
    };

    const handleGenderChange = (e) => {
        const selectedGender = e.target.value.toLowerCase();
        if (selectedGender === "other") {
            setOtherGender("");
        }
        setGenderEdit(selectedGender);
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blue-sm flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="modal-content bg-white p-2 rounded-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="text-center mb-2 text-xl pt-3 font-bold">Edit member</div>
                <form
                    className="flex flex-col pr-20 pl-20"
                    onSubmit={(e) => e.preventDefault()}
                >
                    {/* fullname */}
                    <label htmlFor="fullname" className="flex flex-col items-center">
                        Full name:
                    </label>
                    <input
                        className="rounded-md border-2 border-slate-400 text-center"
                        name="fullname"
                        value={fullNameEdit}
                        onChange={(e) => setFullNameEdit(e.target.value)}
                        required
                    />

                    {/* nickname */}
                    <label htmlFor="nickname" className="flex flex-col items-center">
                        Nickname:
                    </label>
                    <input
                        className="rounded-md border-2 border-slate-400 text-center"
                        name="nickname"
                        value={nickNameEdit}
                        onChange={(e) => setNickNameEdit(e.target.value)}
                        required
                    />

                    {/* date of birth */}
                    <label htmlFor="DOB" className="flex flex-col items-center">
                        Date of Birth:
                    </label>
                    <input
                        type="date"
                        className="rounded-md border-2 border-slate-400 text-center"
                        name="DOB"
                        value={dobEdit}
                        onChange={handleDOBChange}
                        max={new Date().toISOString().split("T")[0]} // กำหนด max เป็นวันปัจจุบัน
                        required
                    />

                    {/* age */}
                    <label htmlFor="age" className="flex flex-col items-center">
                        Age:
                    </label>
                    <input
                        type="number"
                        className="rounded-md border-2 border-slate-400 text-center bg-gray-300"
                        name="age"
                        value={ageEdit}
                        readOnly // ไม่ต้องการให้แก้ไขข้อมูลอายุ
                        required
                    />

                    {/* gender */}
                    <label htmlFor="gender" className="flex flex-col items-center">
                        Gender:
                    </label>
                    <div className="flex items-center">
                        <label htmlFor="male" className="mr-2">
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                checked={genderEdit === "male"}
                                onChange={handleGenderChange}
                                required
                            />
                            Male
                        </label>
                        <label htmlFor="female" className="mr-2">
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                checked={genderEdit === "female"}
                                onChange={handleGenderChange}
                                required
                            />
                            Female
                        </label>
                        <label htmlFor="other">
                            <input
                                type="radio"
                                id="other"
                                name="gender"
                                value="other"
                                checked={genderEdit === "other"}
                                onChange={handleGenderChange}
                                required
                            />
                            Other
                        </label>
                    </div>
                    {genderEdit === "other" && (
                        <div className="mt-2">
                            <label
                                htmlFor="otherGender"
                                className="flex flex-col items-center"
                            >
                                Other Gender:
                            </label>
                            <input
                                type="text"
                                className="rounded-md border-2 border-slate-400"
                                name="otherGender"
                                value={otherGender}
                                onChange={(e) => setOtherGender(e.target.value)}
                                placeholder="specify other gender"
                                required
                            />
                        </div>
                    )}


                    {/* button */}
                    <div className="flex flex-row justify-center items-center flex-nowrap">
            <button
              onClick={handleData}
              className="bg-blue-500 rounded-md hover:bg-blue-200 p-1.5 mr-2 mt-2 mb-4"
            >
              Summit
            </button>
            <button
              onClick={onClose}
              className="p-1.5 mr-2 mt-2 mb-4 bg-slate-300 rounded-md hover:bg-slate-100"
            >
              Close
            </button>
          </div>
                </form>
            </div>
        </div>
    );
};

export default ModalEdit;
