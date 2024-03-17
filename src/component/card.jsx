import deleteIcon from "../assets/delete-black.svg";
import editIcon from "../assets/edit.svg"

const Card = ({ fullname, nickname, date, age, gender }) => {
  return (
    <div className="card">
      <div className="label">Full name: {fullname}</div>
      <div className="label">Nickname: {nickname}</div>
      <div className="label">Date of Birth: {date}</div>
      <div className="label">Age: {age}</div>
      <div className="label">Gender: {gender}</div>
      
      {/* SVG icon using <img> tag */}
      <div className="flex flex-row gap-2 justify-end mt-2">
      <img src={editIcon} alt="Edit Icon" className="w-5 h-5" />
      <img src={deleteIcon} alt="Delete Icon" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Card;
