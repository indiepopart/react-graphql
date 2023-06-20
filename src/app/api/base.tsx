import axios from "axios";

export const backendAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER
});


export default backendAPI; //why is this required, MODULE Undefined otherwise
