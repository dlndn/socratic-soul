import "./SelfReflectionMenuPage.scss";
import { Link } from "react-router-dom";

function SelfReflectionMenuPage() {
    return (
        <section className="self-reflection-menu-page">
            <div className="self-reflection-menu-page__content">
                <h1 className="self-reflection-menu-page__title">
                    Self-Reflection Activities
                </h1>
                <Link
                    className="self-reflection-activity self-reflection-activity--emotions"
                    to={"/self-reflection/emotions"}
                >
                    <h3 className="self-reflection-activity__title">
                        Emotional Self-Reflection
                    </h3>
                    <p className="self-reflection-activity__description">
                        Reflect on your emotions by chatting with an AI.
                    </p>
                </Link>
                <Link
                    className="self-reflection-activity self-reflection-activity--relationships"
                    to={"/self-reflection/emotions"}
                >
                    <h3 className="self-reflection-activity__title">
                        Relational Self-Reflection
                    </h3>
                    <p className="self-reflection-activity__description">
                        Reflect on current relationship(s) by chatting with an
                        AI.
                    </p>
                </Link>
            </div>
        </section>
    );
}

export default SelfReflectionMenuPage;
