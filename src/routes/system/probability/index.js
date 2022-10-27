import React from 'react';
import Probability from './probability';

export const probabilityRouter = {
    path: 'probability',
    element: <Probability />,
    children: [
        {
            path: ':articleId',
            element: <Probability />
        }
    ]
};

export default probabilityRouter;