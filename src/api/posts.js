import axios from 'axios';

export default axios.create ({
  baseURL:'http://localhost:3500'
});
/* npx json-server -p 3500 -w data/db.json will be used */

/* axios.create(): This method is used to create an Axios instance with specific configuration (like baseURL, headers, etc.). This allows you to set a default configuration for all requests made with that instance.

baseURL: 'http://localhost:3500': This is the base URL for your API. Now, when you make requests, you don't need to include the full URL (like http://localhost:3500/posts). Instead, you can just call /posts, and Axios will automatically prepend http://localhost:3500.

🔥 Example Usage
Now, you can use this Axios instance to make API requests like this:
import axios from './path'; // Import the configured Axios instance

// Example GET request to fetch all posts
axios.get('/posts')  // Axios will automatically append '/posts' to the base URL */