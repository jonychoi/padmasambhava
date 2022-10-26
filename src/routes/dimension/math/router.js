import Math from './index';

export const mathRouter = {
    path: "/dimension/math/",
    element: <Math />,
    children: [
      {
        path: ":articleId",
        element: <Math />
      }
    ]
};

export default mathRouter;