import axios from "axios";

// const URL = "https://tiktok.fullstack.edu.vn/api/";
// axios.defaults.headers.get["Content-Type"] =
//   "application/x-www-form-urlencoded";
// axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";

// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.get["access-control-allow-origin"] = "*";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJmZTBmM2RmNGI1NjA2OTRhMzc1YTQiLCJuYW1lIjoiZHVjayIsImlhdCI6MTY5MDI5NjU4OSwiZXhwIjoxNjkyODg4NTg5fQ.AYG-9XIiw_E5Pc9g-QbDlM6fEKbFXYJy3sSpZVdBkKo";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
const request = axios.create({
  // baseURL: "http://127.0.0.1:9999/tiktok.fullstack.edu.vn",
  baseURL: "http://tiktok.fullstack.edu.vn",
  withCredentials: true,
});

export const get = async ({ path, option = {} }) => {
  const response = await request.get(path);

  return response.data;
};

export default request;
