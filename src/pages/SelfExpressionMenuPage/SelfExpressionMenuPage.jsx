import "./SelfExpressionMenuPage.scss";
import { Link } from "react-router-dom";
import greekBustWithGoldImg from "../../assets/images/kintsugi-greek-bust.png";

function SelfExpressionMenuPage() {
    return (
        <section className="self-expression-menu-page">
            <div className="self-expression-menu-page__content">
                <h1 className="self-expression-menu-page__title">
                    Self-Expression Activities
                </h1>
                <img src={greekBustWithGoldImg} alt="An Ancient-Greek-style bust inlined with cracks of gold." className="self-expression-menu-page__img" />
                <h4 className="self-expression-menu-page__heading">What are some good ways to express yourself?</h4>
                <p className="self-expression-menu-page__description">These are just a few ways to express emotions and thoughts. It's encouraged to find other healthy ways to express yourself; don't be limited to these activities! To begin, please click on one of the following activities.</p>
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
