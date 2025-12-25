const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then((response) => { return response.json() })
        .then((data) => {
            // console.log(data);
            displayPost(data);
        })
};

const displayPost = (posts) => {
    posts.forEach((element) => {
        console.log(element);
    });
}