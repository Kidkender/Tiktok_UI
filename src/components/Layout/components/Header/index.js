import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>
        <div className={cx("search")}>
          <input placeholder="Search account and videos" spellCheck={false} />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <div className={cx("actions")}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
