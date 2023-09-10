import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);
function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        offset={[-20, 0]}
        interactive
        delay={[800, 0]}
        render={renderPreview}
        placement="bottom"
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            alt="avt"
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1653274089859073.jpeg?x-expires=1694498400&x-signature=S%2FlrmWVXKGc9Z8PbI8CcYnin%2Fkc%3D"
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>Nguyen Van A</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Nguyen Van A</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
