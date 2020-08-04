import React from 'react';

class AuthorBio extends React.Component {
    render() {
        return (
            <section id="author-bio">
                <img src="./assets/van-pic.png" alt="author" />
                <h2>Vanessa Whatever</h2>
                <span>
                    Here's some author bio about Vanessa Whatever.
                    </span>
                <button>Share Recipe</button>
            </section>
        )
    }
}

export default AuthorBio;