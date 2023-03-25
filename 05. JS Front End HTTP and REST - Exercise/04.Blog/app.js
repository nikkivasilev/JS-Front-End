function attachEvents() {
    const BASE_URL = `http://localhost:3030/jsonstore/blog/`
    const loadPostsBtn = document.getElementById(`btnLoadPosts`)
    const postsSelect = document.getElementById(`posts`)
    const viewPostsBtn = document.getElementById(`btnViewPost`)
    const postTitleContainer = document.getElementById(`post-title`)
    const postBodyContainer = document.getElementById(`post-body`)
    const postCommentsContainer = document.getElementById(`post-comments`)

    loadPostsBtn.addEventListener(`click`, loadPostsHandler)
    viewPostsBtn.addEventListener(`click`, viewPostHandler)

    function loadPostsHandler() {
        fetch(`${BASE_URL}posts`)
        .then((res) => res.json())
        .then((posts) => {
            for (const key in posts) {
                let title = posts[key].title
                createElement(`option`, title, postsSelect, ``, ``, {value: key})
            }
            
        })
        .catch ((err)=> console.error(err))
    }

    function viewPostHandler() {
        const checkedPostId = document.querySelector(`option:checked`).value
        fetch(BASE_URL)
        .then((res)=> res.json())
        .then((data) => {
            let post = data.posts[checkedPostId]
            let comments = data.comments
            let postComments = []
            for (const key in comments) {
                let currentPostId = comments[key].postId
                if (currentPostId === checkedPostId) {
                postComments.push(comments[key])
                }
            }
            postTitleContainer.textContent = post.title
            postBodyContainer.textContent = post.body
            postComments.forEach((comment) => {
                let text = comment.text
                let commentId = comment.id
                createElement(`li`, text, postCommentsContainer, commentId, )
            })

        })
        .catch((err) => {
            console.error(err);
        })
    
    
    }


}

attachEvents();




function createElement(type, content, parent, id, classes, attributes) {
    const htmlElement = document.createElement(type);
  
    if (content && type !== `input`) {
      htmlElement.textContent = content;
    }
  
    if (content && type === `input`) {
      htmlElement.value = content;
    }
  
    if (id) {
      htmlElement.id = id;
    }
  
    if (classes) {
      htmlElement.classList.add(...classes);
    }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }
  
    if (parent) {
      parent.appendChild(htmlElement);
    }
  
    return htmlElement;
  }

//   .filter(comment => {comment.postId === checkedPostId})