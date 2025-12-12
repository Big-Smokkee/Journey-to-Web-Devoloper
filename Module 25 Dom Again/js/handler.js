document.getElementById("btn-update-title").addEventListener("click", function () {
    // console.log("Button Clicked")
    const pageTitleElement = document.getElementById("page-title");
    pageTitleElement.innerText = "Updated Page Title Text";
});
document.getElementById("btn-login").addEventListener("click", function () {
    document.getElementById("user-info").innerText = "User Logged In";
});

document.getElementById("btn-update").addEventListener('click', function () {
    const nameID = document.getElementById("name-paragraph");
    const nameInput = document.getElementById("name-input");
    nameID.innerText = nameInput.value;
});