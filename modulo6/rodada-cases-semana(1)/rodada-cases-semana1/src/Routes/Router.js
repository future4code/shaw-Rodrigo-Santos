import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart/cart";
import Feed from "../Pages/Feed/feed";
import Login from "../Pages/Login/login";
import Profile from "../Pages/Profile/profile";
import ProfileEdit from "../Pages/ProfileEdit/profileEdit";
import Restaurant from "../Pages/Restaurant/restaurant";
import SignUp from "../Pages/SignUp/signUp";
import SignUpAdress from "../Pages/SignUpAdress/signUpAdress";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUp/adress" element={<SignUpAdress />} />
        <Route path="/feed/:restaurantId" element={<Restaurant />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<ProfileEdit />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
