import { Login, Register } from "@/API/auth";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

type UserData = {
  name?: string;
  email: string;
  password: string;
};

// Define the error type (assuming the error message is a string)
type ErrorType = {
  message: string;
};

function AuthMutations() {
  const navigate = useNavigate();

  const registerMutation = useMutation<void, ErrorType, UserData>({
    mutationKey: ["register"],
    mutationFn: (body: UserData) => Register(body), // specify body type here
    onSuccess: () => {
      toast.success("Registered Successfully");
      navigate("/auth");
    },
    onError: (error: ErrorType) => {
      toast.error(error.message); // handle error message properly
    },
  });

  const loginMutation = useMutation<void, ErrorType, UserData>({
    mutationKey: ["login"],
    mutationFn: (body: UserData) => Login(body), // specify body type here
    onSuccess: (data) => {
      toast.success("Logged In Successfully");
      localStorage.setItem("authUser", JSON.stringify(data));
      navigate("/");
    },
    onError: (error: ErrorType) => {
      toast.error(error.message); // handle error message properly
    },
  });

  return { registerMutation, loginMutation };
}

export default AuthMutations;
