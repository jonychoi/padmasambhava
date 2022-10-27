import Buddhism from "./buddhism";

export const buddhismRouter = {
    path: 'buddhism',
    element: <Buddhism />,
    children: [
        {
            path: ':articleId',
            element: <Buddhism />
        }
    ]
}

export default buddhismRouter;