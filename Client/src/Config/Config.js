import axios from "axios";
export const axio = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://kavinkumar-portfolio.onrender.com",
  headers: { 
  "X-Custom-Header": "foobar",
  "Accept": "application/json",
  "Content-Type": undefined},
});
