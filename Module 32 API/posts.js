const loadPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(response => response.json())
        .then(json => displayPost(json));
}
const displayPost = (posts) => {
    // 1. get the container
    const postContainer = document.getElementById("post-container")
    for (const post of posts) {
        console.log(post.title);
        // 2. Create HTML Element
        const li = document.createElement('li');
        li.innerText = post.title;
        //3. Add li into container
        postContainer.appendChild(li);
    }
}