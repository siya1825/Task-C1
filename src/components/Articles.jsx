import ArticleCard from "./ArticleCard";

function Articles() {

    const articles = [
        {
            title: "Introduction to Artificial Intelligence",
            description:
                "Learn the basics of AI and how it is used in everyday technology.",
            author: "Siya",
            rating: "4.8",
            image: "/images/article1.jpg"
        },

        {
            title: "Getting Started with Web Development",
            description:
                "A beginner's guide to HTML, CSS and JavaScript.",
            author: "Dhruv",
            rating: "4.7",
            image: "/images/article2.jpg"
        },

        {
            title: "Basic Cybersecurity for Beginners",
            description:
                "Simple practices to keep your accounts and data secure.",
            author: "Alex",
            rating: "4.9",
            image: "/images/article3.jpg"
        },

        {
    title: "Introduction to Cloud Computing",
    description:
        "Learn how cloud computing works and how organisations use cloud services.",
    author: "Priya",
    rating: "4.8",
    image: "/images/article4.jpg"
},

{
    title: "Understanding Data Science",
    description:
        "Discover how data science uses data to find useful patterns and insights.",
    author: "Riya",
    rating: "4.7",
    image: "/images/article5.jpg"
}
    ];

    return (
        <section id="articles">

            <div className="section-heading">
                <h2>Featured Articles</h2>
                <span></span>
            </div>

            <div className="articles">

                {articles.map((article) => (
                    <ArticleCard
                        key={article.title}
                        image={article.image}
                        title={article.title}
                        description={article.description}
                        author={article.author}
                        rating={article.rating}
                    />
                ))}

            </div>
             <button className="see-more">
             See all articles →
            </button>


        </section>
    );
}

export default Articles;