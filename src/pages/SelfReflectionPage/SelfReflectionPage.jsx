import './SelfReflectionPage.scss';

function SelfReflectionPage() {
    return (
        <section className="self-reflection-page">
            <div className="self-reflection-page__content">
                <h1 className="self-reflection-page__title">Self-Reflection</h1>
                <div className="chat">
                    <div className="chat__display"></div>
                    <div className="prompt">
                        <textarea className="prompt__input" placeholder="Enter your prompt here..."/>
                        <button className="prompt__submit-btn">Enter</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SelfReflectionPage;