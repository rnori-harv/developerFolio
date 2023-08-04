import "./Interests.scss";
import {useContext} from "react";

import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {interests} from "../../portfolio";
import Link from '@mui/joy/Link';
import Launch from '@mui/icons-material/Launch';


export default function Interests(){
    const {isDark} = useContext(StyleContext);
    const linkStyle = isDark ? "link-dark" : "link-light";

    return (
        <div id = "interests" className = "main">
            <h1 className="interests-title">Interests</h1>
            <ul>
                <li>What I'm Listening to: &nbsp;
                <Link href={interests.spotify} target="_blank" rel="noopener" style={{ fontSize: 'inherit', fontFamily: 'inherit'}}>Spotify&nbsp; <Launch fontSize="small" />
                    </Link> 
                    &nbsp;&nbsp;
                    <Link href={interests.soundcloud} target="_blank" rel="noopener" style={{ fontSize: 'inherit', fontFamily: 'inherit'}}>Soundcloud&nbsp; <Launch fontSize="small" />
                    </Link> 
                </li>
                <li>What I'm Reading: &nbsp;
                    <Link href={interests.goodreads} target="_blank" rel="noopener" style={{ fontSize: 'inherit', fontFamily: 'inherit'}}>Goodreads&nbsp; <Launch fontSize="small" />
                    </Link> 
                </li>
                <li>What I'm Watching: &nbsp;
                <Link href={interests.letterboxd} target="_blank" rel="noopener" style={{ fontSize: 'inherit', fontFamily: 'inherit'}}>Letterboxd&nbsp; <Launch fontSize="small" />
                    </Link> 
                </li>
                <li>
                    Also a die-hard warriors and niners fan. Steph Curry is inspirational.
                </li>
            </ul>
        </div>
    )
}