
///EKRANDA TAMAMINI (TİTLE-BODY) YAZDIRMAK İÇİN KOD

// const todoPost = document.querySelector('.todoPost');
// let postList = {};

// function renderPost () {
//     for(const todo of postList.posts){

//         todoPost.innerHTML += `<li>
//         <h2>${todo.title}</h2>
//         <p>${todo.body}</p>
//         </li>`;
//     }

// }

// fetch ('https://dummyjson.com/posts')
//     .then(r => r.json())
//     .then(json => {
//         postList = json;
//         renderPost ();
// })


//TİTLE TIKLANDIĞINDA BODY ve BUTTON VEREN KOD

const todoPost = document.querySelector('.todoPost');
let postList = {};

function renderPost() {
    for (const todo of postList.posts) {
        todoPost.innerHTML += `<li>
            <h2 class="post-title">${todo.title}</h2>
            <p class="post-body hidden">${todo.body}</p>
            <button class="post-button hidden">yorumları yükle</button>
        </li>`;
    }


    const postTitles = document.querySelectorAll('.post-title');

  
    postTitles.forEach(title => {
        title.addEventListener('click', () => {
            
            toggleBody(title);
        });
    });
}

function toggleBody(titleElement) {
    
    const parentLi = titleElement.parentElement;

    
    const bodyElement = parentLi.querySelector('.post-body');
    const buttonElement=parentLi.querySelector('.post-button');

    
    bodyElement.classList.toggle('hidden');
    buttonElement.classList.toggle('hidden');

}

fetch('https://dummyjson.com/posts')
    .then(r => r.json())
    .then(json => {
        postList.posts = json.posts;
        renderPost();
    });


////buttona tıklandığında yorum getiren kod

