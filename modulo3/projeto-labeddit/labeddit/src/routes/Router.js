import React from "react";
import { Routes, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = ({ setRightButtonText }) => {
  return (
    <Routes>
      <Route index element={<FeedPage />} />
      <Route
        path="/login"
        element={<LoginPage setRightButtonText={setRightButtonText} />}
      />
      <Route
        path="/cadastrar"
        element={<SignUpPage setRightButtonText={setRightButtonText} />}
      />
      <Route path="/post-page/:id" element={<PostPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default Router;
