const usernameInput = document.querySelector('#username-input');
const titleInput = document.querySelector('#title-input');
const contentInput = document.querySelector('#content-input');
const submitBtn = document.querySelector('#submit');

let tempBlogObject = []

function updateLocalStorage() {
    localStorage.setItem('storageInfo', JSON.stringify(tempBlogObject));
}

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let blogEntry = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        contentInput: contentInput.value.trim(),
    };
    while ((usernameInput === "") || (titleInput === "") || (contentInput === "")) {
        prompt("please make sure all fields are filled in."); }
    tempBlogObject.push(blogEntry);

    usernameInput.value = '';
    titleInput.value ='';
    contentInput.value ='';

    // while ((usernameInput === " ") || (titleInput === " ") || (contentInput === " ")) {
    //     prompt("please make sure all fields are filled in.");
    // }
    updateLocalStorage();

    location.href = "blog.html"
});