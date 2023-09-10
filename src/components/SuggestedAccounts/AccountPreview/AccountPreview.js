import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1653274089859073.jpeg?x-expires=1694498400&x-signature=S%2FlrmWVXKGc9Z8PbI8CcYnin%2Fkc%3D"
          alt=""
        />
        <Button className={cx("follow-btn")} primary>
          Follow{" "}
        </Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>VanANguyen</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Nguyen Van A</p>

        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M</strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>8.2M</strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
