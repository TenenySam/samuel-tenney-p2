//post array
var posts = [];

//constructor
function Post (header, content, author, rating) {
    this.header = header;
    this.content = content;
    this.author = author;
    this.rating = rating;
}



//create new element & add to dom
function addPostElement (post) {
    //create elements
    var listEl = document.getElementById('complaint-list');
    var postEl = document.createElement('li');
    var headerEl = document.createElement('p'); // add header to post
    console.log(post);
    console.log(listEl);
    console.log(postEl);
    headerEl.textContent += post.header;
    postEl.appendChild(headerEl);

    var contentEl = document.createElement('p');
    contentEl.textContent += post.content;
    postEl.appendChild(contentEl);

    var authorEl = document.createElement('p');
    authorEl.textContent += post.author;
    postEl.appendChild(authorEl);

    if(radioValue == "positive"){
        postEl.style.backgroundColor = "#90f59c";

    } else if(radioValue == "negative") {
        postEl.style.backgroundColor = "#ff5252";
    } else {
        postEl.style.backgroundColor = "#877a7a";
    }

    // add task element to list
    listEl.appendChild(postEl);
}


function showAddPost (event) {
    var model = document.getElementById('Model');
    model.style.display = 'block';
}

function addPost (event) {
    var header = document.getElementById('new-post-header');
    var content = document.getElementById('new-post-content');
    var author = document.getElementById('new-post-author');

    var radios = document.getElementsByName('review-type');
    var radioValue;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            radioValue = radios[i].value;
        }
    }
    var model = document.getElementById('Model');
    model.style.display = 'none';



    //create elements
    var listEl = document.getElementById('complaint-list');
    var postEl = document.createElement('li');
    var headerEl = document.createElement('p'); // add header to post
    console.log(header.value);
    headerEl.innerHTML = "Header: " + header.value;
    postEl.appendChild(headerEl);

    var contentEl = document.createElement('p');
    contentEl.innerHTML = content.value;
    postEl.appendChild(contentEl);

    var authorEl = document.createElement('p');
    authorEl.innerHTML = "Author: " + author.value;
    postEl.appendChild(authorEl);

    if(radioValue == "positive"){
        postEl.style.backgroundColor = "#90f59c";

    } else if(radioValue == "negative") {
        postEl.style.backgroundColor = "#ff5252";
    } else {
        postEl.style.backgroundColor = "#877a7a";
    }

    // add task element to list
    listEl.appendChild(postEl);
}

//wire event handlers
window.addEventListener('load', function() {
    var newPostButton = document.getElementById('new-post');
    newPostButton.addEventListener('click', showAddPost);

    var addPostButton = document.getElementById('add-post');
    addPostButton.addEventListener('click', addPost);
});