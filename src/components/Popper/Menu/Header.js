import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Header({ onBack, title }) {
  return (
    <header className={cx("header")}>
      <button className={cx("back-btn")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h3 className={cx("header-title")}>{title}</h3>
    </header>
  );
}

export default Header;
