import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useHistory } from "react-router-dom";
// import * as ReactBootStrap from "react-bootstrap";
// import Avatar from "@mui/material/Avatar";
import "./TopBar.css";

function TopBar() {
  const { user, dispatch } = useContext(Context);
  const history = useHistory();
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };
  return (
    <div className="top">
      <div className="TopLeft">
        <img
          className="topIcon"
          src="https://res.cloudinary.com/karthy/image/upload/v1648922182/avatar/favicon_izhu3i.ico"
          alt="logo"
        />

        <h3 className="appName">Blogger</h3>
      </div>
      <div className="TopCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="TopRight">
        {user ? (
          <Link to="/settings" className="TopRightSettings">          
            <img
              className="topImg"
              src=
                {PF+ user.profilePic} 
              alt={user.name}
            />
            <h4 className="topListItem " >{user.username}</h4>
          </Link>
          
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        
      </div>
    </div>
  );
}

export default TopBar;


