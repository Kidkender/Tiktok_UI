import axios from "axios";

const request = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn",
  withCredentials: false,
});

export const get = async ({
  path = "/api/users/search?q=h&type=less",
  option = {},
}) => {
  console.log(path);
  const response = await request.get(path);

  return response.data;
};

export default request;
