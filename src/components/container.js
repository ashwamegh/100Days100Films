import React, { useContext } from 'react';
import { ThemeContext } from './../store';

export default ({ children }) => {
    const { state } = useContext(ThemeContext);
    return (
        <div 
            class="app-container"
            style={{
                backgroundColor: state.backgroundColor,
                color: state.color
            }}
        >
            { children }
        </div>
    )
}