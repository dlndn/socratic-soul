import "./MainPage.scss";
import { Link } from "react-router-dom";

function MainPage() {
    return (
        <section className="main-page">
            <div className="main-page__content">
                <h1 className="main-page__title">Socratic Soul</h1>
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
