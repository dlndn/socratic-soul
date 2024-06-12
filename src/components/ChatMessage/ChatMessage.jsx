import "./ChatMessage.scss";
import femaleSilhouetteImg from "../../assets/images/female-head-silhouette.svg";
import headSilhouetteImg from "../../assets/images/head-side-view.svg"
import Markdown from 'react-markdown';

function ChatMessage({ role, text }) {
    return (
        <div className="message">
            {role === "model" && ( // renders if message is from the AI
                <div className="message__role-wrapper message__role-wrapper--model">
                    <div className="message__role-background message__role-background--model">
                        <img className="message__img message__img--model" src={femaleSilhouetteImg} alt="A profile silhouette of a woman's head." />
                    </div>
                </div>
            )}
            <div className="message__text-wrapper">
                <Markdown className="message__text">{text}</Markdown>
            </div>
            {role === "user" && ( // renders if message is from user
                <div className="message__role-wrapper message__role-wrapper--user">
                    <div className="message__role-background message__role-background--user">
                        <img className="message__img message__img--user" src={headSilhouetteImg} alt="A profile silhoutte of someone's head." />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatMessage;