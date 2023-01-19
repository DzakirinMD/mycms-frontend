import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:50000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;