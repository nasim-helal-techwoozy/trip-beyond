import axios from "axios";

const travelport = axios.create({
  baseURL: "https://oauth.pp.travelport.com/oauth/oauth20",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// Function to get OAuth token
export const authTp = async () => {
  const data = new URLSearchParams();
  data.append("grant_type", "password");
  data.append("username", process.env.NEXT_PUBLIC_USERNAME as string);
  data.append("password", process.env.NEXT_PUBLIC_PASSWORD as string);
  data.append("client_id", process.env.NEXT_PUBLIC_CLIENT_ID as string);
  data.append("client_secret", process.env.NEXT_PUBLIC_CLIENT_SECRET as string);

  const response = await travelport.post("/token", data);
  const token = response.data;
  return token;
};
