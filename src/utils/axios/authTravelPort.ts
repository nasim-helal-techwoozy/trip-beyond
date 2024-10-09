import axios from "axios";

const travelport = axios.create({
  baseURL: "https://oauth.pp.travelport.com/oauth/oauth20",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// Function to get OAuth token
export const getToken = async () => {
  const data = new URLSearchParams();
  data.append("grant_type", "password");
  data.append("username", process.env.USERNAME as string);
  data.append("password", process.env.PASSWORD as string);
  data.append("client_id", process.env.CLIENT_ID as string);
  data.append("client_secret", process.env.CLIENT_SECRET as string);
  data.append("scope", "openid");

  try {
    const response = await travelport.post("/token", data);
    console.log("Access Token:", response.data);
  } catch (error) {
    console.error("Error fetching token:", error);
  }
};
