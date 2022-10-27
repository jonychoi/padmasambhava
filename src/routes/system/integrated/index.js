import IntegratedTheory from './integrated'

export const integratedRouter = {
    path: 'intergrated-theory',
    element: <IntegratedTheory />,
    children: [
        {
            path: ':articleId',
            element: <IntegratedTheory />
        }
    ]
};

export default integratedRouter;