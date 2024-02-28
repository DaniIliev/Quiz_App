import React, { useEffect, useState } from "react";
import * as userService from "../../services/userService";
import NavBar from "../shared/NavBar";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAllUsers().then((data) => setUsers(data));
  }, []);
  
  return (
    <>
      <div className="worldRanking">
        <NavBar showButtonPlay={true}/>
        <div className="listUsers">
          <ul>
            {users.map((user, index) => (
              <li key={user.id} className="userWrapp">
                {index + 1 == 1 ? (
                  <img
                    src="/icons/GOLD.jpeg"
                    alt="goldmedal"
                    width={25}
                    height={40}
                  />
                ) : index + 1 == 2 ? (
                  <img
                    src="/icons/SILVER.jpeg"
                    alt="silver"
                    width={25}
                    height={40}
                  />
                ) : index + 1 == 3 ? (
                  <img
                    src="/icons/BRONZE.jpeg"
                    alt="bronze"
                    width={25}
                    height={40}
                  />
                ) : (
                  <span className="num">{index + 1}</span>
                )}
                {user.username.toLocaleUpperCase()} has a total profit of{" "}
                {user.profit}
                <img src="/icons/dollar.png" alt="" width={25} height={25} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
