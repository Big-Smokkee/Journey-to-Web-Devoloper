// step - 1: set an event handler to the button
document.getElementById("btn-post-comment").addEventListener("click", function () {
    // step-2: get the text written in the comment box
    const commentTextBox = document.getElementById("text-box-comment");

    const newComment = commentTextBox.value;

    //step -3: get the parent node where to publish the comment
    const commentContainer = document.getElementById("comment-container");
    console.log(commentContainer);

    // step-4: create a comment paragraph and save the inner text
    const commentElement = document.createElement('p');
    commentElement.classList.add("comment");
    commentElement.innerText = newComment;

    // step - 5: append the new p tag to the parent node
    commentContainer.appendChild(commentElement);

    //step-6: clean the text area
    commentTextBox.value = "";
})