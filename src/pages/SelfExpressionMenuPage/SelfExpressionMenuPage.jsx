import "./SelfExpressionMenuPage.scss";
import { Link } from "react-router-dom";

function SelfExpressionMenuPage() {
    return (
        <section className="self-expression-menu-page">
            <div className="self-expression-menu-page__content">
                <h1 className="self-expression-menu-page__title">
                    Self-Expression Activities
                </h1>
                <Link
                    className="self-expression-activity self-expression-activity--drawing"
                    to={"/self-expression/drawing"}
                >
                    <h3 className="self-expression-activity__title">
                        Drawing
                    </h3>
                    <p className="self-expression-activity__description">
                        Draw and paint to express your thoughts and emotions!
                    </p>
                </Link>
            </div>
        </section>
    );
}

export default SelfExpressionMenuPage;
