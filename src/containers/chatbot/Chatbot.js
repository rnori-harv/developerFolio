import "./Chatbot.scss";
import {useContext} from "react";

import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Chatbot(){
    const {isDark} = useContext(StyleContext);
    const embedOptions = isDark ? 'dark_theme' : 'light_theme';
    
    return (
        <div id = "resume" className = "main">
            <h1 className="project-title">Chat</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <iframe
                src={`https://resumechatbot.streamlit.app/?embed=true&embed_options=${embedOptions}`}
                height="600"
                style={{width: "80%", border: "none"}}
                ></iframe>
            </div>
        </div>
    )
}