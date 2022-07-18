import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const items = links.map((link) => (
    <a key={link} href={"#" + link}>{link}</a>
  ));
  return <nav>{items}</nav>;
}

export default NavBar;
