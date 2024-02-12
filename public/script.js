const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const post = button.parentElement;
        const postContent = post.querySelector('.post-content');
        post.classList.toggle('full');
        postContent.classList.toggle('full');
        const delkeyInput = button.nextElementSibling.querySelector('.delkey');
            const deleteBtn = button.nextElementSibling.querySelector('.delete-btn');
        if (post.classList.contains('full')) {
            button.textContent = 'Show Less';
        } else {
            button.textContent = 'Read More';
            delkeyInput.style.display = "none";
            deleteBtn.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const condelButtons = document.querySelectorAll('.condel');
    condelButtons.forEach(button => {
        button.addEventListener('click', () => {
            const delkeyInput = button.nextElementSibling.querySelector('.delkey');
            const deleteBtn = button.nextElementSibling.querySelector('.delete-btn');
            delkeyInput.style.display = "block";
            deleteBtn.style.display = "block";
        });
    });
});


document.getElementById('post-form').addEventListener('submit', function (event) {
    const blogKey = document.getElementById('blogKey').value;
    if (!/^\d{6}$/.test(blogKey)) {
        alert('Blog Key must be a 6-digit number.');
        event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const createPostBtn = document.getElementById("createpost");
    const modalOverlay = document.querySelector(".modal-overlay");
    const closeBtn = document.querySelector(".close-btn");

    createPostBtn.addEventListener("click", function () {
        modalOverlay.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        modalOverlay.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.condel');
    const originalText = button.textContent;

    button.addEventListener('mouseenter', function () {
        button.textContent = "✖";
    });

    button.addEventListener('mouseleave', function () {
        button.textContent = originalText;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const createPostBtn2 = document.getElementById("createpost2");
    const modalOverlay = document.querySelector(".modal-overlay");
    const closeBtn = document.querySelector(".close-btn");

    createPostBtn2.addEventListener("click", function () {
        modalOverlay.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        modalOverlay.style.display = "none";
    });
});

function confirmDelete() {
    return confirm('Are you sure you want to delete this post?');
}