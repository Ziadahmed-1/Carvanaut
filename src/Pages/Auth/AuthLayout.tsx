import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="rounded-xl flex w-5/6 md:w-1/2 h-3/4 min-h-[600px] md:min-w-[800px] shadow-xl  bg-neutral-50">
        <img
          src="/auth-img.avif"
          alt="Car Image"
          className="h-full aspect-auto rounded-l-xl hidden md:block"
        />
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
