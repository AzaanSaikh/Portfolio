// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Blog Post Handling
const blogContainer = document.getElementById('blog-container');
const newPostForm = document.getElementById('new-post-form');

let posts = [
    { title: "Welcome to Our Blog", content: "This is our first post. Stay tuned for more updates!" }
];

function displayPosts() {
    blogContainer.innerHTML = '';
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="editPost(${index})">Edit</button>
            <button onclick="deletePost(${index})">Delete</button>
        `;
        blogContainer.appendChild(postElement);
    });
}

newPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTitle = document.getElementById('new-post-title').value;
    const newContent = document.getElementById('new-post-content').value;
    if (newTitle && newContent) {
        posts.push({ title: newTitle, content: newContent });
        displayPosts();
        newPostForm.reset();
    }
});

function editPost(index) {
    const newTitle = prompt("Edit title:", posts[index].title);
    const newContent = prompt("Edit content:", posts[index].content);
    if (newTitle && newContent) {
        posts[index].title = newTitle;
        posts[index].content = newContent;
        displayPosts();
    }
}

function deletePost(index) {
    if (confirm("Are you sure you want to delete this post?")) {
        posts.splice(index, 1);
        displayPosts();
    }
}

// Initial Display of Blog Posts
displayPosts();
