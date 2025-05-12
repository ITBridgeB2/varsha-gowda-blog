import axios from 'axios';

const BLOG_URL = 'http://localhost:9898/blogs';

class BlogService {
    validateBlog(email, password) {
        return axios.get(`${BLOG_URL}/${email}/${password}`)
      }
      saveBlogDetails(blog){
        return axios.post(`${BLOG_URL}`,blog)
    }

  
}

export default new BlogService();