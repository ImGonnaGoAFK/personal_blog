const backBtn = document.querySelector('#back');
const blogPostEl = document.querySelector('#blog-posts');

let tempBlogObject = [];

function renderPost() {
    blogPostEl.innerHTML ='';

    for (let i =0; i < tempBlogObject.length; i++) {
        const blogPost = JSON.stringify(tempBlogObject[i], null, 4);

        const post = document.createElement('li');
        post.textContent = blogPost;

        console.log(blogPost);
        post.setAttribute('data-index', i);

        blogPostEl.appendChild(post);
    }

}
// Try and call old blog post when page is loads
function init () {
    const storedPost = JSON.parse(localStorage.getItem('storageInfo'));
    if (storedPost !== null) {
        tempBlogObject = storedPost;
    }       

    renderPost();
}

backBtn.addEventListener('click', function(event) {
location.href = "index.html"
})

init();