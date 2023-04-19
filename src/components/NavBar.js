import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  let href = links.map((url)=>{
    return <a key={url} href={`#${url}`}>{url}</a>
  })

  return <nav>{href}</nav>;
}

export default NavBar;
