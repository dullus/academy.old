import React, { useState } from "react";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import styles from "./ChoosePlayer.module.css";
const ChoosePlayer: React.FC = () => {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(5);
  return (
    <div className={styles.dropdown}>
      <button {...buttonProps}>Example</button>
      <div className={isOpen ? "visible" : ""} role="menu">
        <a {...itemProps[0]} href="https://example.com">
          Regular link
        </a>
        <a {...itemProps[1]}>With click handler</a>
      </div>
      INPUT
    </div>
  );
};

export default ChoosePlayer;
