import Mind from "./mind";

export const mindRouter = {
    path: 'mind',
    element: <Mind />,
    children: [
        {
            path: ':articleId',
            element: <Mind />
        }
    ]
}

export default mindRouter;