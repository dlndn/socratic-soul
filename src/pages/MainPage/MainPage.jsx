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
                        <Link to={'/'} className="activity">
                            <h4 className="activity__title">Guided Self-Reflection</h4>
                            <p className="activity__description">Chat with someone who will guide you in learning more about how you are currently feeling.</p>
                        </Link>
                    </div>
                    <h3 className="activities__category">Self-Expression</h3>
                    <div className="activities__row">
                        <Link to={'/'} className="activity">
                            <h4 className="activity__title">Activity 1</h4>
                            <p className="activity__description">Insert activity description here...</p>
                        </Link>
                        <Link to={'/'} className="activity">
                            <h4 className="activity__title">Activity 2</h4>
                            <p className="activity__description">Insert activity description here...</p>
                        </Link>
                    </div>
                    <div className="activities__row">
                        <Link to={'/'} className="activity">
                            <h4 className="activity__title">Activity 3</h4>
                            <p className="activity__description">Insert activity description here...</p>
                        </Link>
                        <Link to={'/'} className="activity">
                            <h4 className="activity__title">Activity 4</h4>
                            <p className="activity__description">Insert activity description here...</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainPage;