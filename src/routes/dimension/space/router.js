import Space from './index';

export const spaceRouter = {
    path: "/space",
    element: <Space />,
    children: [
      {
        path: "/:articleId",
        element: <Space />
      }
    ]
};

export default spaceRouter;