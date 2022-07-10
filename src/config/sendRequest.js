import myAxios from "../utils/myAxios";

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

//get article type
export function getType() {
  return myAxios.get("/private/getType");
}

//post article detail
export function postArticle(data) {
  return myAxios.post("/private/postArticle", data);
}

// post new item to foreign relations table
export function postItem(data) {
  return myAxios.post("/private/addItem", data);
}

// get all article
export function getAllArticle() {
  return myAxios.get("/private/getAllArticle");
}

// get the selected article
export function getSeletedArticle(aid) {
  return myAxios.get(`/private/getSelectedArticle/${aid}`);
}

//test token is valid or not
export function testToken() {
  return myAxios.get(`/test`);
}
