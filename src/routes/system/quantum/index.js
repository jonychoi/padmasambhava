import QuantumTheroy from './quantum'

export const quantumRouter = {
    path: 'quantum-theory',
    element: <QuantumTheroy />,
    children: [
        {
            path: ':articleId',
            element: <QuantumTheroy />
        }
    ]
};

export default quantumRouter;