
# Minimalist 

Minimalist is a simple task app that allows users to create and manage their tasks easily. The app is built using Node.js, Express, Next.js, and Tailwind CSS, and it's divided into two directories - backend and frontend.


## Backend
The backend of the app is built using Node.js and Express. It provides RESTful APIs that allow the frontend to interact with the database and perform CRUD operations on tasks. The backend uses MongoDB as its database and is deployed on Render. The backend also has JWT authentication implemented to secure the APIs.

### Installation
To install the backend, follow these steps:
    1. Clone the repository.
1. Navigate to the backend directory.
1. Run `npm install` to install the dependencies.
1. Create a `.env` file in the backend directory and add the following environment variables:

```javascript
PORT=3001
MONGODB_URI=<your MongoDB URI>
JWT_SECRET=<your JWT secret key>
GOOGLE_CLIENT_ID=<your Google client ID>
GOOGLE_CLIENT_SECRET=<your Google client secret>
```

5. Run `npm start` to start the server.



## Frontend

The frontend of the app is built using Next.js and Tailwind CSS. It provides a simple and intuitive user interface that allows users to create and manage their tasks. The frontend is secured using JWT authentication implemented using NextAuth. The frontend also has authentication with Google implemented using NextAuth. The frontend is deployed on Vercel.

### Installation
To install the frontend, follow these steps:

1. Clone the repository.
1. Navigate to the frontend  directory.
1. Run `npm install` to install the dependencies.
1. Create a `.env` file in the backend directory and add the following environment variables:

```javascript
NEXT_PUBLIC_API_URL=<your backend API URL>
NEXTAUTH_URL=<your frontend URL>
JWT_SECRET=<your JWT secret key>
GOOGLE_CLIENT_ID=<your Google client ID>
GOOGLE_CLIENT_SECRET=<your Google client secret>
```

5. Run `npm run dev` to start the development  server.

### Usage

To use Minimalist, follow these steps:

1. Open your web browser and go to the frontend URL.
1. Create an account using email and password, or log in using Google.
1. Create a task by clicking the "Create Task" button.
1. Edit or delete tasks as needed.
1. Mark tasks as completed when they're done.
