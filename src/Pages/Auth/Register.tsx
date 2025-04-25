import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import toast from "react-hot-toast";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router";
import AuthMutations from "./AuthMutations";

function Register() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordView, setPasswordView] = useState<string>("password");
  const [email, setEmail] = useState<string>("");

  const { registerMutation } = AuthMutations();

  function handleRegisted() {
    if (!userName || !email || !password)
      return toast.error("Please fill all the fields");

    registerMutation.mutate({ name: userName, email, password });
  }
  return (
    <div className="flex justify-center items-center h-full w-full md:min-w-[300px]">
      <div className="flex flex-col gap-5">
        <h3 className="text-3xl font-bold">Register</h3>
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
          <label>Email</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
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
        </div>
        <Button
          variant="default"
          disabled={!userName || !password || !email}
          className={`mt-5`}
          type="submit"
          onClick={handleRegisted}
        >
          Proceed
        </Button>
        <hr />
        <Link to="/auth">
          <Button variant="default" className="w-full" type="submit">
            Have an account ?
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
