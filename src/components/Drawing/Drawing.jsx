import { ReactSketchCanvas } from "react-sketch-canvas";
import { useState, useEffect } from "react";
import "./Drawing.scss";

function Drawing() {
    const defaultPenColor = "#000000";
    const eraserColor = "#ffffff";
    const canvasColor = "#ffffff";
    const defaultPrompt =
        "Don't know what to draw? Click the 'Get Prompt' button and get an idea!'";
    const artTherapyExercises = [
        "Draw what a perfect day looks like for you.",
        "Listen to a song and draw the first thing that comes to mind as you listen.",
        "Draw images of your good traits.",
        "Draw symbols of both your good and bad traits.",
    ];

    const [currentStrokeColor, setCurrentStrokeColor] = useState("");
    const [currentStrokeWidth, setCurrentStrokeWidth] = useState(0);
    const [eraseMode, setEraseMode] = useState(false);
    const [currentPrompt, setCurrentPrompt] = useState("");

    useEffect(() => {
        setCurrentStrokeColor(defaultPenColor);
        setCurrentStrokeWidth(2);
        setEraseMode(false);
        setCurrentPrompt(defaultPrompt);
    }, []);

    function handlePenClick() {
        setCurrentStrokeColor(defaultPenColor);
        setEraseMode(false);
    }

    function handleEraseClick() {
        setCurrentStrokeColor(eraserColor);
        setEraseMode(true);
    }

    function handleStrokeWidthChange(event) {
        setCurrentStrokeWidth(event.target.value);
    }

    function handleChangingStrokeColor(event) {
        setCurrentStrokeColor(event.target.value);
    }

    function handleGetPromptClick() {
        const randomlySelectedIndex = Math.floor(Math.random() * artTherapyExercises.length);
        setCurrentPrompt(artTherapyExercises[randomlySelectedIndex]);
    }

    return (
        <section className="drawing">
            <div className="canvas">
                <h2 className="canvas__title">Draw Here!</h2>
                <ReactSketchCanvas
                    className="canvas__drawing-area"
                    width="100%"
                    height="100%"
                    canvasColor={canvasColor}
                    strokeColor={currentStrokeColor}
                    strokeWidth={currentStrokeWidth}
                />
            </div>
            <div className="drawing-controls">
                    <h2 className="drawing-controls__title">
                        Sketching Controls
                    </h2>
                    <div className="drawing-controls__btn-wrapper">
                        <div className="drawing-controls__row">
                            <input
                                type="color"
                                name="color-picker"
                                className="drawing-controls__color-input"
                                onChange={(e) => handleChangingStrokeColor(e)}
                                value={"#000000"}
                            />
                            <input
                                type="range"
                                name="stroke-width-input"
                                className="drawing-controls__stroke-width-input"
                                onChange={(e) => handleStrokeWidthChange(e)}
                                value={currentStrokeWidth}
                                min={"1"}
                                max={"20"}
                            />
                        </div>
                        <div className="drawing-controls__row">
                            <button
                                className="drawing-controls__btn drawing-controls__btn--pen"
                                onClick={handlePenClick}
                                disabled={!eraseMode}
                            >
                                Pen
                            </button>
                            <button
                                className="drawing-controls__btn drawing-controls__btn--erase"
                                onClick={handleEraseClick}
                                disabled={eraseMode}
                            >
                                Eraser
                            </button>
                        </div>
                    </div>
                </div>
                <div className="art-prompts">
                    <button className="art-prompts__btn" onClick={handleGetPromptClick}>
                        Get Prompt
                    </button>
                    <p className="art-prompts__text">
                        {currentPrompt}
                    </p>
                </div>
        </section>
    );
}

export default Drawing;
