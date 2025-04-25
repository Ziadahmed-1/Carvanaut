import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import DropDown from "../components/DropDown";
import { Button } from "./ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import useMainStore from "../Zustand/Main/MainStore";
import { useEffect } from "react";
import { GrFavorite } from "react-icons/gr";
import { CiBoxList } from "react-icons/ci";

type option = {
  name: string;
  icon: React.ReactNode;
  action?: () => void;
};

function NavBar() {
  const { user, setUser } = useMainStore((state) => state);
  console.log(user);
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/auth");
  };

  const handleLogOut = () => {
    localStorage.removeItem("authUser");
    setUser();
    window.location.reload();
  };

  useEffect(() => {
    setUser();
  }, []);

  const userDDOptions: option[] = [
    {
      name: "Log Out",
      icon: <CiLogout size={16} />,
      action: handleLogOut,
    },
    {
      name: "Favorites",
      icon: <GrFavorite size={16} />,
      action: () => navigate("/favorites"),
    },
    {
      name: "My Listings",
      icon: <CiBoxList size={16} />,
      action: () => navigate("/my-listings"),
    },
  ];

  const authenticatedMobileOptions: option[] = [
    {
      name: "Log Out",
      icon: <CiLogout size={16} />,
      action: handleLogOut,
    },
    {
      name: "Favorites",
      icon: <GrFavorite size={16} />,
      action: () => navigate("/favorites"),
    },
    {
      name: "My Listings",
      icon: <CiBoxList size={16} />,
      action: () => navigate("/my-listings"),
    },
  ];

  const mobileOptions: option[] = [
    {
      name: "Sign In",
      icon: <CiLogin size={16} />,
      action: handleLogIn,
    },
  ];
  return (
    <div className="w-screen sticky top-0 z-50 border-b-2 flex items-center justify-between px-10 py-4">
      <div>
        <img src="" alt="" />
        <Link to="/">
          <h3 className="font-bold text-3xl">Carvanaut</h3>
        </Link>
      </div>
      <ul className="flex gap-5">
        <li>
          <Link to="page1">Page 1 </Link>
        </li>
        <li>
          <Link to="page2">Page 2 </Link>
        </li>
        <li>
          <Link to="page3">Page 3 </Link>
        </li>
      </ul>

      <div className="hidden md:block">
        {user ? (
          <DropDown
            title={user?.user.name}
            data={userDDOptions}
            userName={user?.user?.name}
          />
        ) : (
          <Link to="/auth">
            <Button> Login </Button>
          </Link>
        )}
      </div>
      <div className="md:hidden">
        <DropDown
          title={<RxHamburgerMenu />}
          data={user?.user ? authenticatedMobileOptions : mobileOptions}
          userName={user?.user?.name || null}
        />
      </div>
    </div>
  );
}

export default NavBar;
