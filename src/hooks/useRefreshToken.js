import axios from "~/utils/request";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accesstoken);
      return { ...prev, accesstoken: response.data.accesstoken };
    });
    return response.data.accesstoken;
  };
  return refresh;
};

export default useRefreshToken;
