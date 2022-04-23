// ENTER BASE URL
let BASE_URL = "https://www.jackfruit.one/api";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:8001/api";
  console.log("DEV SERVER");
}
export default BASE_URL;
