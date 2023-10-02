# B_Da_Blogger


B_Da_Blogger is a full-stack web application that allows users to create, edit, and view blog posts. It provides user registration and login functionality to manage their blogs.

## Features

- User Registration: Users can sign up for an account using a unique username and password.
- User Login: Registered users can log in to their accounts securely.
- Create Blog Posts: Authenticated users can create new blog posts with titles and content.
- Edit Blog Posts: Users can edit and update their existing blog posts.
- View All Blogs: Visitors can see a list of all blog posts on the website.
- View Blog Details: Users can click on a blog post to view its full details on a dedicated page.

## Technologies Used

- Frontend:
  - React: A JavaScript library for building user interfaces.
  - React Router: For handling routing and navigation within the app.
  - Fetch: For making HTTP requests to the backend API.
  - CSS: Styling the user interface.
  
- Backend:
  - Node.js: A JavaScript runtime environment.
  - Express.js: A Node.js web application framework.
  - MongoDB: A NoSQL database for storing user data and blog posts.
  - JWT (JSON Web Tokens): For secure user authentication and authorization.
  - Bcrypt: For hashing user passwords for security.
  - Multer: Middleware for handling file uploads (e.g., for blog post images).
  - Cookie-Parser: For parsing cookies containing JWT tokens.

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine:
git clone https://github.com/your-username/my-blogging-app.git


2. Install dependencies for both the frontend and backend:
cd my-blogging-app
cd frontend
npm install
cd ../backend
npm install


3. Create a `.env` file in the `backend` directory with the following environment variables:
PORT=4000
MONGODB_URI=your-mongodb-connection-string
SECRET=your-secret-key


4. Start the backend server:
cd backend
npm start


5. Start the frontend development server:
cd frontend
npm start

