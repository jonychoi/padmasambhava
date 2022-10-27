import React from 'react';
import Philosophy from './philosophy';
import buddhismRouter from './buddhism';
import mindRouter from './mind';

export const philoshophyRouter = {
    path: 'philosophy',
    element: <Philosophy />,
    children: [
        buddhismRouter,
        mindRouter
    ]
};

export default philoshophyRouter;