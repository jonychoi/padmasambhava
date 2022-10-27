import Intelligence from './intelligence';
import aiRouter from './artificialintelligence';
import neurologyRouter from './neurology';

export const intelligence = {
    path: "intelligence",
    element: <Intelligence />,
    children: [
      aiRouter,
      neurologyRouter,
    ]
}

export default intelligence;