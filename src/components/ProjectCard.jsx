function ProjectCard({ image, title, description, alt }) {
    return (
        <div className="project">
            <img src={image} alt={alt} />

            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;