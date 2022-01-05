import React from "react";
import styles from "./HeaderMenu.module.css";
const HeaderMenu = () => {
  function handleClick({ target, currentTarget }) {
    const lista = currentTarget.querySelectorAll("li");
    if (target === currentTarget) {
      return false;
    }
    lista.forEach((i) => {
      i.classList.remove("ativo");
    });
    target.classList.toggle("ativo");
  }
  return (
    <div className={`${styles.menu} animeLeft`}>
      <ul className={`${styles.menuList} animeLeft`} onClick={handleClick}>
        <li>1-Geraçao</li>
        <li>2-Geraçao</li>
        <li>3-Geraçao</li>
        <li>4-Geraçao</li>
        <li>5-Geraçao</li>
        <li>6-Geraçao</li>
        <li>7-Geraçao</li>
        <li>8-Geraçao</li>
      </ul>
    </div>
  );
};
export default HeaderMenu;
