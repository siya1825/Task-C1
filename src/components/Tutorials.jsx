import { useState } from "react";
import TutorialCard from "./TutorialCard";

function Tutorials() {

    const [showAll, setShowAll] = useState(false);

    const tutorials = [
        {
            title: "Build Your First React Component",
            description:
                "Learn how to create and use components in React.",
            author: "Siya",
            rating: "4.9",
            image: "/images/tutorial1.jpg"
        },

        {
            title: "Python for Beginners",
            description:
                "Learn Python variables, loops and functions with examples.",
            author: "John",
            rating: "4.8",
            image: "/images/tutorial2.jpg"
        },

        {
            title: "Git and GitHub Basics",
            description:
                "Learn repositories, commits, branches and pushing code.",
            author: "Emma",
            rating: "4.7",
            image: "/images/tutorial3.jpg"
        },

        {
            title: "Introduction to HTML and CSS",
            description:
                "Learn the basics of HTML and CSS to create and style simple web pages.",
            author: "Siya",
            rating: "4.8",
            image: "/images/tutorial4.jpg"
        },

        {
            title: "Getting Started with Machine Learning",
            description:
                "Understand the basic ideas behind machine learning and how models learn from data.",
            author: "Alex",
            rating: "4.9",
            image: "/images/tutorial5.jpg"
        }
    ];

    const visibleTutorials = showAll
        ? tutorials
        : tutorials.slice(0, 3);

    return (
        <section id="tutorials">

            <div className="section-heading">
                <h2>Featured Tutorials</h2>
                <span></span>
            </div>

            <div className="tutorials">

                {visibleTutorials.map((tutorial) => (
                    <TutorialCard
                        key={tutorial.title}
                        image={tutorial.image}
                        title={tutorial.title}
                        description={tutorial.description}
                        author={tutorial.author}
                        rating={tutorial.rating}
                    />
                ))}

            </div>

            <button
                className="see-more"
                onClick={() => setShowAll(!showAll)}
            >
                {showAll ? "Show less ↑" : "See all tutorials →"}
            </button>

        </section>
    );
}

export default Tutorials;