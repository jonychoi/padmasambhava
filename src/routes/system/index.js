import React from 'react';
import System from './system';

import integratedRouter from './integrated';
import linearRouter from './linearsystem';
import quantumRouter from './quantum';
import relativeRouter from './relative';
import probabilityRouter from './probability';

export const systemRouter = {
  path: 'system',
  element: <System />,
  children: [
    integratedRouter,
    linearRouter,
    quantumRouter,
    relativeRouter,
    probabilityRouter
  ]
};

export default systemRouter;