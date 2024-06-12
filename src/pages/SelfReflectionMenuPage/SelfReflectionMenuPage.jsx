import "./SelfReflectionMenuPage.scss";
import { Link } from "react-router-dom";
import thinkerImg from "../../assets/images/thinker-sculpture-no-bg.png";

function SelfReflectionMenuPage() {
    return (
        <section className="self-reflection-menu-page">
            <div className="self-reflection-menu-page__content">
                <h1 className="self-reflection-menu-page__title">
                    Self-Reflection Activities
                </h1>
                <img src={thinkerImg} alt="A sculpture of the Thinker." className="self-reflection-menu-page__img" />
                <h4 className="self-reflection-menu-page__heading">Which part of yourself would you like to know more about?</h4>
                <p className="self-reflection-menu-page__description">These activities are filled with questions. Do you want to learn more about your emotions? Maybe your current relationships? Click one of the following category to start a conversation to learn more about yourself!</p>
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
                    to={"/self-reflection/relationships"}
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
