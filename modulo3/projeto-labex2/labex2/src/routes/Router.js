import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import Error from "../pages/ErrorPage/Error";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="adminHome" element={<AdminHomePage />} />
        <Route path="/form/:id" element={<ApplicationFormPage />} />
        <Route path="creatTrip" element={<CreateTripPage />} />
        <Route path="listTrip" element={<ListTripsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/detailsTrip/:id" element={<TripDetailsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};


