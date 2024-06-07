import './MainPage.scss';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <section className="main-page">
            <div className="main-page__content">
                <h1 className="main-page__title">Socratic Soul</h1>
                <div className="activities">
                    <h2 className="activities__category">Self-Reflection</h2>
                    <div className="activities__row">
                        <Link to={'/'} className="activity">
                            <h3 className="activity__title">Emotions</h3>
                        </Link>
                        <Link to={'/'} className="activity">
                            <h3 className="activity__title">Relationships</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainPage;