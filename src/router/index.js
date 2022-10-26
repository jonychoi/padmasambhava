import React from 'react';
import {createBrowserRouter, Outlet, Route} from 'react-router-dom';
import Main from '../routes/main';
import ErrorPage from '../routes/error';

import Header from '../components/header';
import Footer from '../components/footer';

import dimensionRouter from '../routes/dimension/router';
import aboutRouter from '../routes/about/router';
import contactRouter from '../routes/contact/router';

export const GlobalRouter = createBrowserRouter([
    {
        path: "/padmasambhava",
        element: (
          <>
              <Header />
              <Main />
              <Footer />
          </>
        ),
        errorElement: <ErrorPage />,
    },
    dimensionRouter,
    aboutRouter,
    contactRouter,
])

export default GlobalRouter;