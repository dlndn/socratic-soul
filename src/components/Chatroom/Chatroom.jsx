import "./Chatroom.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import ChatMessage from "../ChatMessage/ChatMessage";

function Chatroom({ topic }) {
    const [inputValue, setInputValue] = useState(""); // textarea's value
    const [error, setError] = useState(""); // for displaying error messages
    const [chatHistory, setChatHistory] = useState([]); // array with the object structure used to feed Gemini API the chat history

    useEffect(() => {
        getInitialResponse(topic);
    }, []);

    async function getInitialResponse(responseTopic) {
        try {
            const response = await axios.post(
                "http://localhost:8080/init-chatbot",
                { topic: responseTopic }
            );

            const initialData = await response.data;
            setChatHistory([
                { role: "user", parts: [{ text: initialData.user }] },
                { role: "model", parts: [{ text: initialData.model }] },
            ]);
        } catch (error) {
            console.error(error);
            setError("Something went wrong; please try again later!");
        }
    }

    async function getResponse() {
        if (!inputValue) {
            setError("Empty field entered. Please try again!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/chatbot", {
                history: chatHistory,
                message: inputValue,
                topic: topic,
            });
            const messageData = await response.data;

            // updating chat history based on gemini-1.5-flash's object structure
            setChatHistory((oldChatHistory) => [
                ...oldChatHistory,
                { role: "user", parts: [{ text: inputValue }] },
                { role: "model", parts: [{ text: messageData }] },
            ]);
            setInputValue(""); // clear textarea
        } catch (error) {
            console.error(error);
            setError("Something went wrong; please try again later!");
        }
    }

    function clearInputs() {
        setInputValue("");
        setError("");
    }

    return (
        <div className="chatroom">
            <div className="chatroom__display">
                {chatHistory.map(
                    (chatMessage, index) =>
                        index > 0 && (
                            <ChatMessage
                                key={index}
                                role={chatMessage.role}
                                text={chatMessage.parts[0].text}
                            />
                        )
                )}
            </div>
            <div className="prompt">
                <textarea
                    className={`prompt__input ${
                        error && "prompt__input--error"
                    }`}
                    placeholder="Enter your prompt here..."
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
                {!error && (
                    <button
                        className="prompt__btn prompt__btn--submit"
                        onClick={getResponse}
                    >
                        Enter
                    </button>
                )}
                {error && (
                    <button
                        className="prompt__btn prompt__btn--clear"
                        onClick={clearInputs}
                    >
                        Clear
                    </button>
                )}
            </div>
            {error && <p className="chatroom__error-message">{error}</p>}
        </div>
    );
}

export default Chatroom;
