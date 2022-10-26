import React from 'react';
import {Flex, Col, Row, Text, Image} from '../../components/base';
import styled from 'styled-components';
import { themeInverser, themeTexter } from '../../styles';

// Comments
import Comments from '../comment';

const ATag = styled.a`
    text-decoration: none;
    :hover {
        opacity: 1;
    };
    opacity: 0.85;
    font-style: italic;
    color: ${(props) => themeTexter()};
`;

export const ArticleBox = ({article}) => {
    return (
        <article style={{width: '100%'}}>
            <Col width="100%">
                <ArticleHead head={article.head} />
                <ArticleParagraph paragraphs={article.paragraphs}/>
                <Comments article={article.head} />
            </Col>
        </article>
    )
}

export const ArticleHead = ({head}) => {
    return (
        <Col mb="3rem">
            <Row mb="3rem" align="center">
                <Flex mr="12.5px" height="20px" bg={themeInverser()} opacity={0.7} width="2px" />
                <Text ff="Crimson Text" size="1.2rem" opacity={0.7}>{head.date}</Text>
            </Row>
            <Text size="2.5rem" weight="600" lh="3.5rem" ff="Crimson Text">{head.title}</Text>
        </Col>
    )
}

export const ArticleParagraph = ({paragraphs}) => {
    return (
        <Col>
            {paragraphs.map((paragraph) => (
                paragraph.text && 
                    <p key={paragraph.text} style={{marginBottom: "2rem"}}>
                        <Text color={themeTexter()} lh="1.8rem" ff="Crimson Text" weight="300" size="1.15rem">
                            {paragraph.text}
                        </Text>
                    </p>
                ) || paragraph.pic && (
                    <Col key={paragraph.pic} mb="2rem" align="center" justify="center">
                        <Flex height={paragraph.height ? paragraph.height : null} width={paragraph.width ? paragraph.width : '100%'} overflow="hidden" br={paragraph.radius ? paragraph.radius : 0}>
                            <Image src={paragraph.pic} of="cover" width="100%" height="100%" />
                        </Flex>
                        <Text color={themeTexter()} mt="15px" ff="Crimson Text" weight="300" lh="1.8rem" size="1.15rem">{paragraph.caption}</Text>
                        <Text color={themeTexter()} ff="Crimson Text" weight="300" mt="5px" size="1.15rem">
                            <Text color={themeTexter()} ff="Crimson Text" style={{fontStyle: "italic", opacity: 0.85}} weight="300" size="1.15rem">Reference: </Text>
                            <ATag href={paragraph.reflink}>{paragraph.ref}</ATag>
                        </Text>
                    </Col>
                )
            )}
        </Col>
    )
}