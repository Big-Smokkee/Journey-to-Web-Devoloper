const loadPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(response => response.json())
        .then(json => displayPost(json));
}
const displayPost = (posts) => {
    // 1. get the container and empty the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";
    for (const post of posts) {
        // 2. Create HTML Element
        const postCard = document.createElement('div');
        postCard.innerHTML = `<div class="post-card">
            <h2>${post.id} ${post.title}</h2>

            <body>
                ${post.body}
            </body>
        </div>
        `
        // 3. add to the container
        postContainer.appendChild(postCard);
    }
}
loadPosts();