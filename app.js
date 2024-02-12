const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Connection
mongoose.connect('mongodb://localhost:27017/my-blog-db', { useNewUrlParser: true, useUnifiedTopology: true });

// Models
const Post = require('./models/Post');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const posts = await Post.find();
    res.render('index', { posts });
});

app.get('/', async (req, res) => {
    const posts = await Post.find();
    let showDisplayCon = false; 
    if (posts.length === 0) {
        showDisplayCon = true;
    }
    res.render('index', { posts, showDisplayCon });
});


app.post('/posts', async (req, res) => {
    const { title, content, createdBy, blogKey } = req.body; 
    const post = new Post({ title, content, createdBy, blogKey }); 
    await post.save();
    res.redirect('/');
});


app.post('/delete/:blogKey', async (req, res) => {
    const requestedBlogKey = req.params.blogKey;
    const userEnteredBlogKey = req.body.blogKey;

    // blog key matches the one entered by the user
    if (requestedBlogKey !== userEnteredBlogKey) {
        return res.status(400).send('Blog key mismatch. Deletion aborted.');
    }

    try {
        // Find and delete the post with the specified blogKey
        const deletedPost = await Post.findOneAndDelete({ blogKey: requestedBlogKey });
        if (!deletedPost) {
            return res.status(404).send('Post not found');
        }
        // Redirect back to homepage 
        res.redirect('/');
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

