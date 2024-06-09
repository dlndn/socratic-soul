import './SelfReflectionPage.scss';
import Chatroom from '../../components/Chatroom/Chatroom';

function SelfReflectionPage({ topic }) {
    return (
        <section className="self-reflection-page">
            <div className="self-reflection-page__content">
                <h1 className="self-reflection-page__title">Self-Reflection: {topic}</h1>
                <Chatroom topic={topic}/>
            </div>
        </section>
    );
}

export default SelfReflectionPage;