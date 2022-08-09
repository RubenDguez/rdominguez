import {
    CircularProgress,
    CircularProgressProps,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useContext, useEffect, useState } from 'react';
import { ColorContext } from '../../theme/Color';

export interface ICircularProgressBarWithLabel extends CircularProgressProps {
  value: number;
}

export const CircularProgressBarWithLabel = ({
    value,
    ...rest
}: ICircularProgressBarWithLabel) => {
    const color = useContext(ColorContext);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (counter < value * 100) setCounter((prev) => prev + 2);
        }, 10);
        return () => {
            clearTimeout(timer);
        };
    });

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                sx={{ color: `${color}` }}
                size={50}
                variant="determinate"
                value={counter}
                {...rest}
            />
            <Box
                sx={{
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography sx={{ fontSize: '0.60rem' }}>{`${Math.round(
                    value * 100,
                )}%`}</Typography>
            </Box>
        </Box>
    );
};
