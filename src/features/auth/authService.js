const API_URL = "https://books-library-dev.herokuapp.com/api/user/";
const LOGIN_URL = API_URL + "login";
const REGISTER_URL = API_URL + "register";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const register = async (credentials) => {
  options.body = JSON.stringify(credentials);
  console.log(options.body);
  const res = await fetch(REGISTER_URL, options);

  if (!res.ok) {
    const { error } = await res.json();
    throw new Error(error);
  }

  return await res.json();
};

const login = async (credentials) => {
  options.body = JSON.stringify(credentials);
  const res = await fetch(LOGIN_URL, options);

  if (!res.ok) {
    const { error } = await res.json();
    throw new Error(error);
  }

  const { token } = await res.json();

  localStorage.setItem("token", JSON.stringify(token));

  return token;
};

const logout = async () => {
  localStorage.removeItem("token");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
