import React from "react";
import "./Header.css";
import Typed from "react-typed";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <h2 className="headerTitleLg">Blogger</h2>
        <h6 className="headerTitlesm">
          <Typed
            strings={["Personal Development for Smart People"]}
            typeSpeed={40}
            backSpeed={50}        
            loop
          ></Typed>
        </h6>
      </div>
      <img
        className="headerImg"
        src="https://res.cloudinary.com/karthy/image/upload/v1649352742/avatar/blog-bg_buzpwt.jpg"
        alt="headerImg"
      />
    </div>
  );
}

export default Header;
