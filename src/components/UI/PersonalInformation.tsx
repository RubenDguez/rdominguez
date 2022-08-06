import { Box, Divider, Grid, Typography } from '@mui/material';
import { TPersonalInformation } from '../../types';

/**
 * Interface representing the user information
 * @description This interface represents the user information
 */
export interface IPersonalInformation {
  personalInformationData: TPersonalInformation[];
}

export const PersonalInf = ({
  personalInformationData,
}: IPersonalInformation) => {
  return (
    <>
      {personalInformationData.map((m, i) => (
        <Box key={i}>
          <Grid container spacing={1}>
            <Grid
              item
              xs={6}
              sx={{
                textAlign: 'left',
              }}
            >
              <Typography>{m.key}</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                textAlign: 'right',
                fontWeight: '600',
              }}
            >
              <Typography>{`${m.description}`}</Typography>
            </Grid>
          </Grid>
          {personalInformationData.length - 1 > i && (
            <Divider sx={{ marginTop: '0.65rem' }} />
          )}
        </Box>
      ))}
    </>
  );
};
