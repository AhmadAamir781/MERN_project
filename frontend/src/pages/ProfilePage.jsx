import React from "react";
import useGetCurrentUser from "../hooks/useGetCurrentUser";

const ProfilePage = () => {
  const { currentUserName } = useGetCurrentUser();
  return (
    <>
      <div className="wrapper profile-wrapper">
        <h2>Welcome!</h2>
        <p>{currentUserName}</p>
      </div>
    </>
  );
};

export default ProfilePage;
