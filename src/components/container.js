import React, { useContext } from 'react';
import { ThemeContext } from './../store';
import './container.css';

export default ({ children }) => {
    const { state } = useContext(ThemeContext);
    return (
        <div 
            className="app-container"
            style={{
                backgroundColor: state.backgroundColor,
				color: state.color,
				transition: '0.3s background-color ease-in, 0.3s color ease-out'
            }}
        >
            { children }
        </div>
    )
}