import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "81f104c6acec4b84a679d8e31c2c3e27",
  },
});
