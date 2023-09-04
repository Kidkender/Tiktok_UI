import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8666915932507e12405ff1fffbaf006d.jpeg?x-expires=1694005200&x-signature=vdRxNzOm%2FQ6JnGsSkLwgVgR1k5o%3D"
        className={cx("avatar")}
        alt="Hoaaa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>Nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
