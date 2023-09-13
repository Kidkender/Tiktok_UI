import { faUber } from "@fortawesome/free-brands-svg-icons";
import {
  faCoins,
  faEllipsisVertical,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

import "tippy.js/dist/tippy.css"; // optional
import images from "~/assets/images";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu/Menu";

import { useEffect, useState } from "react";
import Image from "~/components/Image/Image";
import config from "~/config";
import Search from "../Search/Search";
import MenuNotLogin from "./MenuNotLogin";
import { MENU_ITEMS } from "./Menu_Item";

const cx = classNames.bind(styles);

function Header(props) {
  // const currentUser = false;
  const [currentUser, setcurrentUser] = useState(false);
  console.log("isUserCurrent ?", currentUser);
  useEffect(() => {
    console.log("Ineffetc", currentUser);
  }, [currentUser]);

  //Handle Logic
  const handleMenuChange = (menuItem) => {};

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUber} />,
      title: "View profile",
      to: "/@hoa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/getcoin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Logout",
      // to: "logout",
      separate: true,
    },
  ];
  const handleLogin = () => {
    // setcurrentUser(true);
  };
  const handleLogoutClick = (isLogout) => {
    if (isLogout) {
      setcurrentUser(false);
    }
  };

  const renderItemMenu = () => {
    if (!currentUser) {
      return userMenu;
    }
    return MENU_ITEMS;
    // return !currentUser ? userMenu : MENU_ITEMS;
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo-link")}>
          <img src={images.logo} alt="logo" />
        </Link>

        {/* Search */}
        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <MenuNotLogin />
          ) : (
            <>
              <Button text>Upload</Button>
              <Button
                primary
                to="/Login"
                // onClick={handleLogin}
              >
                Login
              </Button>

              {/* Prop box */}
            </>
          )}
          <Menu
            tabIndex=""
            items={renderItemMenu()}
            onLogoutClick={handleLogoutClick}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="#"
                alt="avt"
                fallback="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/613cafb244ede8d6ab0cb64f3e69e8be~c5_100x100.jpeg?x-expires=1694113200&x-signature=JdlvTbVb8KrxxT4LuO6WzJhCJkY%3D"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
