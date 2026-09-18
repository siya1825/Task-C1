function TutorialCard({
    image,
    title,
    description,
    author,
    rating
}) {
    return (
        <article className="tutorial-card">

            <div className="tutorial-image">

                <img
                    src={image}
                    alt={title}
                />

                <div className="play-button">
                    ▶
                </div>

            </div>

            <div className="card-content">

                <h3>{title}</h3>

                <p className="card-description">
                    {description}
                </p>

                <div className="card-footer">

                    <span>
                        ⭐ {rating}
                    </span>

                    <span>
                        By {author}
                    </span>

                </div>

            </div>

        </article>
    );
}

export default TutorialCard;