import React from "react";
import styles from "./HeaderMenu.module.css";
const HeaderMenu = ({ setFeedList }) => {
  function handleClick({ target, currentTarget }) {
    const lista = currentTarget.querySelectorAll("li");
    if (target === currentTarget) {
      return false;
    } else {
      lista.forEach((i) => {
        i.classList.remove("ativo");
      });
      target.classList.toggle("ativo");
      const feedStateString = target.dataset.feed.split(",");
      setFeedList({ inicio: +feedStateString[0], final: +feedStateString[1] });
    }
  }
  return (
    <div className={`${styles.menu} animeDown`}>
      <ul className={`${styles.menuList} animeLeft`} onClick={handleClick}>
        <li data-feed="1,100">1-Geração</li>
        <li data-feed="100,200">2-Geração</li>
        <li data-feed="200,300">3-Geração</li>
        <li data-feed="300,400">4-Geração</li>
        <li data-feed="400,500">5-Geração</li>
        <li data-feed="500,600">6-Geração</li>
        <li data-feed="600,700">7-Geração</li>
        <li data-feed="700,800">8-Geração</li>
      </ul>
    </div>
  );
};
export default HeaderMenu;
