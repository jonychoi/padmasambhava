import React, {useState, useEffect} from 'react';
import {Screen, Flex, Col, Row, Text} from '../base';
import ArticleBox from './components';

export const Article = ({}) => {
    const article = {
        head: {
            title: "Website"
        }
    }
    return (
        <Screen prl="15%">
            <ArticleBox article={article} />
        </Screen>
    )
};

export default Article;