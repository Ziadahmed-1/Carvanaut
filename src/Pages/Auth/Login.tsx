import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import toast from "react-hot-toast";
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useNavigate } from "react-router";

function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordView, setPasswordView] = useState<string>("password");
  const navigate = useNavigate();

  const cursorStyle = !userName || !password ? "cursor-not-allowed" : "";

  function handleSignIn() {
    const success = userName === "lilkmbr" && password === "lilkmbr";
    if (success) {
      toast.success("Login Successful");
      localStorage.setItem("user", JSON.stringify({ name: userName }));
      navigate("/");
    } else {
      toast.error("Login Failed");
    }
  }
  return (
    <div className="flex justify-center items-center h-full w-full md:min-w-[300px]">
      <div className="flex flex-col gap-5">
        <h3 className="text-3xl font-bold">Sign In</h3>
        <div>
          <label>User Name</label>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
          <a href="auth/resetpassword" className="text-xs underline">
            Forgot Password?
          </a>
        </div>
        <Button
          variant="default"
          disabled={!userName || !password}
          className={`mt-5 ${cursorStyle}`}
          type="submit"
          onClick={handleSignIn}
        >
          Proceed
        </Button>
        <hr />
        <a href="auth/register">
          <Button variant="default" className="w-full" type="submit">
            A New User ?
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Login;
