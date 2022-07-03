import myAxios from "./myAxios";

//login
export function login(data) {
  return myAxios.post("/private/login", data);
}

//register
export function register(data) {
  return myAxios.post("/private/register", data);
}

//get current user info
export function getCurrentUser(currUser) {
  return myAxios.get(`/private/getuser/${currUser}`);
}

//test token is valid or not
export function testToken() {
  return myAxios.get(`/test`);
}
