import { UploadIcon } from "~/components/Icon/Icon";
import Tippy from "@tippyjs/react";
import { MessageIcon } from "../../../components/Icon/Icon";
import { InboxIcon } from "~/components/Icon/Icon";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import "tippy.js/dist/tippy.css"; // optional

const cx = classNames.bind(styles);

function MenuNotLogin() {
  return (
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
  );
}

export default MenuNotLogin;
