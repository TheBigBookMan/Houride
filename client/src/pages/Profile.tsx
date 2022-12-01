import ProfileInfo from "../components/features/profile/ProfileInfo";
import PersonalInfo from "../components/features/profile/PersonalInfo";
import Settings from "../components/features/profile/Settings";
import ProfileSelect from "../components/features/profile/ProfileSelect";
import Support from "../components/features/profile/Support";
import ChangeDetails from "../components/features/profile/ChangeDetails";
import { Link, Routes, Route } from "react-router-dom";

//? this will be a page of its own but add a link to it
//! car rental - page to set up hiring out your car (car info, car images, specific events, reviews, rating, dates free, email user, message user on app, price, any comments, potential map of radius user willing to do)

//! Change language/change currency

//! logout button

//TODO import react router for path links to the components

//TODO make each list item group hover and group active click to the link
//TODO might need to add into the hardcode array listitems the path component, cant remember if thats here or other spot

//TODO import icons for each section

const Profile = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl text-center mt-2">Profile</h1>
      <Routes>
        <Route index element={<ProfileSelect />} />
        <Route path="profile-info" element={<ProfileInfo />} />
        <Route path="personal-info" element={<PersonalInfo />} />
        <Route path="settings" element={<Settings />} />
        <Route path="support" element={<Support />} />
        <Route path="change-details" element={<ChangeDetails />} />
      </Routes>
    </div>
  );
};

export default Profile;
