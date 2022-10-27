import LinearSystem from './linearsystem'

export const linearRouter = {
    path: 'linear-system',
    element: <LinearSystem />,
    children: [
        {
            path: ':articleId',
            element: <LinearSystem />
        }
    ]
};

export default linearRouter;