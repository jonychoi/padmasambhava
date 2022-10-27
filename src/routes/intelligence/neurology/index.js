import Neurology from "./neurology";

export const neurologyRouter = {
  path: "neurology",
  element: <Neurology />,
  children: [
    {
      path: ":articleId",
      element: <Neurology />
    }
  ]
}

export default neurologyRouter;