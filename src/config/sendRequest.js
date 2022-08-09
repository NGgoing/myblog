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

//get article type
export function getType() {
  return myAxios.get("/getType");
}

//post article detail
export function postArticle(data) {
  return myAxios.post("/postArticle", data);
}

// post new item to foreign relations table
export function postItem(data) {
  return myAxios.post("/addItem", data);
}

// get all article
export function getAllArticle() {
  return myAxios.get("/public/getAllArticle");
}

// get the selected article
export function getSeletedArticle(aid) {
  return myAxios.get(`/public/getSelectedArticle/${aid}`);
}

// get the article by query string
export function getArticleByQueryString(qs) {
  return myAxios.get(`/public/getArticleByQueryString?qs=${qs}`);
}

//test token is valid or not
export function testToken() {
  return myAxios.get(`/test`);
}
