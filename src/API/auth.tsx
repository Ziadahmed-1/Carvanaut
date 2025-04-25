import axiosInstance from "./axiosInstance";
import axios from "axios";

type userData = {
  name?: string;
  email: string;
  password: string;
};

type errorData = {
  message: string;
  response: {
    data: string;
  };
};

export async function Register(authData: userData) {
  console.log(authData);
  try {
    const response = await axiosInstance.post("api/auth/register", authData);
    console.log("register succ", response.data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Narrowed down to AxiosError, safe to access `error.response`
      console.error("Axios error:", error.response?.data);
      throw new Error(
        error.response?.data?.msg ||
          error.response?.data ||
          "An error occurred while registering"
      );
    } else {
      // Fallback for non-Axios errors
      console.error("Unknown error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
}

export async function Login(authData: userData) {
  console.log(authData);

  try {
    const response = await axiosInstance.post("api/auth/login", authData);
    console.log("login succ", response.data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
      throw new Error(
        error.response?.data?.msg ||
          error.response?.data ||
          "An error occurred while logging in"
      );
    } else {
      console.error("Unknown error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
}
