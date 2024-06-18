const backBtn = document.querySelector('#back');
const blogPostEl = document.querySelector('#blog-posts');
const pageMode = document.querySelector('.dark');
const changeMode = document.querySelector('#changeMode')

let tempBlogObject = [];
let mode = 'dark';

// function renderPost() {
//     blogPostEl.innerHTML ='';

//     for (let i =0; i < tempBlogObject.length; i++) {
//         const blogPost = JSON.stringify(tempBlogObject[i]);

//         const post = $('<li>').text(blogPost);
//         post.textContent = blogPost;

//         console.log(blogPost);
//         post.setAttribute('data-index', i);

//         blogPostEl.appendChild(post);
//     }

// }
// Try and call old blog post when page is loads
function init () {
    const storedPost = JSON.parse(localStorage.getItem('storageInfo'));
    if (storedPost !== null) {
        tempBlogObject = storedPost;
    }       

    // renderPost();
}

backBtn.addEventListener('click', function(event) {
location.href = "index.html"
})

init();

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