import "./Profile.scss";
import {useContext} from "react";

import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {info} from "../../portfolio";

export default function Profile(){
  const {isDark} = useContext(StyleContext);
  const linkStyle = isDark ? "link-dark" : "link-light";
  return (
      <div id = "info" className = "main">
          <h1 className="profile-title">Info</h1>
          <ul>
              <li><a href={info.github} target="_blank" rel="noopener noreferrer" className={linkStyle}>Github</a></li>
              <li><a href={info.linkedin} target="_blank" rel="noopener noreferrer" className={linkStyle}>LinkedIn</a></li>
              <li><a href={info.twitter} target="_blank" rel="noopener noreferrer" className={linkStyle}>Twitter</a></li>
              <li><a href={`mailto:${info.email}`} target="_blank" rel="noopener noreferrer" className={linkStyle}>Email</a></li>
          </ul>
      </div>
  )
}