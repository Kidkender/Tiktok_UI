import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "~/layouts/components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import Login from "~/pages/Login";

const cx = classNames.bind(styles);
function DefaultLayout({ isSignedIn }) {
  // const { isSignedIn } = children;
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>
          {/* {!isSignedIn ? messSignedIn : ""}
          {!isSignedIn ? <Login /> : ""} */}
          {isSignedIn && <Login />}
        </div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
