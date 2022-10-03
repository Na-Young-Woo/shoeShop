import React from "react";
import Orders from "../components/profileComponents/Orders";
import ProfileTabs from "../components/profileComponents/ProfileTabs";

const ProfileScreen = () => {
  return (
    <div>
      <ProfileTabs />
      <Orders />
    </div>
  );
};

export default ProfileScreen;
