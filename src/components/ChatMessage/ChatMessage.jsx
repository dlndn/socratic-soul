import "./ChatMessage.scss";

function ChatMessage({ role, text }) {
    return (
        <div className="message">
            {role === "model" && ( // renders if message is from the AI
                <div className="message__role-wrapper message__role-wrapper--model">
                    <p className="message__role">{role}</p>
                </div>
            )}
            <div className="message__text-wrapper">
                <p className="message__text">{text}</p>
            </div>
            {role === "user" && ( // renders if message is from user
                <div className="message__role-wrapper message__role-wrapper--user">
                    <p className="message__role">{role}</p>
                </div>
            )}
        </div>
    );
}

export default ChatMessage;