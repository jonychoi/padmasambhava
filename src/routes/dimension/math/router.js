import Math from './index';

export const mathRouter = {
    path: "math",
    element: <Math />,
    children: [
      {
        path: ":articleId",
        element: <Math />
      }
    ]
};

export default mathRouter;