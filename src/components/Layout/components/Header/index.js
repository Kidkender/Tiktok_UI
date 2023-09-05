import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faInbox,
  faKeyboard,
  faMagnifyingGlass,
  faSignOut,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";

import Tippy from "@tippyjs/react";

import { useState, useEffect } from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import "tippy.js/dist/tippy.css"; // optional
import {
  faFacebookMessenger,
  faUber,
} from "@fortawesome/free-brands-svg-icons";

import Image from "~/components/Image";

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
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feeback",
  },

  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
    to: "/",
  },
];
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

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
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>
        <HeadlessTippy
          interactive="true"
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search account and videos" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom" delay={[0, 200]}>
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                <button className={cx("action-btn")}>
                  {/* <InboxIcon /> */}
                  <FontAwesomeIcon icon={faInbox} />
                </button>
              </Tippy>
              <Tippy content="Messages" placement="bottom" delay={[0, 200]}>
                <button className={cx("action-btn")}>
                  {/* <MessagesIcon /> */}
                  <FontAwesomeIcon icon={faFacebookMessenger} />
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
