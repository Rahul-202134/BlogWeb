import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Ensure this file has global styles for light/dark modes
import { Provider } from 'react-redux';
import store from './store/store.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { AuthLayout, Login } from './components/index.js';
import News from './NewsComponents/News.jsx';
import AddPost from './pages/AddPost';
import Signup from './pages/Signup';
import EditPost from './pages/EditPost'; 
import Post from './pages/Post';
import AllPosts from './pages/AllPost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication>
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: '/post/:slug',
        element: <Post />,
      },
      {
        path: '/general',
        element: <News key="general" category="general" />
      },
      {
        path: '/entertainment',
        element: <News key="entertainment" category="entertainment" />
      },
      {
        path: '/technology',
        element: <News key="technology" category="technology" />
      },
      {
        path: '/sports',
        element: <News key="sports" category="sports" />
      },
      {
        path: '/health',
        element: <News key="health" category="health" />
      },
      {
        path: '/science',
        element: <News key="science" category="science" />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
