import React, { useContext } from "react";
import jwt from "jsonwebtoken";
import AuthContext from "../context/AuthContext";

function UserGreeting({ onLogout }) {
  const { accessToken } = useContext(AuthContext);
  return (
    <>
      {accessToken ? (
        <>
          <div className="card-body">
            <h3 className="card-title text-center">TASKS LIST</h3>
            <p className="card-text text-right">
              Witaj {getUserEmail(accessToken)} /
              <a href="#" className="" onClick={onLogout}>
                wyloguj się
              </a>
            </p>
          </div>
        </>
      ) : null}
    </>
  );
}

export default UserGreeting;

function getUserEmail(token) {
  const decodedToken = jwt.decode(token);
  return decodedToken.email;
}
