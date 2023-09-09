import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import { faUber } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Button from "~/components/Button";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import "tippy.js/dist/tippy.css"; // optional

import Image from "~/components/Image";
import { MessageIcon, InboxIcon, UploadIcon } from "~/components/Icon/index";
import Search from "./Search";
import config from "~/config";
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    to: "/",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "china",
          title: "中文",
        },
        {
          type: "language",
          code: "jpn",
          title: "日本語",
        },
        {
          type: "language",
          code: "fr",
          title: "Français",
        },
        {
          type: "language",
          code: "es",
          title: "Español",
        },

        {
          type: "language",
          code: "kr",
          title: "한국인",
        },
        {
          type: "language",
          code: "rusia",
          title: "Русский",
        },

        {
          type: "language",
          code: "ger",
          title: "Germany",
        },
        {
          type: "language",
          code: "Italy",
          title: "Italy",
        },
        {
          type: "language",
          code: "malay",
          title: "Malaysia",
        },
        {
          type: "language",
          code: "indo",
          title: "Indonesia",
        },

        {
          type: "language",
          code: "Lao",
          title: "Lao",
        },
        {
          type: "language",
          code: "Latin",
          title: "Latin",
        },
        {
          type: "language",
          code: "arabic",
          title: "Arabic",
        },
        {
          type: "language",
          code: "romani",
          title: "Romanian",
        },

        {
          type: "language",
          code: "thai",
          title: "Thai lan",
        },
        {
          type: "language",
          code: "can",
          title: "Canada",
        },
        {
          type: "language",
          code: "turkmen",
          title: "Turkmen",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },

  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
    to: "/",
  },
];
function Header() {
  const currentUser = true;

  //Handle Logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

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
      to: "logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo-link")}>
          <img src={images.logo} alt="logo" />
        </Link>

        {/* <div className={cx("logo")}></div> */}
        {/* Search */}
        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>

              {/* Prop box */}
            </>
          )}
          <Menu
            tabIndex=""
            items={currentUser ? userMenu : MENU_ITEMS}
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
