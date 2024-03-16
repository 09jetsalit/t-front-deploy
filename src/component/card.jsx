const Card = ({ fullname, nickname, date, age, gender }) => {
  return (
    <div className="card">
      <div className="label">Full name: {fullname}</div>

      <div className="label">Nickname: {nickname}</div>

      <div className="label">Date of Birth: {date}</div>

      <div className="label">Age: {age}</div>

      <div className="label">Gender: {gender}</div>
    </div>
  );
};

export default Card;
