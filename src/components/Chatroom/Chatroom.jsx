import "./Chatroom.scss";

function Chatroom() {
    return (
        <div className="chatroom">
            <div className="chatroom__display"></div>
            <div className="prompt">
                <textarea
                    className="prompt__input"
                    placeholder="Enter your prompt here..."
                />
                <button className="prompt__submit-btn">Enter</button>
            </div>
        </div>
    );
}

export default Chatroom;
