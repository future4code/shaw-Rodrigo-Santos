export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToFeedPage = (navigate) => {
    navigate("/")
}

export const goToSignUp = (navigate) => {
    navigate("/cadastrar")
}

export const goToPostPage = (navigate, id) => {
    navigate(`/post-page/${id}`)
}

export const goToBack = (navigate) => {
    navigate(-1);
  };
