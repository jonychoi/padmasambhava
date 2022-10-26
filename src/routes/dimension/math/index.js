import React from 'react';
import { ArticleBox } from '../../../components/article/components';
import {Screen} from '../../../components/base';

export const Math = ({}) => {
    const article = {
        head: {
            date: "September 5, 2022",
            title: "Between the Desire and Brightness",
            id: "0",
        },
        paragraphs: [
            {
                text: "This is it. This is the first article of the Padmasambhava. Lorem ipsum odor amet, consectetuer adipiscing elit. Inceptos eget neque massa est ut. Conubia sit dictum sed sodales auctor etiam? Phasellus sem consectetur rhoncus risus cursus nulla. Fusce taciti arcu consequat risus hac potenti. Pharetra nisi varius a arcu adipiscing; porttitor tincidunt vehicula metus. Hac phasellus magna at commodo amet leo, elit maecenas sem. Imperdiet conubia quis fermentum aenean nisl phasellus semper. Etiam sociosqu ut himenaeos; felis ridiculus parturient in."
            },
            {
                pic: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplanetaria-design-system.d4cfce90.png&w=3840&q=75",
                caption: "Alternative Caption for first image",
                ref: "Crafting a design system for a multiplanetary future",
                reflink: "https://spotlight.tailwindui.com/articles/crafting-a-design-system-for-a-multiplanetary-future",
                radius: 30,
                width: null,
                height: null,
            },
            {
                text: "This is it. This is the second paragraph of the first article of the Padmasambhava. Lorem ipsum odor amet, consectetuer adipiscing elit. Inceptos eget neque massa est ut. Conubia sit dictum sed sodales auctor etiam? Phasellus sem consectetur rhoncus risus cursus nulla. Fusce taciti arcu consequat risus hac potenti. Pharetra nisi varius a arcu adipiscing; porttitor tincidunt vehicula metus. Hac phasellus magna at commodo amet leo, elit maecenas sem. Imperdiet conubia quis fermentum aenean nisl phasellus semper. Etiam sociosqu ut himenaeos; felis ridiculus parturient in."
            },
            {
                text: "This is it. This is the third paragraph of the first article of the Padmasambhava. Lorem ipsum odor amet, consectetuer adipiscing elit. Inceptos eget neque massa est ut. Conubia sit dictum sed sodales auctor etiam? Phasellus sem consectetur rhoncus risus cursus nulla. Fusce taciti arcu consequat risus hac potenti. Pharetra nisi varius a arcu adipiscing; porttitor tincidunt vehicula metus. Hac phasellus magna at commodo amet leo, elit maecenas sem. Imperdiet conubia quis fermentum aenean nisl phasellus semper. Etiam sociosqu ut himenaeos; felis ridiculus parturient in."
            }
        ]
    }
    return (
        <Screen prl="28%" pt="12%">
            <ArticleBox article={article} />
        </Screen>
    )
};

export default Math;