import "./MainPage.scss";
import { Link } from "react-router-dom";
import wingedVictoryImg from "../../assets/images/winged-victory-1.jpg";

function MainPage() {
    return (
        <section className="main-page">
            <div className="main-page__content">
                <h1 className="main-page__title">Socratic Soul</h1>
                <p className="main-page__slogan">Ask more. Think more. Express more.</p>
                <img src={wingedVictoryImg} alt="The Niké of Samothrace statue." className="main-page__img" />
                <p className="main-page__img-label">"Niké of Samothrace" in Louvre Museum</p>
                <h4 className="main-page__quote">"True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us."</h4>
                <p className="main-page__quote-author">- Socrates</p>
                <p className="main-page__welcome-message">Welcome to Socratic Soul! Here is a place to learn more about yourself and to express who you are. To begin, please select an activity category below.</p>
                <div className="activity-category">
                    <h2 className="activity-category__title">Activity Categories</h2>
                    <div className="activity-category__row">
                        <Link
                            to={"/self-reflection"}
                            className="category"
                        >
                            <h4 className="category__title">Self-Reflection</h4>
                            <p className="category__description">
                                Chat with an AI to explore and understand better your emotions and/or relationships. 
                            </p>
                        </Link>
                        <Link
                            to={"/self-expression"}
                            className="category"
                        >
                            <h4 className="category__title">Self-Expression</h4>
                            <p className="category__description">
                                Do activities that use creative outlets to express your thoughts and emotions.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainPage;
