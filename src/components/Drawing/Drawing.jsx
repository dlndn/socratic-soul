import { ReactSketchCanvas } from "react-sketch-canvas";
import "./Drawing.scss";

function Drawing() {
    return (
        <section className="drawing">
            <div className="canvas">
                <h2 className="canvas__title">Draw Here!</h2>
                <ReactSketchCanvas
                    className="canvas__drawing-area"
                    width="100%"
                    height="100%"
                />
            </div>
        </section>
    );
}

export default Drawing;
