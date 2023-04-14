import Post from "../models/Post";
import User from "../models/User";

/* CREATING POST */
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: [],
        });
        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);
    }  catch (err) {
        res.status(409).json({ message: err.message });
    }
}

/* READING POSTS */
export const getFeedPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find();
        res.status(200).json(post);
    }  catch (err) {
        res.status(404).json({ message: err.message });
      }
}
