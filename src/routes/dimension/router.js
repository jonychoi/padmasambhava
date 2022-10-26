import Dimension from './index';

import Header from '../../components/header';
import Footer from '../../components/footer';

import spaceRouter from './space/router';
import mathRouter from './math/router';
import aiRouter from './artificialintelligence/router';
import { Outlet } from 'react-router-dom';

export const dimensionRouter = {
    path: "dimension",
    element: (
      <>
          <Header />
          <Outlet />
          <Footer />
      </>
    ),
    children: [
      spaceRouter,
      mathRouter,
      aiRouter,
    ]
}

export default dimensionRouter;