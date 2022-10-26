import React, {useState} from 'react';
import {Flex, Row, Col, Image, Link, Text} from '../components/base';
import Padmasambhava from '../contents/vectors/padmasambhava.svg';
import { DimensionBtn, ThemeBtn } from './buttons';
import styled from 'styled-components';

const HeadText = styled(Text)`
    :hover {
        cursor: pointer;
        opacity: 0.85
    };
    font-size: 18px;
    font-weight: 500;
    margin: 0px 25px;
    font-family: 'Montserrat', sans-serif;
`;

export const Header = ({}) => {
    const [menuClick, setMenuClicked] = useState(false);
    const [hover, setHover] = useState({
        contact: false,
        about: false,
        dimension: {
            hover: false,
            children: {
                space: false,
                math: false,
                ai: false
            }
        }
    });
    return (
        <header>
            <Row position="fixed" width="100vw" style={{top: 0, left: 0}} align="center" justify="space-between" ptb="10px" prl="15px">
                <Link to="/padmasambhava/">
                    <Row to="opacity: 0.85" align="center" justify="center">
                        <Image width="50px" height="50px" src={Padmasambhava} />
                        <Text ff="Crimson Text" weight="700" ml="10px" mt="5.5px" size={22}>PADMASAMBHVA</Text>
                    </Row>
                </Link>
                <nav>
                    <Row align="center" justify="space-between"  padding={10} position="absolute" style={{top: 18, right: menuClick ? 70: -300, opacity: menuClick ? 1 : 0, transition: 'all 500ms ease-in-out'}} zIndex={1000}>
                        <Link to="/padmasambhava/dimension">
                            <HeadText onMouseEnter={() => setHover({...hover, dimension: {children: hover.dimension.children, hover: true}})}>DIMENSION</HeadText>
                        </Link>
                        {/* <Col>
                            <Row mt="10">
                                <HeadText>SPACE</HeadText>
                                <HeadText>MATH</HeadText>
                                <HeadText>ARTIFICIAL INTELLIGENCE</HeadText>
                            </Row>
                        </Col> */}
                        <Link to="/padmasambhava/about">
                            <HeadText>ABOUT</HeadText>
                        </Link>
                    </Row>
                    <DimensionBtn click={menuClick} setClicked={setMenuClicked} hover={hover} setHover={setHover} />
                    <Flex position="absolute" us="none" style={{right: 80, top: 20, opacity: menuClick ? 0 : 1}}>
                        <ThemeBtn menuClick={menuClick} />
                    </Flex>
                </nav>
            </Row>
        </header>
    )
};

export default Header;