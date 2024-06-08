import "./Chatroom.scss";
import { useState } from "react";
import axios from 'axios';

function Chatroom() {
    const [inputValue, setInputValue] = useState(""); // textarea's value
    const [error, setError] = useState(""); // for displaying error messages
    const [chatHistory, setChatHistory] = useState([]); // array with the object structure used to feed Gemini API the chat history

    async function getResponse() {
        if (!inputValue) { 
            setError("Empty field entered. Please try again!");
            return; 
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/chatbot",
                { 
                    history: chatHistory, 
                    message: inputValue 
                }
            );
            const messageData = await response.data;

            // updating chat history based on gemini-1.5-flash's object structure
            setChatHistory((oldChatHistory) => [
                ...oldChatHistory,
                { role: "user", parts: [{ text: inputValue }] },
                { role: "model", parts: [{ text: messageData }] }
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
                {chatHistory.map((chatItem, index) => (
                    <div className="message" key={index}>
                        <p className="message__role">{chatItem.role}</p>
                        <p className="message__text">{chatItem.parts[0].text}</p>
                    </div>
                ))}
            </div>
            <div className="prompt">
                <textarea
                    className="prompt__input"
                    placeholder="Enter your prompt here..."
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
                {!error && (
                    <button
                        className="prompt__submit-btn"
                        onClick={getResponse}
                    >
                        Enter
                    </button>
                )}
                {error && (
                    <button
                        className="prompt__submit-btn"
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
