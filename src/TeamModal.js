import React, { useState, useEffect } from "react";

export default function TeamModal({ member, onClose }) {
  const [showReplace, setShowReplace] = useState(false);

  useEffect(() => {
    if (member.replacedBy) {
      setTimeout(() => setShowReplace(true), 1500);
    }
  }, [member]);

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        {/* Caso normal */}
        {!member.replacedBy && (
          <>
            <img
              src={process.env.PUBLIC_URL + "/" + member.photo}
              alt={member.name}
              className="modal-img"
            />
            <h2>{member.name}</h2>
            <p>{member.description}</p>
          </>
        )}

        {/* Caso reemplazado */}
        {member.replacedBy && (
          <>
            {!showReplace ? (
              <div className="replace-box">
                <div className="explode-container">
                  <img
                    src={process.env.PUBLIC_URL + "/" + member.photo}
                    alt={member.name}
                    className="modal-img explode-img"
                  />

                  <div className="explode-x">X</div>
                </div>
              </div>
            ) : (
              /* AQUÍ YA NO USAMOS replace-box */
              <>
                <img
                  src={process.env.PUBLIC_URL + "/" + member.replacedBy.photo}
                  alt={member.replacedBy.name}
                  className="modal-img"
                />
                <h2>{member.replacedBy.name}</h2>
                <p>{member.replacedBy.description}</p>
              </>
            )}
          </>
        )}

        <button className="close-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
