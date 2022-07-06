import { Slide, useScrollTrigger } from '@mui/material'
import React from 'react'

const ScrollToSlide = (props) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: props.threshold,
        target: props.window ? window() : undefined,
        threshold: 500,
    });

    return (
        <Slide appear={false} direction="down" in={trigger} bgColor='yellow'>
            {props.children}</Slide>
    );
}

export default ScrollToSlide
