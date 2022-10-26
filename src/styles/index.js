import React from 'react';
import { ThemeEvent } from '../contexts/globalcontext';

export const themeInverser = () => ThemeEvent().theme === "day" ? "black" : "white";
export const themeNonInverser = () => ThemeEvent().theme === "day" ? "white" : "black";
export const themeTexter = () => ThemeEvent().theme === "day" ? "black" : "rgb(200, 200, 211)"