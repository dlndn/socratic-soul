import './SelfReflectionPage.scss';
import Chatroom from '../../components/Chatroom/Chatroom';

function SelfReflectionPage() {
    return (
        <section className="self-reflection-page">
            <div className="self-reflection-page__content">
                <h1 className="self-reflection-page__title">Self-Reflection</h1>
                <Chatroom />
            </div>
        </section>
    );
}

export default SelfReflectionPage;