import React from "react";

export default function TeamCard({ member, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img
        src={process.env.PUBLIC_URL + "/" + member.photo}
        alt={member.name}
        className="avatar"
      />
      <h3>{member.name}</h3>
    </div>
  );
}
