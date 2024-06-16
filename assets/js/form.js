const usernameInput = document.querySelector('#username-input');
const titleInput = document.querySelector('#title-input');
const contentInput = document.querySelector('#content-input');
const submitBtn = document.querySelector('#submit');

let tempBlogObject = {
    username: [],
    title: [],
    content: [],
}

function updateLocalStorage() {
    localStorage.setItem('storageInfo', JSON.stringify(tempBlogObject));
}

submitBtn.addEventListener('click', function (event) {
    // event.preventDefault();
    tempBlogObject = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        contentInput: contentInput.value.trim(),
    }

    if ((usernameInput === " ") || (titleInput === " ") || (contentInput === " ")) {
        return;
    }

    // if (tempBlogObject) {
    //     const textDiv = document.createElement('div');
    //     document.body.appendChild(textDiv)
    // }
    updateLocalStorage();
})