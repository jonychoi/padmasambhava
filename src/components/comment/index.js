import React, {useState, useEffect, useRef} from 'react';
import {Flex, Row, Col, Text} from '../../components/base';
import { Discussion, Comment, CommentCounts, DiscussionSSO, Recommendation } from './components';
import { ThemeEvent } from '../../contexts/globalcontext';

export const Comments = ({article}) => {
    const discussion = useRef(null);
    const {theme} = ThemeEvent();
    useEffect(() => {
        const styler = () => {
            const thread = document.getElementById("disqus_thread")
            console.log(thread)
            var tag = document.createElement('div');
            tag.className = "tag"
            tag.innerHTML = `
            `;
            thread.appendChild(tag)
        };
        setTimeout(() => styler(), 1000)
    }, [discussion])
    return (
        <Col id="disqus-wrapper">
            <Discussion article={article} element={discussion} />
            {/* <CommentCounts article={article} />
            <Comment article={article} />
            <DiscussionSSO article={article} />
            <Recommendation article={article} /> */}
        </Col>
    )
};

export default Comments;