import {
  Grid,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ColorContext } from '../../theme/Color';

export interface IProgressBarWithLabel extends LinearProgressProps {
  label: string;
  value: number;
}

export const ProgressBarWithLabel = ({
  label,
  value,
  ...rest
}: IProgressBarWithLabel) => {
  const [counter, setCounter] = useState(0);
  const color = useContext(ColorContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter < value * 100) setCounter((prev) => prev + 2);
    }, 10);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Grid container spacing={0} sx={{ py: 1 }}>
      <Grid item xs={6} sx={{ textAlign: 'left' }}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid item xs={6} sx={{ textAlign: 'right' }}>
        <Typography>{`${Math.floor(value * 100)}%`}</Typography>
      </Grid>
      <Grid item xs={12}>
        <LinearProgress
          sx={{
            backgroundColor: 'transparent',
            '& .MuiLinearProgress-barColorPrimary': {
              backgroundColor: `${color}`,
            },
          }}
          variant='determinate'
          color='primary'
          value={counter}
          {...rest}
        />
      </Grid>
    </Grid>
  );
};
