import "./Chatbot.scss";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";

export default function Chatbot(){
    return (
        <div id = "resume" className = "main">
            <h1 className="project-title">My Resumé</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <iframe
                src="https://resumechatbot.streamlit.app/?embed=true&embed_options=dark_theme"
                height="450"
                style={{width: "80%", border: "none"}}
                ></iframe>
            </div>
            <div className="button-greeting-div">
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
            </div>
        </div>
    )
}