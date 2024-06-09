import './MainPage.scss';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <section className="main-page">
            <div className="main-page__content">
                <h1 className="main-page__title">Socratic Soul</h1>
                <div className="activities">
                    <h2 className="activities__title">Activities</h2>
                    <h3 className="activities__category">Self-Reflection</h3>
                    <div className="activities__row">
                        <Link to={'/self-reflection/emotions'} className="activity">
                            <h4 className="activity__title">Emotions</h4>
                            <p className="activity__description">Chat with an AI who will guide you to better understand your current feelings.</p>
                        </Link>
                        <Link to={'/self-reflection/relationships'} className="activity">
                            <h4 className="activity__title">Relationships</h4>
                            <p className="activity__description">Chat with an AI to reflect and evaluate on current relationship(s).</p>
                        </Link>
                    </div>
                    <h3 className="activities__category">Self-Expression</h3>
                    <div className="activities__row">
                        <Link to={'/self-expression/drawing'} className="activity">
                            <h4 className="activity__title">Drawing</h4>
                            <p className="activity__description">Express how you feel through drawing and coloring!</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainPage;