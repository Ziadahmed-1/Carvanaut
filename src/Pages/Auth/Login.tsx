import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import toast from "react-hot-toast";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router";
import AuthMutations from "./AuthMutations";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordView, setPasswordView] = useState<string>("password");

  const cursorStyle = !email || !password ? "cursor-not-allowed" : "";

  const { loginMutation } = AuthMutations();
  function handleSignIn() {
    if (!email || !password) return toast.error("Please fill all the fields");

    loginMutation.mutate({ email: email, password });
  }
  return (
    <div className="flex justify-center items-center h-full w-full md:min-w-[300px]">
      <div className="flex flex-col gap-5">
        <h3 className="text-3xl font-bold">Sign In</h3>
        <div>
          <label>Email</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            required
            className="bg-white"
          />
        </div>
        <div>
          <label>Password</label>
          <div className="relative">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={passwordView}
              required
              className="bg-white"
            />
            <div
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() =>
                setPasswordView(
                  passwordView === "password" ? "text" : "password"
                )
              }
            >
              {passwordView === "password" ? <LuEyeClosed /> : <LuEye />}
            </div>
          </div>
          <Link to="auth/resetpassword" className="text-xs underline">
            Forgot Password?
          </Link>
        </div>
        <Button
          variant="default"
          disabled={!email || !password}
          className={`mt-5 ${cursorStyle}`}
          type="submit"
          onClick={handleSignIn}
        >
          Proceed
        </Button>
        <hr />
        <Link to="/auth/register">
          <Button variant="default" className="w-full" type="submit">
            A New User ?
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
