
import { useState } from "react";

function Post() {
    const [postType, setPostType] = useState("Question");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [abstract, setAbstract] = useState("");
    const [articleText, setArticleText] = useState("");
    const [tags, setTags] = useState("");
    const [message, setMessage] = useState("");

    const handlePost = (e) => {
        e.preventDefault();
        setMessage("");

        const tagList = tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0);

        if (!title.trim()) {
            setMessage("Please enter a title.");
            return;
        }

        if (postType === "Question" && !description.trim()) {
            setMessage("Please describe your problem.");
            return;
        }

        if (postType === "Article" && !abstract.trim()) {
            setMessage("Please enter an abstract.");
            return;
        }

        if (postType === "Article" && !articleText.trim()) {
            setMessage("Please enter the article text.");
            return;
        }

        if (tagList.length > 3) {
            setMessage("Please enter no more than three tags.");
            return;
        }

        if (tags.trim() && tagList.length === 0) {
            setMessage("Please enter valid tags.");
            return;
        }

        window.alert("Your " + postType.toLowerCase() + " has been submitted successfully!");

        setTitle("");
        setDescription("");
        setAbstract("");
        setArticleText("");
        setTags("");
        setMessage("");
    };

    return (
        <section className="post-section">
            <div className="post-card">
                <h2>New Post</h2>

                <form onSubmit={handlePost}>
                    <div className="post-type">
                        <label>
                            <input
                                type="radio"
                                name="postType"
                                value="Question"
                                checked={postType === "Question"}
                                onChange={() => {
                                    setPostType("Question");
                                    setMessage("");
                                }}
                            />
                            Question
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="postType"
                                value="Article"
                                checked={postType === "Article"}
                                onChange={() => {
                                    setPostType("Article");
                                    setMessage("");
                                }}
                            />
                            Article
                        </label>
                    </div>

                    <h3>What do you want to ask or share</h3>

                    <p>
                        {postType === "Question"
                            ? "Ask a question and explain the problem you are facing."
                            : "Share your knowledge and ideas with the community."}
                    </p>

                    <div className="post-field">
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            placeholder={
                                postType === "Question"
                                    ? "Start your question with how, what, why, etc."
                                    : "Enter a descriptive article title"
                            }
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            maxLength={150}
                            required
                        />
                    </div>

                    {postType === "Question" ? (
                        <div className="post-field">
                            <label htmlFor="description">
                                Describe your problem
                            </label>
                            <textarea
                                id="description"
                                placeholder="Provide details about your question..."
                                value={description}
                                onChange={(e) =>
                                    setDescription(e.target.value)
                                }
                                rows={7}
                                required
                            />
                        </div>
                    ) : (
                        <>
                            <div className="post-field">
                                <label htmlFor="abstract">Abstract</label>
                                <textarea
                                    id="abstract"
                                    placeholder="Write a short summary of your article..."
                                    value={abstract}
                                    onChange={(e) =>
                                        setAbstract(e.target.value)
                                    }
                                    rows={4}
                                    required
                                />
                            </div>

                            <div className="post-field">
                                <label htmlFor="articleText">
                                    Article Text
                                </label>
                                <textarea
                                    id="articleText"
                                    placeholder="Write your article here..."
                                    value={articleText}
                                    onChange={(e) =>
                                        setArticleText(e.target.value)
                                    }
                                    rows={9}
                                    required
                                />
                            </div>
                        </>
                    )}

                    <div className="post-field">
                        <label htmlFor="tags">Tags</label>
                        <input
                            id="tags"
                            type="text"
                            placeholder="Enter up to three tags, separated by commas"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                        <small>Use commas to separate tags. Maximum 3.</small>
                    </div>

                    {message && (
                        <p className="post-message" role="alert">
                            {message}
                        </p>
                    )}

                    <button type="submit" className="post-button">
                        Post
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Post;
