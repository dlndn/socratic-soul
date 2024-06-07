import './PageNotFound.scss';

function PageNotFound() {
    return (
        <section className="page-not-found">
            <div className="page-not-found__content">
                <h1 className="page-not-found__title">404</h1>
                <h2 className="page-not-found__subtitle">Page not found.</h2>
                <img src="https://images.pexels.com/photos/4790610/pexels-photo-4790610.jpeg" alt="A napping cat." className="page-not-found__img" />
                <p className="page-not-found__text">Shhh, let's not wake the cat... Please return to the homepage!</p>
            </div>
        </section>
    );
}

export default PageNotFound;