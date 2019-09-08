import React, { Component } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoIosLocate,
  IoIosContact,
  IoIosSettings,
  IoIosMail,
  IoIosLogOut
} from "react-icons/io";
import Logo from "../../assets/Logo/Logo.png";
import styles from "../NavigationBarLogin/NavigationBarLogin.css";

class AdminNavigationBar extends Component {
  state = {
    isOpenDropDown: false,
    uname: "",
    collage: "",
    islogged: true
  };

  handleOpenDropDown = () => {
    this.setState({ isOpenDropDown: !this.state.isOpenDropDown });
  };

  render() {
    return (
      <div>
        <header className={styles.header}>
          <div className={styles.header_items}>
            <div className={styles.logo_container}>
              <img src={Logo} alt="logo" className={styles.logo} />
              <h2 className={styles.logo_name}>Audelia</h2>
              <h2 className={styles.school_name}> {this.state.collage}</h2>
            </div>
            <button
              className={styles.profile_name_button}
              onClick={this.handleOpenDropDown}
            >
              <span>{this.state.uname}</span>
              <div
                className={styles.dropdown_icon}
                hidden={!this.state.islogged}
              >
                {this.state.isOpenDropDown ? (
                  <IoMdArrowDropup size="2em" color="#27226bc5" />
                ) : (
                  <IoMdArrowDropdown size="2em" color="#27226bc5" />
                )}
              </div>
            </button>
            <div
              className={
                this.state.isOpenDropDown
                  ? styles.dropdown_container
                  : styles.dropdown_container_hide
              }
            >
              <button className={styles.dropdown_button}>
                <div>
                  <IoIosLocate size="1.5em" />
                </div>
                <span>DashBoard</span>
              </button>
              <button className={styles.dropdown_button}>
                <div>
                  <IoIosContact size="1.5em" />
                </div>
                <span>Profile</span>
              </button>
              <button className={styles.dropdown_button}>
                <div>
                  <IoIosMail size="1.5em" />
                </div>
                <span>Messages</span>
              </button>
              <button className={styles.dropdown_button}>
                <div>
                  <IoIosSettings size="1.5em" />
                </div>
                <span>Preferences</span>
              </button>
              <button className={styles.dropdown_button}>
                <div>
                  <IoIosLogOut size="1.5em" />
                </div>
                <span>Log out</span>
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default AdminNavigationBar;
