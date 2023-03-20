import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const Profile = () => {
  const { username } = useParams();
  let navigate = useNavigate();
  return (
    <div>
      Profile of {username}
      <button onClick={() => navigate("/")}>Back to home</button>
    </div>
  );
};

export default Profile;
