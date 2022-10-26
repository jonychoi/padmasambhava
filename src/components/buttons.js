import React from 'react';
import {Flex, HoverFlex, Text} from '../components/base';
import { BackIcon, DarkIcon, DayIcon } from '../contents/vectors/icons';
import {ThemeEvent} from '../contexts/globalcontext';
import { themeInverser } from '../styles';

export const DimensionBtn = ({click, setClicked, hover}) => {
    const animator = () => {
        // if hover contact
            // if hover dimension
                // if hover space
                // if hover math
                // if hover ai
            // if hover about
            // else
        var hoverDimension = Object.values(hover.dimension.children).filter(item => item).length !== 0
        if (click){
            if (hover.contact) {
                return {
                    top: [12, 18, 24],
                    deg: [90, 90, 90],
                    left: [-10, 0, 10]
                }
            } else if (hover.about) {
                return {
                    top: [12, 18, 24],
                    deg: [90, 90, 90],
                    left: [-10, 0, 10]
                }
            } else if (hoverDimension || hover.dimension.hover) {
                if (hover.dimension.children.space) {
                    return {
                        top: [12, 18, 24],
                        deg: [90, 90, 90],
                        left: [-10, 0, 10]
                    }
                } else if (hover.dimension.children.math) {
                    return {
                        top: [12, 18, 24],
                        deg: [90, 90, 90],
                        left: [-10, 0, 10]
                    }
                } else if (hover.dimension.children.ai) {
                    return {
                        top: [12, 18, 24],
                        deg: [90, 90, 90],
                        left: [-10, 0, 10]
                    }
                } else {
                    return {
                        top: [18, 22, 26],
                        deg: [90, 90, 90],
                        left: [-10, 0, 10]
                    }
                }
            } else {
                return {
                    top: [18, 22, 26],
                    deg: [90, 90, 90],
                    left: [-10, 0, 10]
                }
            }
        } else {
            return {
                top: [12, 20, 28],
                deg: [0, 0, 0],
                left: [0, 0, 0]
            }
        }
    }
    return (
        <Flex position="relative" width="40px" height="40px" align="center" justify="center" to="opacity: 0.85" onClick={() => setClicked(!click)} zIndex={1000}>
            <Bar top={animator().top[0]} deg={animator().deg[0]} left={animator().left[0]} />
            <Bar top={animator().top[1]} deg={animator().deg[1]} left={animator().left[1]} />
            <Bar top={animator().top[2]} deg={animator().deg[2]} left={animator().left[2]} />
        </Flex>
    )
}

export const Bar = ({left, top, deg}) => {
    return (
        <Flex width="30px" height="2px" bg={themeInverser()} position="absolute" style={{left: left, top: top, transform: `rotate(${deg}deg)`, transition: 'all 300ms ease-in-out'}} />
    )
}

export const BackBtn = ({}) => {
    const svgcolor = {
        day: {
            circle: {
                fill: "#27272A",
            },
            path: {
                fill: "#71717A",
            }
        },
        dark: {
            circle: {
                fill: "#27272A",
            },
            path: {
                fill: "#71717A",
            }
        }
    }
   const hover = {
        day: {
            circle: {
                fill: "red",
            },
            path: {
                fill: "black",
            }
        },
        dark: {
            circle: {
                fill: "green",
            },
            path: {
                fill: "red",
            }
        }
   }
   return <HoverFlex svgcolor={svgcolor} hover={hover}><BackIcon /></HoverFlex>
}

export const ThemeBtn = ({}) => {
    const {theme, setTheme} = ThemeEvent();
    const themer = () => {
        if (theme === "day") {
            setTheme("dark")
        } else {
            setTheme("day");
        }
    }
    return (
        <Flex to="true" shadow={true} position="relative" style={{borderRadius: 50, width: 85, height: 35}} bg={theme === "day" ? "rgb(230,230,230)" : "#212121"} onClick={() => themer()} align="center" justify="center">
            <Flex align="center" justify="center" position="absolute" br="50%" bg="black" width="30px" height="30px" style={{transition: 'all ease-in-out 500ms', opacity: theme === "day" ? 1 : 0, right: theme === "day" ? 5 : 85 - 2.5 - 30, top: 2.5, zIndex: 10}}>
                <DarkIcon path="white" width={20} height={25} />
            </Flex>
            <Flex align="center" justify="center" position="absolute" br="50%" bg="rgb(55,55,55)" width="30px" height="30px" style={{transition: 'all ease-in-out 500ms', opacity: theme === "dark" ? 1 : 0, right: theme === "day" ? 5 : 85 - 2.5 - 30, top: 2.5, zIndex: 10}}>
                <DayIcon path="white" circle="white" line="white" width={20} height={20} />
            </Flex>
            <Text style={{right: 17, position: 'absolute', transition: 'all ease-in-out 300ms', opacity: theme === "dark" ? 1 : 0}} weight="700" size={12} ff="Montserrat">DAY</Text>
            <Text style={{left: 9, position: 'absolute', transition: 'all ease-in-out 500ms', opacity: theme === "day" ? 1 : 0}} weight="700" size={12} ff="Montserrat">DARK</Text>
        </Flex>
    )
}