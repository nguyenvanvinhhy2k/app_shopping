import axios from "axios";

const token = "";
export default axios.create({
  baseURL: "https://localhost:44309/api/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
