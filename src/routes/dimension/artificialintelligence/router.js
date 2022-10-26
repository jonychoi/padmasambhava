import AriticialIntelligence from './index';

export const aiRouter = {
    path: "/padmasambhava/dimension/ai",
    element: <AriticialIntelligence />,
    children: [
      {
        path: "/padmasambhava/dimension/:articleId",
        element: <AriticialIntelligence />
      }
    ]
};

export default aiRouter;