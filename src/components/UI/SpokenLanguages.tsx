import { Box, Grid, Typography } from '@mui/material';
import { TSpokenLanguage } from '../../types';
import { CircularProgressBarWithLabel } from './CircularProgressBarWithLabel';

export interface ISpokenLanguages {
  spokenLanguages: TSpokenLanguage[];
}

export const SpokenLanguages = ({ spokenLanguages }: ISpokenLanguages) => {
  return (
    <>
      {spokenLanguages.map((m, i) => (
        <Grid key={i} item>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgressBarWithLabel value={m.percentage} />
            <Box sx={{ py: 1 }}>
              <Typography variant="caption" sx={{ textTransform: 'uppercase' }}>
                {m.language}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
};
