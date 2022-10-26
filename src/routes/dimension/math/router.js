import Math from './index';

export const mathRouter = {
    path: "/padmasambhava/dimension/math",
    element: <Math />,
    children: [
      {
        path: "/padmasambhava/dimension/:articleId",
        element: <Math />
      }
    ]
};

export default mathRouter;