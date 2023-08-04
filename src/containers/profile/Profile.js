import "./Profile.scss";
import {useContext} from "react";

import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {info} from "../../portfolio";
import Link from '@mui/joy/Link';
import Launch from '@mui/icons-material/Launch';

export default function Profile(){
  const {isDark} = useContext(StyleContext);
  const linkStyle = isDark ? "link-dark" : "link-light";
  return (
      <div id = "info" className = "main">
          <h1 className="profile-title">Get in Touch</h1>
          <ul>
            <li>
                <Link 
                    href = {info.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ fontSize: 'inherit', fontFamily: 'inherit'}}
                > 
                GitHub&nbsp;<Launch/>
                </Link>
            </li>
            <li>
                <Link 
                    href = {info.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ fontSize: 'inherit', fontFamily: 'inherit'}}
                > 
                LinkedIn&nbsp;<Launch/>
                </Link>
            </li>
            <li>
                <Link 
                    href = {info.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ fontSize: 'inherit', fontFamily: 'inherit'}}
                > 
                Twitter&nbsp;<Launch/>
                </Link>
            </li>
            <li>
                <Link 
                    href = {`mailto:${info.email}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ fontSize: 'inherit', fontFamily: 'inherit'}}
                > 
                Email&nbsp;<Launch/>
                </Link>
            </li>
          </ul>
      </div>
  )
}