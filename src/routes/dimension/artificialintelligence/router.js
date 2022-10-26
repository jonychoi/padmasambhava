import AriticialIntelligence from './index';

export const aiRouter = {
    path: "/dimension/ai/",
    element: <AriticialIntelligence />,
    children: [
      {
        path: ":articleId",
        element: <AriticialIntelligence />
      }
    ]
};

export default aiRouter;