export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goBack = (navigate) => {
  navigate(-1);
};

export const goToListsTripsPage = (navigate) => {
  navigate("/listTrip");
};

export const goToAdminHomePage = (navigate) => {
  navigate("/adminHome");
};

export const goToApplicationFormPage = (navigate, id) => {
  navigate(`/form/${id}`);
};

export const goToCreatTripPage = (navigate) => {
  navigate("/creatTrip");
};

export const goToLoginPage = (navigate) => {
  navigate("/login")
}

export const goToDetails = (navigate, id) => {
  navigate(`/detailsTrip/${id}`)
}

