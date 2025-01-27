import { Job } from "../model/job.model.js"; 


const createJob = async (req, res) => {
  try {
    console.log('req.body : ', req.body);  
    console.log('req.user : ', req.user);

    const { title, description, experience, candidates } = req.body;  // Ensure categoryId is passed
    const userId = req.user._id;   

    if (!title || !description || !experience || !candidates  ) {
      return res.status(400).json({ message: "All fields are required" });
    }
 
    if (!Array.isArray(candidates) || !candidates.every(email => typeof email === 'string' && email.includes('@'))) {
      return res.status(400).json({ message: "Candidates must be an array of valid email addresses" });
    }
 
    const job = await Job.create({
      title,
      description,  
      experience,
      candidates,    
      userId,   
    });

    if (!job) {
      return res.status(404).json({ message: "Couldn't create job" });
    }
 
    return res.status(201).json({ message: "Job created successfully", job });

  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

 
// const updatejob = async (req, res) => {
//   try {
//     console.log('req.body : ', req.body);
//     console.log('req.params : ', req.params);
//     const { title, content, categoryId, userId } = req.body;
//     const blog = await Blog.findByIdAndUpdate(req.params.blog, {
//       title,
//       content,
//       categoryId,
//       userId,
//     },{ new: true });

//     if (!blog) {
//       console.log("Couldn't update blog blog is not found ");
//       return res.status(404).send("Couldn't update blog");
//     }
     
//     return res.status(201).json(blog.data);
//   } catch (error) {
//     console.log("Error updating blog : ", error.message);
//     return res.status(404).send(error);
//   }
// };

// const deleteBlog = async (req, res) => {
//   try {
//     console.log("req.params : ", req.params);
//     const blog = await Blog.findByIdAndDelete(req.params.blog);
//     console.log(`Blog deleted is ${blog}`);

//     if (blog) {
//       return res.status(404).send("blog is not deleted successfully");
//     }
//     const dbClear = await Category.findByIdAndUpdate(blog._id, {
//       $pull: { blogs: blog._id },
//     });
//     if (!dbClear) {
//       return res.status(404).send("Couldn't delete category malware");
//     }
//     return res.status(204).send("blog is deleted successfully");
//   } catch (error) {
//     console.error("Error: " + error.message);
//     return res.status(404).send("Couldn't delete blog");
//   }
// };

// const getBlog = async (req, res) => {
//   try {
//     console.log("req.params : ", req.params);
//     const blog = await Blog.findById(req.params.blog);
//     if (!blog) {
//       return res.status(404).send("blog is not found");
//     }
//     return res.status(200).json(blog);
//   } catch (error) {

//     console.error("Error: " + error.message);
//     return res.status(404).send(error);
//   }
// };

// const getAllBlogs = async (req, res) => {
//   try {
//     const blogs = await Blog.find();
//     if (!blogs) return res.status(200).send("No blog found");

//     return res.status(200).json(blogs);
//   } catch (error) {
//     return res.status(500).send("Error" + error.message);
//   }
// };

// const getUserBlogs = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     console.log("user : ", req.user);
//     const blog = await Blog.find({ userId: userId });
//     console.log('blog : ', blog.data);
//     return res.status(200).json({blog: blog, user: {userImage: req.user.userImage, userName: req.user.userName}});e 
//   } catch (error) {
//     console.error("Error : ", error.message);
//     return res.status(500).json({ message: error.message });
//   }
// };

// const getBlog = async(req, res) => {
//   try {
//     const {id} = req.body.id;
//     console.log('req.body ', req.body);
//     const response = await Blog.findById(id);
//     console.log('response : ', response);
//     return res.status(200).json(response);
//   } catch (error) {
//     console.error("Error getBlog ", error.message);
//   }
// }

export {
  // getUserBlogs,
  // getAllBlogs,
  // getBlog,
  // deleteBlog,
  // updateBlog,
  createJob,
};
