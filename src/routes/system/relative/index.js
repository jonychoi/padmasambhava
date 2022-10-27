import RelativeTheory from './relative'

export const relativeRouter = {
    path: 'relative-theory',
    element: <RelativeTheory />,
    children: [
        {
            path: ':articleId',
            element: <RelativeTheory />
        }
    ]
};

export default relativeRouter;