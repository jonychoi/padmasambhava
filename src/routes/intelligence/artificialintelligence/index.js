import AriticialIntelligence from './ai';

export const aiRouter = {
    path: "a.i",
    element: <AriticialIntelligence />,
    children: [
      {
        path: "learning",
        element: <AriticialIntelligence />,
        children: [
          {
            path: ":articleId",
            element: <AriticialIntelligence />
          }
        ]
      },
    ]
}

export default aiRouter;