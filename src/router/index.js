import React from 'react';
import {createBrowserRouter, Outlet} from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';

import Main from '../routes/main';
import Error from '../routes/error';

import aboutRouter from '../routes/about';
import intelligenceRouter from '../routes/intelligence';
import overviewRouter from '../routes/overview';
import philosophyRouter from '../routes/philosophy';
import systemRouter from '../routes/system';

export const GlobalRouter = createBrowserRouter([
    {
        path: "/",
        element: (
          <>
              <Header />
              <Main />
              <Outlet />
              <Footer />
          </>
        ),
        errorElement: <Error />,
        children: [
            aboutRouter,
            intelligenceRouter,
            overviewRouter,
            philosophyRouter,
            systemRouter
        ]
    },
])

export default GlobalRouter;