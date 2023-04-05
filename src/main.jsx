import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import First from './component/First/First';
import Friends from './component/Friends/Friends';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Posts from './component/Posts/Posts';
import PostDeails from './component/PostDetails/PostDeails';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        // dynamic route make to id
        path: "friend/:friendId",
        element: <FriendDetail></FriendDetail>,
        // use template string
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: "posts",
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
      },
      {
        path: "post/:postId",
        element: <PostDeails></PostDeails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
