const backBtn = document.querySelector('#back');
const blogPostEl = document.querySelector('#blog-posts');
const pageMode = document.querySelector('.dark');
const themeToggleEl = document.querySelector('#changeMode')
const clearBtnEl = document.querySelector('#clear')

let blogList = [];
let mode = 'dark';

function renderPost() {
    blogPostEl.innerHTML ='';

    for (let i =0; i < blogList.length; i++) {
        const blogPost =blogList[i];

        const singlePostEl = document.createElement("li");
        const usernameEl = document.createElement("p");
        const titleEl = document.createElement("p");
        const contentEl = document.createElement("p");

        titleEl.textContent = blogPost.title;
        usernameEl.textContent = 'Created by ' + blogPost.username;
        contentEl.textContent = blogPost.content;

        titleEl.setAttribute('class', 'blogTitle');
        usernameEl.setAttribute('class', 'blogUser');
        contentEl.setAttribute('class', 'blogContent');

        blogPostEl.appendChild(singlePostEl);
        singlePostEl.appendChild(titleEl);
        singlePostEl.appendChild(usernameEl);
        singlePostEl.appendChild(contentEl);
    }

}

//Try and call old blog post when page is loads
function init () {
    const storedPosts = JSON.parse(localStorage.getItem('storageInfo'));
    if (storedPosts !== null) {
        blogList = storedPosts;
    }       

    renderPost();
}

clearBtnEl.addEventListener('click', function () {
    localStorage.clear();
    window.location.reload();
})

backBtn.addEventListener('click', function(event) {
location.href = "index.html"
})

init();

themeToggleEl.addEventListener('click', function (){
    if (mode === 'dark') {
        mode = 'light';
        pageMode.setAttribute('class','light')

        if(themeToggleEl.innerText == "Light") {
            themeToggleEl.innerText = "Dark"
        }
        else {themeToggleEl.innerText = "Light"}
    }
    
    else {
        mode = 'dark'
        pageMode.setAttribute('class', 'dark')
        
        if(themeToggleEl.innerText == "Dark") {
            themeToggleEl.innerText = "Light"
        }
        else {themeToggleEl.innerText = "Dark"}
    }
})