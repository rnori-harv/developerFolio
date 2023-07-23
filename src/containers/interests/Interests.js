import "./Interests.scss";
import {useContext} from "react";

import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {interests} from "../../portfolio";


export default function Interests(){
    const {isDark} = useContext(StyleContext);
    const linkStyle = isDark ? "link-dark" : "link-light";

    return (
        <div id = "interests" className = "main">
            <h1 className="interests-title">Interests</h1>
            <ul>
                <li>What I'm Listening to: &nbsp;
                    <a href={interests.spotify} target="_blank" rel="noopener noreferrer" className={linkStyle}>Spotify</a>&nbsp;&nbsp;
                    <a href={interests.soundcloud} target="_blank" rel="noopener noreferrer" className={linkStyle}>Soundcloud</a>
                </li>
                <li>What I'm Reading: &nbsp;
                    <a href={interests.goodreads} target="_blank" rel="noopener noreferrer" className={linkStyle}>Goodreads</a>
                </li>
                <li>What I'm Watching: &nbsp;
                    <a href={interests.letterboxd} target="_blank" rel="noopener noreferrer" className={linkStyle}>Letterboxd</a>
                </li>
                <li>
                    Also a die-hard warriors and niners fan. Steph Curry is inspirational.
                </li>
            </ul>
        </div>
    )
}