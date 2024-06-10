import './SelfExpressionPage.scss';
import Drawing from '../../components/Drawing/Drawing';

function SelfExpressionPage({ activity }) {
    return (
        <section className="self-expression-page">
            <div className="self-expression-page__content">
                <h1 className="self-expression-page__title">Self-Expression: {activity}</h1>
                <div className="self-expression-page__activity">
                    {(activity === "Drawing") && <Drawing />}
                </div>
            </div>
        </section>
    );
}

export default SelfExpressionPage;