import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import DropDown from "../components/DropDown";
import { Button } from "./ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router";

type option = {
  name: string;
  icon: React.ReactNode;
  action?: () => void;
};

const handleLogOut = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

function NavBar() {
  const navigate = useNavigate();
  const userData = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;

  const handleLogIn = () => {
    navigate("/auth");
  };

  const userDDOptions: option[] = [
    {
      name: "Log Out",
      icon: <CiLogout />,
      action: handleLogOut,
    },
  ];

  const authenticatedMobileOptions: option[] = [
    {
      name: "Log Out",
      icon: <CiLogout />,
      action: handleLogOut,
    },
  ];

  const mobileOptions: option[] = [
    {
      name: "Sign In",
      icon: <CiLogin />,
      action: handleLogIn,
    },
  ];
  return (
    <div className="w-screen sticky top-0 z-50 border-b-2 flex items-center justify-between px-10 py-4">
      <div>
        <img src="" alt="" />
        <a href="/">
          <h3 className="font-bold text-3xl">Carvanaut</h3>
        </a>
      </div>
      <ul className="flex gap-5">
        <li>
          <a href="page1">Page 1</a>
        </li>
        <li>
          <a href="page2">Page 2</a>
        </li>
        <li>
          <a href="page3">Page 3</a>
        </li>
      </ul>

      <div className="hidden md:block">
        {userData ? (
          <DropDown
            title={userData.name}
            data={userDDOptions}
            userName={userData?.name}
          />
        ) : (
          <a href="/auth">
            <Button> Login </Button>
          </a>
        )}
      </div>
      <div className="md:hidden">
        <DropDown
          title={<RxHamburgerMenu />}
          data={userData ? authenticatedMobileOptions : mobileOptions}
          userName={userData?.name || null}
        />
      </div>
    </div>
  );
}

export default NavBar;
