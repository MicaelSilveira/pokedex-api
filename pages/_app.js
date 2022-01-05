import Header from "../src/Components/Header";
import React from "react";
import "../styles/globals.css";

function MyApp({ Component }) {
  const [menuActive, setMenuActive] = React.useState(false);
  return (
    <>
      <Header setMenuActive={setMenuActive} menuActive={menuActive} />
      <Component />
    </>
  );
}

export default MyApp;
