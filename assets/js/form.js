const usernameInput = document.querySelector('#username-input');
const titleInput = document.querySelector('#title-input');
const contentInput = document.querySelector('#content-input');
const submitBtn = document.querySelector('#submit');
const pageMode = document.querySelector('.dark');
const changeMode = document.querySelector('#changeMode')

let blogList = [];

let mode = 'dark';

function updateLocalStorage() {
    localStorage.setItem('storageInfo', JSON.stringify(blogList));
}

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let blogEntry = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
    };
    while ((usernameInput === "") || (titleInput === "") || (contentInput === "")) {
        prompt("please make sure all fields are filled in."); }
    blogList.push(blogEntry);

    usernameInput.value = '';
    titleInput.value ='';
    contentInput.value ='';

    // while ((usernameInput === " ") || (titleInput === " ") || (contentInput === " ")) {
    //     prompt("please make sure all fields are filled in.");
    // }
    updateLocalStorage();

    location.href = "blog.html"
});

changeMode.addEventListener('click', function (){
    if (mode === 'dark') {
        mode = 'light';
        pageMode.setAttribute('class','light')

        if(changeMode.innerText == "Light") {
            changeMode.innerText = "Dark"
        }
        else {changeMode.innerText = "Light"}
    }
    
    else {
        mode = 'dark'
        pageMode.setAttribute('class', 'dark')
        
        if(changeMode.innerText == "Dark") {
            changeMode.innerText = "Light"
        }
        else {changeMode.innerText = "Dark"}
    }
})

function init(){
    const storedPosts = JSON.parse(localStorage.getItem('storageInfo'));
    if (storedPosts !== null) {
        blogList = storedPosts;
    }       
}


init()