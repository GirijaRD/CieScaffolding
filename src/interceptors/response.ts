import axios from "axios";

axios.interceptors.response.use(res => {
    console.log(res.data.json);
    // Important: response interceptors **must** return the response.
    return res;
  });
  