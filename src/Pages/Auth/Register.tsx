import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

function Register() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [passwordView, setPasswordView] = useState<string>("password");
  const [email, setEmail] = useState<string>("");

  function handleRegisted() {}
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
        <a href="/auth">
          <Button variant="default" className="w-full" type="submit">
            Have an account ?
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Register;
