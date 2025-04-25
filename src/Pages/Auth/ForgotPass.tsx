import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router";

function ForgotPass() {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="flex justify-center items-center h-full w-full md:min-w-[300px]">
      <div className="flex flex-col gap-5">
        <h3 className="text-3xl font-bold">Password Reset</h3>
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

        <Button
          variant="default"
          disabled={!email}
          className={`mt-5`}
          type="submit"
        >
          Next
        </Button>
        <hr />
        <div className="flex gap-5 justify-between">
          <Link className="w-full" to="/auth">
            <Button variant="default" className="w-full" type="submit">
              Sign In
            </Button>
          </Link>
          <Link className="w-full" to="/auth/register">
            <Button variant="default" className="w-full" type="submit">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
