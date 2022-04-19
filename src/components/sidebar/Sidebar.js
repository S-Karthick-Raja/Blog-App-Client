import "./Sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Sidebar() {
  const [cats, setCats] = useState([]);
  // const history = useHistory();
  // const location = useLocation();
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://res.cloudinary.com/karthy/image/upload/v1648873957/avatar/20220327054258_IMG_0282_i6n72x.jpg"
          alt="about_me"
        />
        <p>
          Hey! I'm <span className="aboutName">Karthick Raja S</span> <br></br>A
          Developer & Designer based in India. I’m recently learning Web
          technologies and other design related topics, currently playing around
          with React , MongoDB and NodeJS 👨‍💻.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList ">
          {cats.map((c, id) => (
            <Link className="link sidebarListItem" to={`/?cat=${c.name}`}  >
              {" "}
              <li key={id}>{c.name} </li>{" "}
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="fa-brands fa-facebook-square sidebarIcon"></i>
          <i className="fa-brands fa-instagram-square sidebarIcon"></i>
          <i className="fa-brands fa-github-square sidebarIcon"></i>
          <i className="fa-brands fa-linkedin sidebarIcon"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
